import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Leandro';
  userData = {
    email: 'Mayrink@mail.com',
    funcao: 'Admin'
  }
  title = 'curso-Angular';
}
