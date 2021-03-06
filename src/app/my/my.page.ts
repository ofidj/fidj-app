import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FidjConnectionService} from '../shared/fidj.connection.service';

@Component({
  selector: 'app-my',
  templateUrl: 'my.page.html',
  styleUrls: ['my.page.scss']
})
export class MyPage implements OnInit {

  constructor(
      private router: Router,
      private fidjConnectionService: FidjConnectionService) {}


  ngOnInit() {
    this.fidjConnectionService.checkLogin();
  }

}
