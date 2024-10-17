import { Component } from '@angular/core';
import { Rocket } from '../model/rocket.model';
import { FormsModule } from '@angular/forms';
import { RocketService } from '../rocket.service';
import { RocketType } from '../model/rockettype';
import { Router } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-add-rocket',
  standalone: true,
  imports: [FormsModule, NgFor, CommonModule],
  templateUrl: './add-rocket.component.html',
  styleUrl: './add-rocket.component.css'
})
export class AddRocketComponent {
  rocket_type: RocketType[] = [];
  newIdTy!: number;
  newRocket_type!: RocketType;

  newRocket: Rocket = new Rocket();
  constructor(private rocketService: RocketService, private router: Router) { }

  
  addRocket() {
    this.newRocket.RocketType = this.rocket_type?.find(ty => ty.id == this.newIdTy)!;
    this.rocketService.ajouterRocket(this.newRocket)
      .subscribe(rock => {
        console.log(rock);
        this.router.navigate(['rockets']);
      });



  }
  ngOnInit() {
    this.rocketService.listeTypes().subscribe(types => {
        console.log(types);
        this.rocket_type = types._embedded.rocket_type;
        console.log(this.rocket_type); 
    });
}

}
