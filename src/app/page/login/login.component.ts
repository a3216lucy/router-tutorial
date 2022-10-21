import {Component, OnInit} from '@angular/core'
import {AbstractControl, FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import {AuthService} from 'src/app/core/services/api/kkbox/auth.service'
import {UserValidationService} from 'src/app/core/services/validation/user-validation.service'
import {SearchService} from './../../core/services/api/kkbox/search.service'

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
  /**標題 */
  title = 'Argon Dashboard'
  /**首頁連結*/
  dashBoardUrl = '../pages/dashboard.html'

  /**登入頁 - 建構子 */
  constructor(
    /** fb:表單服務 */
    private fb: FormBuilder,
    /** router: 內部調用 Angular 內部 API 路由與導航 */
    private router: Router,
    /** route: 內部調用 Angular 內部 API ActivatedRoute 允許訪問與某出口中載入的元件關聯路由資訊 */
    private route: ActivatedRoute,
    private authService: AuthService,
    private searchService: SearchService,
  ) {}

  /**
   * Angular 生命週期
   * 初始化元件或指令
   */
  ngOnInit(): void {
    this.form = this.fb.group({
      //email
      email: this.fb.control('', {
        validators: [UserValidationService.emailValidator],
        updateOn: 'submit',
      }),
      password: this.fb.control('', {validators: [UserValidationService.passwordValidator]}),
      isRemember: this.fb.control(false, {}),
    })
  }

  /**
   * 登入
   */
  login(): void {
    console.log(this.form)
    this.form.markAllAsTouched()
    if (this.form.invalid) return

    this.authService.login().subscribe({
      next: (res) => {
        if (!res) return

        window.localStorage.setItem('userToken', res.access_token)
        this.router.navigate(['/index'])
      },
    })
  }

  /** 驗證失敗 */
  isInvalid(control: AbstractControl, formRef: FormGroupDirective): boolean {
    return control.invalid && (control.touched || formRef.submitted)
  }

  /** 路由轉向 */
  changeTarget(event: MouseEvent): void {
    console.log(event)
    this.router.navigate(['/index'])
  }
}
