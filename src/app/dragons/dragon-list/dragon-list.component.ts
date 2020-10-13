import { Component, DoCheck, IterableDiffer, IterableDiffers, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Dragon } from 'src/app/models/dragon';
import { DragonService } from 'src/app/services/dragon.service';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.css']
})
export class DragonListComponent implements OnInit, DoCheck {
  differ: IterableDiffer<Dragon> = null;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private dragonService: DragonService,
    private differs: IterableDiffers) {
      this.differ = differs.find([]).create(null);
    }

  dragons: Dragon[] = [];

  p: number = 1;

  ngDoCheck() {
    let changes = this.differ.diff(this.dragons);

    if (changes) {
      this.dragons = this.dragons.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 
    }
  }

  ngOnInit(): void {
    this.dragonService.getDragons().subscribe(
      data => { 
        this.dragons = data.map(s => {
          return {...s,
            photo: `assets/dragon/${Math.floor(Math.random() * 7) + 1}.png`
          }
        });
      },
      fail => { this.toastr.error(fail); },
      () => { });
  }

  private removeDragon(id: number) {
    this.dragonService.deleteDragon(id).subscribe(
      data => {
        const originalDragonIndex = this.dragons.findIndex(d => d.id == id);

        this.dragons.splice(originalDragonIndex, 1);
      },
      fail => { this.toastr.error(fail); },
      () => { });
  }
}