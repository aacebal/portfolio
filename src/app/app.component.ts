import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  nameReveal: boolean = false;

  constructor(){ }

  reveal() {
    this.nameReveal = !this.nameReveal;
    console.log("mouseover called");
  }

}
