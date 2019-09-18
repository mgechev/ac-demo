import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <h1>About</h1>

  <section>This page was developed to show a minimal
  example of preloading of routes in Angular.</section>
  `,
  styles: [`
    :host {
      height: 100%;
      text-align: center;
      max-width: 600px;
      display: block;
      margin: auto;
    }

    img {
      display: block;
      margin: auto;
    }
  `]
})
export class AboutComponent {}
