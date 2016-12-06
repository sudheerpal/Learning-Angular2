import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IdeaCreateComponent} from '../components/ideas/idea-create.component';

const ideasRoutes: Routes = [
  { path: 'idea/create', component: IdeaCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ideasRoutes)],
  exports: [RouterModule]
})
export class IdeaRoutingModule { }
