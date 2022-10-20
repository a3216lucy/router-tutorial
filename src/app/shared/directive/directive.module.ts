import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HighLightDirective} from './highlight.directive'

const directives = [HighLightDirective]

@NgModule({
  declarations: [...directives],
  imports: [CommonModule],
  exports: [...directives],
})
export class DirectiveModule {}
