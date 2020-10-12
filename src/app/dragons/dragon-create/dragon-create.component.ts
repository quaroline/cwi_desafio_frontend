import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dragon } from 'src/app/models/dragon';
import { DragonService } from 'src/app/services/dragon.service';

@Component({
  selector: 'app-dragon-create',
  templateUrl: './dragon-create.component.html',
  styleUrls: ['./dragon-create.component.css']
})
export class DragonCreateComponent implements OnInit {

  originalDragon: Dragon = new Dragon();
  dragon: Dragon = new Dragon();
  dragonForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dragonService: DragonService) {
  }

  ngOnInit(): void {
    this.dragonForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  reset() {
    this.dragon = new Dragon();
  }

  createDragon() {
    if (!this.dragonForm.dirty || !this.dragonForm.valid) {
      alert("Something's wrong! Try again later.");
    }

    this.dragonService.addDragon(this.dragon).subscribe(
      data => { alert(`${this.dragon.name} added successfully.`); },
      fail => { alert(`Error: ${fail}`); },
      () => { this.router.navigate(['/']); });
  }
}
