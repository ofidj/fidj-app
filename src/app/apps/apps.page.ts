import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FidjService} from 'fidj';

@Component({
  selector: 'app-apps',
  templateUrl: 'apps.page.html',
  styleUrls: ['apps.page.scss']
})
export class AppsPage {

  public profileAppsOwned: any[];
  private me: any;

  constructor(
      private router: Router,
      private fidjService: FidjService) {

    this.refresh(null);
  }

  async refresh(event) {
    this.profileAppsOwned = [];
    try {
      this.me = await this.fidjService.sendOnEndpoint({verb: 'GET', key: 'me', relativePath: 'details'});

      for (let i = 0; i < this.me.user.appsOwned.length; i++) {
        const app = (await this.fidjService.sendOnEndpoint({
          verb: 'GET',
          key: 'apps',
          relativePath: this.me.user.appsOwned[i]
        })).app;
        this.profileAppsOwned.push(app);
      }
    } catch (e) {
      console.warn(e);
    }

    if (event) {
      event.target.complete();
    }
  }

}
