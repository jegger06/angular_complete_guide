import { Directive, HostListener, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  isOpen = false;

  @HostListener('click') toggleOpen() {
    // console.log(this.renderer.nextSibling(this.elRef.nativeElement))
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(this.renderer.nextSibling(this.elRef.nativeElement).nextElementSibling, 'show');
    } else {
      this.renderer.removeClass(this.renderer.nextSibling(this.elRef.nativeElement).nextElementSibling, 'show');
    }
    this.elRef.nativeElement.style.cursor = 'pointer';
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
}