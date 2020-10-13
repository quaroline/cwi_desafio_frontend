import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Dragon } from 'src/app/models/dragon';
import { DragonService } from 'src/app/services/dragon.service';

@Component({
  selector: 'app-dragon-edit',
  templateUrl: './dragon-edit.component.html',
  styleUrls: ['./dragon-edit.component.css']
})
export class DragonEditComponent implements OnInit {

  originalDragon: Dragon = new Dragon();
  dragon: Dragon = new Dragon();
  dragonForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private dragonService: DragonService) {
    this.originalDragon = this.route.snapshot.data['dragon'];
    this.dragon = Object.assign({}, this.originalDragon);
  }

  ngOnInit(): void {
    this.dragonForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.dragonForm.get("name").setValue(this.originalDragon.name);
    this.dragonForm.get("type").setValue(this.originalDragon.type);
  }

  reset() {
    this.dragon = Object.assign({}, this.originalDragon);
  }

  editDragon() {
    if (!this.dragonForm.dirty || !this.dragonForm.valid) {
      this.toastr.error("Something's wrong! Try again later.");
    }

    this.dragon.histories = this.originalDragon.name;

    //this.dragon.histories.push(this.originalDragon);
    this.dragonService.editDragon(this.originalDragon.id, this.dragon).subscribe(
      data => { this.toastr.success(`${this.dragon.name} edited successfully.`); },
      fail => { this.toastr.error(`Error: ${fail}`); },
      () => { this.router.navigate(['/']); });
  }
}
