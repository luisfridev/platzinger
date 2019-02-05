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
  friendId: any;
  friend: User;
  friends: User[];
    constructor(private _activatedRoute: ActivatedRoute,
        private userService: UserService) {
        this.friendId = this._activatedRoute.snapshot.params['uid'];
        this.friend = this.userService.getFriend(this.friendId);
        console.log(this.friend);
  }

  ngOnInit() {
  }

}
