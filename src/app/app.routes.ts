import { Routes } from '@angular/router';
import { RocketsComponent } from './rockets/rockets.component';
import { AddRocketComponent } from './add-rocket/add-rocket.component';
import { UpdateRocketComponent } from './update-rocket/update-rocket.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListTypesComponent } from './list-types/list-types.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RocketGuard } from './rocket.guard';

export const routes: Routes = [
    {path: "rockets", component : RocketsComponent},
    {path: "add-rocket", component : AddRocketComponent,canActivate:[RocketGuard]},
    {path: "", redirectTo: "rockets", pathMatch: "full" },
    {path: "updateRocket/:id", component: UpdateRocketComponent},
    {path: "rechercheParType", component : RechercheParTypeComponent},
    {path: "rechercheParNom", component : RechercheParNomComponent},
    {path: "listeTypes", component : ListTypesComponent},
    {path: 'login', component: LoginComponent},
    {path: 'app-forbidden', component: ForbiddenComponent},

];
