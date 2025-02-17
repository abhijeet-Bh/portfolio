import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../../scroll-animate.directive";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    ScrollAnimateDirective
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
