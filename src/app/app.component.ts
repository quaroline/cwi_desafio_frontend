import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StringUtils } from './utils/string-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  isUserLoggedIn(): boolean {
    let today = StringUtils.GetFormattedDate(new Date());
    let token = StringUtils.CryptoText(today);
    
    var localToken = localStorage.getItem("dragondex.user");

    if (localToken != null) {
      let user = JSON.parse(localToken);

      return user.token == token;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('dragondex.user');
    this.router.navigate(['/login']);
  }
}