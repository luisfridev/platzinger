import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public operation: string;
  public email: string = null;
  public password: string = null;
  public nick: string = null;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router
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
        this.router.navigate(['/home']);
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
        this.router.navigate(['/home']);
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
        const user = {
          uid: data.user.uid,
          email: this.email,
          nick: this.nick
        };
        this.userService.createUser(user).then(
          (data2) => {
            alert('Registrado correctamente');
            console.log(data2);
          }
        ).catch((error) => {
          alert('Ocurrió un error en el registro en DB');
          console.log(error);
        });
      }).catch(
        (error) => {
        alert('Ocurrió un error en el registro');
        console.log(error);
      });
  }
}
