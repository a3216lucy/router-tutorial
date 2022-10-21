import {Component, Input, Optional, Self} from '@angular/core'
import {AbstractControl, ControlValueAccessor, NgControl} from '@angular/forms'

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
})
export class EmailInputComponent implements ControlValueAccessor {
  /** input 的值 */
  value = ''
  /** 用來接收 registerOnChange 和 onTouched 傳入的方法 */
  onChange: (value: any) => any = () => ({})
  onTouched: () => any = () => {}

  /** 表單控制元件*/
  @Input() control!: AbstractControl

  /** Reactive Forms 表單元件 - 帳號建構子 */
  constructor(
    /** ngControl: 繼承 AbstractControlDirective，可使用 valueAccessor */
    @Optional()
    @Self()
    public ngControl: NgControl,
  ) {
    if (this.ngControl != null) {
      //取代 ControlValueAccessor
      this.ngControl.valueAccessor = this
    }
  }

  /**
   * ControlValueAccessor 需實做的方法
   *
   * 當資料從元件外部被變更時所呼叫的方法.
   * 資料流向: form model to component
   *
   * @param value - 元件值
   * @returns void
   */
  writeValue(value: string): void {
    this.value = value
  }

  /**
   * ControlValueAccessor 需實做的方法
   *
   * 將一個方法傳入，在元件內呼叫此方法時即代表表單控制項的值有變更
   * 資料改變的時候，可以通過呼叫事件觸發函數通知外部資料變了，同時可以將修改後的資料作為引數傳遞出去.
   * 資料流向: component to form model
   *
   * @param  fn - function
   * @returns void
   */
  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  /**
   * ControlValueAccessor 需實做的方法
   *
   * 將一個方法傳入，在元件內呼叫此方法時即代表表單控制項被 touch.
   * 狀態變更: component to form model
   *
   * @param  fn - function
   * @returns void
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
}
