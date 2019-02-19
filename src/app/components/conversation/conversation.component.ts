import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  public friendId: any;
  public friend: User;
    constructor(private _activatedRoute: ActivatedRoute,
        private userService: UserService) {
        this.friendId = this._activatedRoute.snapshot.params['uid'];
        console.log(this.friend);
        this.userService.getUserById(this.friendId).valueChanges().subscribe(
          (data: User) => {
            this.friend = data;
          },
          (error) => {
            console.log(error);
          }
        );
  }

  ngOnInit() {
  }

}
