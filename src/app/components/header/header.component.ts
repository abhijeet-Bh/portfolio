import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ScrollAnimateDirective} from "../../../scroll-animate.directive";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ScrollAnimateDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  scrollDown() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }
}
