import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective implements OnInit {
    isOpen: boolean = false

    constructor(private elem: ElementRef, private renderer: Renderer2) {
        
    }

    ngOnInit(): void {
        
    }

    @HostListener('click')
    toggleOpen(data: Event) {
        if (this.isOpen) {
            this.renderer.removeClass(this.elem.nativeElement, 'open')
        } else {
            this.renderer.addClass(this.elem.nativeElement, 'open')
        }

        this.isOpen = !this.isOpen
    }

    @HostListener('mouseleave')
    onMouseLeave(data: Event) {
        
    }
}