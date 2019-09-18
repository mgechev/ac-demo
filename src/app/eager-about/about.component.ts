import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
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
