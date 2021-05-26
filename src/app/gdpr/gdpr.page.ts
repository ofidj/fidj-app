import {Component} from '@angular/core';
import {Base64, FidjService} from 'fidj';
import {Router} from '@angular/router';
import {FidjConnectionService} from '../shared/fidj.connection.service';

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
        private fidjService: FidjService,
        private fidjConnectionService: FidjConnectionService,
    ) {

        this.refresh(null);
    }

    async refresh(event) {

        let payloadInfo = {iss: ''};
        try {
            const idToken = await this.fidjService.getIdToken();
            const payload = idToken.split('.')[1];
            payloadInfo = JSON.parse(Base64.decode(payload));
            // console.log(typeof payloadInfo, payloadInfo);
        } catch (e) {
            return await this.fidjConnectionService.checkError(e);
        }

        this.profileAppsSubscribed = [];
        try {
            this.me = await this.fidjService.sendOnEndpoint({verb: 'GET', key: 'me', relativePath: 'details'});

            for (let i = 0; i < this.me.user.appsSubscribed.length; i++) {
                const app = (await this.fidjService.sendOnEndpoint({
                    verb: 'GET',
                    key: 'apps',
                    relativePath: this.me.user.appsSubscribed[i]
                })).app;
                console.log('app:', app);
                app.badge = payloadInfo.iss + `/apps/${app.id}/badge`;
                app.pub = `#/pub/${app.title}`;
                this.profileAppsSubscribed.push(app);
            }
        } catch (e) {
            return await this.fidjConnectionService.checkError(e);
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
            await this.fidjConnectionService.checkError(e);
        }
    }

}
