import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrazioneRoutingModule } from './registrazione-routing.module';
import { RegistrazioneComponent } from './registrazione.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistrazioneComponent,

  ],
  imports: [
    CommonModule,
    RegistrazioneRoutingModule,
    FormsModule
  ]
})
export class RegistrazioneModule { }
