import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app';
import { ComponentsModule } from 'src/app/components.module';


@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: '1'},
      {path: '1', loadChildren: 'src/app/m1#M1Module'},
      {path: '2', loadChildren: 'src/app/m2#M2Module'},
      {path: '3', loadChildren: 'src/app/normal-lazy-module#NormalLazyModule'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
