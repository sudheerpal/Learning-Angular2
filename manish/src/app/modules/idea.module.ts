import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import {IdeaCreateComponent} from '../components/ideas/idea-create.component';

import { IdeaRoutingModule } from '../routing/idea-routing.module';

@NgModule({
  imports:      [ CommonModule, FormsModule, ReactiveFormsModule, IdeaRoutingModule ],
  declarations: [ IdeaCreateComponent ]
})
export class IdeaModule { }
