import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../../scroll-animate.directive";

@Component({
  selector: 'app-skills',
  standalone: true,
    imports: [
        ScrollAnimateDirective
    ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
