import { Directive, ElementRef, AfterViewInit, Renderer2, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[menuAnimate]'
})
export class MenuAnimateDirective implements AfterViewInit {
  @Input() delay = 0;  // Default: No delay

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Initially, set the element to be hidden
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-50%)'); // Off-screen to the left
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            // Remove opacity and slide in effect
            this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 1s ease-out, opacity 1s ease-out');
            this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
            this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0)');  // Slide in
          }, this.delay);
          observer.unobserve(this.el.nativeElement);  // Stop observing once the element is animated
        }
      },
      { threshold: 0.2 }  // Trigger when 20% of the element is visible
    );

    observer.observe(this.el.nativeElement);
  }
}
