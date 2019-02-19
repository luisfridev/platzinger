import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public operation: string;
  public email: string = null;
  public password: string = null;

  constructor(
    private authenticationService: AuthenticationService
  ) {
      this.operation = 'login';
  }

  ngOnInit() {
  }
  loginSocial() {
    this.authenticationService.loginSocial().then(
      (data) => {
        alert('Social Login Correcto');
        console.log(data);
      }
    ).catch(
      (error) => {
        alert('Login Social Falló');
        console.log(error);
      }
    );
  }

  login() {
    this.authenticationService.loginWithEmail(this.email, this.password).then(
      (data) => {
        alert('Loggeado correctamente');
        console.log(data);
      }
    ).catch(
      (error) => {
        alert('Ocurrió un error');
        console.log(error);
      }
    );
  }
  register() {
    this.authenticationService.registerWithEmail(this.email, this.password)
    .then(
      (data) => {
        alert('Registrado correctamente');
        console.log(data);
      }).catch(
        (error) => {
        alert('Ocurrió un error en el registro');
        console.log(error);
      });
  }
}
