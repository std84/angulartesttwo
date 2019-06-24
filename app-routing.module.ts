import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputoneComponent } from './inputone/inputone.component';
import { InputtwoComponent } from './inputtwo/inputtwo.component';


const routes: Routes = [
  { path: '', component: InputoneComponent },
  { path: 'inpone', component: InputoneComponent },
  { path: 'inptwo', component: InputtwoComponent },

  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
