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
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class AppComponent {
  title = 'app';

  show:boolean = false;

  constructor( @Inject(DOCUMENT) private document: Document ){ }

  showFunction() {
    this.show = true;
  }

  @HostListener("window:scroll", [])
onWindowScroll() {
 //we'll do some stuff here when the window is scrolled
 this.showFunction();
 let number = this.document.body.scrollTop;
 
}

}
