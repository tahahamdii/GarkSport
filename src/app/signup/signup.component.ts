import { Component } from '@angular/core';
import { User } from '../user';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'] // Use styleUrls instead of styleUrl
})
export class SignupComponent {
  user: User = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    role: ''
  };

  constructor(private service: AuthserviceService, private router:Router) { }


  registerUser() {
    this.service.register(this.user).subscribe(
      response => {
        console.log('Registration successful', response);
        this.router.navigate(['/']); 
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }

}
