import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MenuAnimateDirective} from "../../../menu-animate.directive";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MenuAnimateDirective
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
