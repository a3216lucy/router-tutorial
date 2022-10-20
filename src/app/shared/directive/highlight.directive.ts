import {Directive, ElementRef, HostListener} from '@angular/core'

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  constructor(private el: ElementRef) {}

  /** 監聽滑鼠移進去，新增文字黃色底色 */
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('')
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }
}
