import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  friendId: any;

    constructor(private _activatedRoute: ActivatedRoute) {
        this.friendId = this._activatedRoute.snapshot.params['uid'];
        console.log(this.friendId);
  }

  ngOnInit() {
  }

}
