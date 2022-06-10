import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Iuser } from './interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userService: any;

  constructor(private users: AuthService) { }

  ngOnInit(): void {
  }

authUser:Iuser = {
    email: '',
    password: ''
  }

  accesso(){
    this.users.login(this.authUser).subscribe((res:any) => {
      console.log(res);
      this.users.saveUser(res.accessToken);

    })
  }
}
