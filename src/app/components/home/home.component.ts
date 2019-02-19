import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    friends: User[];
    query: string;
    constructor(private userService: UserService) {
        this.userService.getUsers().valueChanges().subscribe(
          (data: User[]) => {
            this.friends = data;
          }, (error) => {
            console.log(error);
          }
        );
    }

  ngOnInit() {
  }

}
