import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { LoginService } from 'src/app/services/login.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  mensajeConst = {
    OK: 'Login realizado',
    NO: 'Usuario no encontrado',
    REGISTRADO: 'Registro OK',
    REGISTRADO_NO: 'Usuario ya registrado',
    ERROR: 'ERROR'
  }

  mensaje = ''

  mensajeSuccess = true

  constructor(private loginService: LoginService, private router: Router) {
    this.loginForm = new FormGroup({
      'userName': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.mensaje = ''
    const userName = this.loginForm.get('userName').value
    const password = this.loginForm.get('password').value
    this.loginService.login(userName, password).subscribe(data => {
      if (data.length > 0) {
        this.mensaje = this.mensajeConst.OK
        this.mensajeSuccess = true
        this.loginService.setLogged(true, data[0].profileId)
        this.router.navigate(['/home'])
      } else {
        this.mensaje = this.mensajeConst.NO
        this.mensajeSuccess = false
        this.loginService.logOut()
      }
    }, error => {
      this.mensaje = this.mensajeConst.ERROR
      this.mensajeSuccess = false
      this.loginService.logOut()
    })
  }

  registro() {
    this.mensaje = ''
    const userName = this.loginForm.get('userName').value
    const password = this.loginForm.get('password').value
    this.loginService.checkUserName(userName).subscribe(checkUserResponse => {
      if (checkUserResponse.length > 0) {
        this.mensaje = this.mensajeConst.REGISTRADO_NO
        this.mensajeSuccess = false
      } else {
        this.loginService.signIn(userName, password).subscribe(signInResponse => {
          if (signInResponse !== undefined) {
            this.mensaje = this.mensajeConst.REGISTRADO
            this.mensajeSuccess = true
          } else {
            this.mensaje = this.mensajeConst.ERROR
            this.mensajeSuccess = false
            this.loginService.logOut()
          }
        }, error => {
          this.mensaje = this.mensajeConst.ERROR
          this.mensajeSuccess = false
          this.loginService.logOut()
        })
      }
    })
  }
}
