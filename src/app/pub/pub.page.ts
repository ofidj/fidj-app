import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FidjConnectionService} from '../shared/fidj.connection.service';

@Component({
  selector: 'app-pub',
  templateUrl: 'pub.page.html',
  styleUrls: ['../my/my.page.scss']
})
export class PubPage implements OnInit {

  constructor(
      private router: Router,
      private fidjConnectionService: FidjConnectionService) {}


  ngOnInit() {
    // this.fidjConnectionService.checkLogin();
  }

}
