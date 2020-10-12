import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dragon } from 'src/app/models/dragon';
import * as moment from 'moment'; 

@Component({
  selector: 'app-dragon-details',
  templateUrl: './dragon-details.component.html',
  styleUrls: ['./dragon-details.component.css']
})
export class DragonDetailsComponent implements OnInit {

  createdDate: string;
  dragon: Dragon = new Dragon();

  constructor(private route: ActivatedRoute) {
    this.dragon = this.route.snapshot.data['dragon'];
    this.createdDate = moment(new Date(this.dragon.createdAt)).format("MM/DD/yyyy hh:mm a");
  }

  ngOnInit(): void {}
}
