import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
import { Login } from '../login'; // Assuming Login is your interface defining userData structure

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  userData: Login = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthserviceService, private router: Router) {}

  login() {
    this.authService.login(this.userData).subscribe(
      response => {
        
          this.router.navigate(['/rania']);
        
            
      },
      error => {
        this.router.navigate(['/failed']);
      }
    );
  }
}
