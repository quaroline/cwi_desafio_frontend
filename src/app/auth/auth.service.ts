import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { StringUtils } from '../utils/string-utils';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        let currentUser = this.currentUserSubject.value;
        let today = StringUtils.GetFormattedDate(new Date());

        return (currentUser && currentUser.token == StringUtils.CryptoText(today)) ? currentUser : null;
    }

    login(username, password): Observable<User> {
        if (StringUtils.USERNAME == username && StringUtils.PASSWORD == password) {
            let today = StringUtils.GetFormattedDate(new Date());

            let user = new User();

            user.username = username;
            user.password = password;
            user.token = StringUtils.CryptoText(today);

            localStorage.setItem('currentUser', JSON.stringify(user));
            return of(user);
        }
        
        return throwError("Username or password are incorrect.");
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}