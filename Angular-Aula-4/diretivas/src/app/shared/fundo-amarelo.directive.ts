import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {



  constructor(private _elementRed: ElementRef, 
    private _render: Renderer) {
    // this._elementRed.nativeElement.style.backgroundColor = 'yellow'
    this._render.setElementStyle(this._elementRed.nativeElement,'background-color','yellow')
   }

}
