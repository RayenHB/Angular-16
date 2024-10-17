import { Component } from '@angular/core';
import { Rocket } from '../model/rocket.model';
import { RocketType } from '../model/rockettype';
import { RocketService } from '../rocket.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recherche-par-type',
  standalone: true,
  imports: [NgFor, CommonModule,FormsModule],
  templateUrl: './recherche-par-type.component.html',
  styleUrl: './recherche-par-type.component.css'
})
export class RechercheParTypeComponent {
  rockets!: Rocket[];
  IdType!: number;
  Types!: RocketType[];
  constructor(private rocketService: RocketService) {

  }
  ngOnInit(): void {
    this.rocketService.listeTypes().
    subscribe(types => {this.Types = types._embedded.rocket_type;
    console.log(types);
    });
    }

    onChange() {
      this.rocketService.rechercherParType(this.IdType).
      subscribe(rocks =>{this.rockets=rocks});
      }
}
