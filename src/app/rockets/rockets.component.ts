import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Rocket } from '../model/rocket.model';
import { FormsModule } from '@angular/forms';
import { RocketService } from '../rocket.service';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';





@Component({
  selector: 'app-rockets',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule, RouterModule],
  templateUrl: './rockets.component.html',
  styleUrl: './rockets.component.css'
})
export class RocketsComponent {

  rockets!: Rocket[]  ;
  constructor(private rocketService: RocketService, public authService: AuthService) {

  }

  ngOnInit(): void {
    this.chargerRockets();
  }

  chargerRockets() {
    this.rocketService.listeRockets().subscribe(rocks => {
      console.log(rocks);
      this.rockets = rocks;
      console.log('rocket_type:', this.rockets);
    });
  }
  supprimerRocket(p: Rocket) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.rocketService.supprimerRocket(p.idRocket!).subscribe(() => {
        console.log("Rocket supprimé");
        this.chargerRockets();
      });
  }
}
