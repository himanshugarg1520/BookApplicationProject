import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuterComponent } from './Books/Component/outer/outer.component';
import { DetailsComponent } from './Books/Component/details/details.component';

const routes: Routes = [

  { path: '', component: OuterComponent },
  // { path: 'book', component: OuterComponent },
  { path: 'book/details', component: DetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
