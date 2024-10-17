import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RocketType } from '../model/rockettype';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-type',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-type.component.html',
  styleUrl: './update-type.component.css'
})
export class UpdateTypeComponent {
  @Input()
  type!: RocketType;

  @Input()
  ajout!: boolean;

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateType ", this.type);
  }

  @Output()
  typeUpdated = new EventEmitter<RocketType>();

  saveType() {
    this.typeUpdated.emit(this.type);
  }
}
