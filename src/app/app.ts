import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <a routerLink="/1">1</a>
    <a routerLink="/2">2</a>
    <a routerLink="/3">3</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
