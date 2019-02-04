import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
      let c: number = 1;
      let b: number = 2;
      console.log(c+b);
  }

  ngOnInit() {
  }

}
