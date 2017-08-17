import { Component, HostListener, Inject } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger(
      'enterRightAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
      ]),
    trigger(
      'exitRightAnimation', [
        transition(':enter', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
      ]),
    ]),
    trigger(
      'enterLeftAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
      ]),
    ]),
    trigger(
      'exitLeftAnimation', [
        transition(':enter', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(-100%)', opacity: 0}))
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'app';

  showDescription:boolean = false;
  showGames:boolean = false;
  showExpress:boolean = false;
  showAngular:boolean = false;
  showMiami:boolean = false;

  constructor( @Inject(DOCUMENT) private document: Document ){ }


@HostListener("window:scroll", [])
  onWindowScroll() {
   //we'll do some stuff here when the window is scrolled
   let number = this.document.body.scrollTop;
   console.log(number);
   if( number === 0 ) {
     this.showGames = false;
     this.showExpress = false;
     this.showAngular = false;
   }
   if( number >= 5 ) {
     this.showDescription = true;
   }
   if( number >= 500 ) {
     this.showGames = true;
   }
   if( number >= 750 ) {
     this.showExpress = true;
   }
   if( number >= 1200 ) {
     this.showAngular = true;
   }
   if( number >= 1600 ) {
     this.showMiami = true;
   }

}

}
