import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../../scroll-animate.directive";

@Component({
  selector: 'app-projects',
  standalone: true,
    imports: [
        ScrollAnimateDirective
    ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
