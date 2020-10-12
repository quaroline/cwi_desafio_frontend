import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Dragon } from '../models/dragon';
import { DragonService } from './dragon.service';

@Injectable()
export class DragonResolve implements Resolve<Dragon> {
    constructor(private dragonService: DragonService) {}

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.params['id'];

        return id ? this.dragonService.getDragonById(id) : null;
    }
}
