import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dragon } from 'src/app/models/dragon';
import { DragonService } from 'src/app/services/dragon.service';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.css']
})
export class DragonListComponent implements OnInit {

  constructor(
    private router: Router,
    private dragonService: DragonService) {
    }

  dragons: Dragon[] = [];

  ngOnInit(): void {
    this.dragonService.getDragons().subscribe(
      data => { 
        this.dragons = data.map(s => {
          return {...s,
            photo: `assets/dragon/${Math.floor(Math.random() * 7) + 1}.png`
          }
        })
      },
      fail => { alert("erro"); },
      () => { });
  }

  private removeDragon(id: number) {
    this.dragonService.deleteDragon(id).subscribe(
      data => {
        const deletedDragonIndex = this.dragons.findIndex(d => d.id == id);

        this.dragons.splice(deletedDragonIndex, 1);
      },
      fail => { alert("erro"); },
      () => { });
  }
}