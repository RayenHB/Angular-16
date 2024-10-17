import { Component } from '@angular/core';
import { RocketType } from '../model/rockettype';
import { RocketService } from '../rocket.service';
import { CommonModule, NgFor } from '@angular/common';
import { UpdateTypeComponent } from "../update-type/update-type.component";

@Component({
  selector: 'app-list-types',
  standalone: true,
  imports: [CommonModule, NgFor, UpdateTypeComponent],
  templateUrl: './list-types.component.html',
  styleUrl: './list-types.component.css'
})
export class ListTypesComponent {

  Types!: RocketType[];
  updatedType: RocketType = { "id": 0, "nomRocketType": "" };
  ajout:boolean=true;

  constructor(private rocketService: RocketService) { }
  ngOnInit(): void {
    this.rocketService.listeTypes().
      subscribe(types => {
        this.Types = types._embedded.rocket_type;
        console.log(types);
      });
  }
  chargerTypes(){
    this.rocketService.listeTypes().
    subscribe(types => {this.Types = types._embedded.rocket_type;
    console.log(types);
    });
    }
  typeUpdated(type: RocketType) {
    console.log("type updated event", type);
    this.rocketService.ajouterType(type).
      subscribe(() => this.chargerTypes());
  }

  updateType(type:RocketType) {
    this.updatedType=type;
    this.ajout=false;
    }
    

}

