import { Component } from '@angular/core';
import { Rocket } from '../model/rocket.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RocketService } from '../rocket.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RocketType } from '../model/rockettype';

@Component({
  selector: 'app-update-rocket',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-rocket.component.html',
  styleUrl: './update-rocket.component.css'
})
export class UpdateRocketComponent {
  rocket_type: RocketType[] = [];
  updatedTyId!: number | undefined;

  currentRocket = new Rocket();
  constructor(private activatedRoute: ActivatedRoute, private rocketService: RocketService, private router: Router,) { }
  ngOnInit() {
    this.rocketService.listeTypes().
    
      subscribe(types => {
        console.log(types);
        this.rocket_type = types._embedded.rocket_type;
      }
      );
    this.rocketService.consulterRocket(this.activatedRoute.snapshot.params['id']).
      subscribe(types => {
        this.currentRocket = types;
        this.updatedTyId = this.currentRocket.RocketType?.id;
      });


  }

  updateRocket() {
    this.currentRocket.RocketType = this.rocket_type?.find(type => type.id == this.updatedTyId)!;
    this.rocketService.updateRocket(this.currentRocket).subscribe(rock => {
      this.router.navigate(['rockets']);
    }
    );

  }

}
