import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components.module';
import { RouterModule } from '@angular/router';
import { Component2Component } from 'src/app/c2';

@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forChild([
      {path: '', component: Component2Component},
    ])
  ]
})
export class M2Module {}
