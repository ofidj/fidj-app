import {Component} from '@angular/core';
import {FidjService} from 'fidj';
import {Router} from '@angular/router';

@Component({
    selector: 'app-gdpr',
    templateUrl: 'gdpr.page.html',
    styleUrls: ['gdpr.page.scss']
})
export class GdprPage {

    public profileAppsSubscribed: any[];

    private me: any;

    constructor(
        private router: Router,
        private fidjService: FidjService) {

        this.refresh(null);
    }

    async refresh(event) {
        this.profileAppsSubscribed = [];
        try {
            this.me = await this.fidjService.sendOnEndpoint({verb: 'GET', key: 'me', relativePath: 'details'});

            for (let i = 0; i < this.me.user.appsSubscribed.length; i++) {
                const app = (await this.fidjService.sendOnEndpoint({
                    verb: 'GET',
                    key: 'apps',
                    relativePath: this.me.user.appsSubscribed[i]
                })).app;
                this.profileAppsSubscribed.push(app);
            }
        } catch (e) {
            console.warn(e);
        }

        if (event) {
            event.target.complete();
        }
    }

    async remove(subscription) {
        try {
            await this.fidjService.sendOnEndpoint({
                verb: 'DELETE',
                key: 'apps',
                relativePath: subscription.id + '/contracts'
            });
        } catch (e) {
            console.warn(e);
        }
    }

}
