import { Component } from '@angular/core';
import { RocketService } from '../rocket.service';
import { Rocket } from '../model/rocket.model';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from "../search-filter.pipe";

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.component.html',
  styleUrl: './recherche-par-nom.component.css'
})
export class RechercheParNomComponent {
  allrockets!: Rocket[];
  searchTerm!: string;
  nomRocket!: string ;
  rockets! : Rocket[];
  constructor(private rocketService: RocketService) {

  }
  rechercherRocks(){
    this.rocketService.rechercherParNom(this.nomRocket).
    subscribe(rocks => {
    this.rockets = rocks;
    console.log(rocks)});
    }

    ngOnInit(): void {
      this.rocketService.listeRockets().subscribe(rocks => {
      console.log(rocks);
      this.allrockets = rocks;
      });
      }

      onKeyUp(filterText : string){
        this.rockets = this.allrockets.filter(item =>
        item.nomRocket?.toLowerCase().includes(filterText));
        }
        
    
}
