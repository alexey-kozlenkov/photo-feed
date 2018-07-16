import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pfZoomImg]',
})
export class ZoomImgDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = 'all 0.3s';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.transform = 'scale(1.1, 1.1)';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.transform = 'scale(1, 1)';
  }

}
