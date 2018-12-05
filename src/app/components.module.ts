import { NgModule } from '@angular/core';
import { Component1Component } from 'src/app/c1';
import { Component2Component } from 'src/app/c2';
import { Component3Component } from 'src/app/c3';
import { Component4Component } from 'src/app/c4';
import { Component5Component } from 'src/app/c5';
import { AppComponent } from 'src/app/app';
import { RouterModule } from '@angular/router';

const d = [
  Component1Component,
  Component2Component,
  Component3Component,
  Component4Component,
  Component5Component,
  AppComponent,
];

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: d,
  exports: d,
})
export class ComponentsModule {}
