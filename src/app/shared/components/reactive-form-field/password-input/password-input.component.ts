import {Component, forwardRef, Input} from '@angular/core'
import {AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  /** 表單控制元件*/
  @Input() control!: AbstractControl
  /** input 的值 */
  value = ''
  /** 用來接收 registerOnChange 和 onTouched 傳入的方法 */
  onChange: (value: any) => any = () => ({})
  onTouched: () => any = () => {}

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

  changeInput($event: Event) {
    const value = ($event.target as HTMLInputElement).value
    this.onChange(value)
  }
}
