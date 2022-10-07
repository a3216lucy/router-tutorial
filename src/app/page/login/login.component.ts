import {Component, OnInit} from '@angular/core'
import {AbstractControl, FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms'

/**
 * 登入頁元件
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /**表單*/
  form!: FormGroup

  /**登入頁 - 建構子 */
  constructor(private fb: FormBuilder) {}

  /**
   * Angular 生命週期
   * 初始化元件或指令
   */
  ngOnInit(): void {
    this.form = this.fb.group({
      //email
      email: this.fb.control('', {
        validators: [Validators.required, Validators.email],
        updateOn: 'submit',
      }),
      password: this.fb.control('', {}),
      isRemember: this.fb.control(false, {}),
    })
  }

  /**
   * 登入
   */
  login(): void {
    console.log(this.form.value)
    if (this.form.invalid) return
  }

  /** 驗證失敗 */
  isInvalid(control: AbstractControl, formRef: FormGroupDirective): boolean {
    return control.invalid && (control.touched || formRef.submitted)
  }
}
