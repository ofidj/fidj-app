import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Base64, FidjService} from 'fidj';
import {FidjConnectionService} from '../shared/fidj.connection.service';

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
            this.fidjConnectionService.setUrl(payloadInfo.iss);
            // console.log(typeof payloadInfo, payloadInfo);
        } catch (e) {
            if (event) {
                event.target.complete();
            }
            return await this.fidjConnectionService.checkError(e);
        }

        this.profileAppsOwned = [];
        try {
            this.me = await this.fidjService.sendOnEndpoint({verb: 'GET', key: 'me', relativePath: 'details'});

            for (let i = 0; i < this.me.user.appsOwned.length; i++) {
                const app = (await this.fidjService.sendOnEndpoint({
                    verb: 'GET',
                    key: 'apps',
                    relativePath: this.me.user.appsOwned[i]
                })).app;
                app.badge = this.fidjConnectionService.getUrl() + `/apps/${app.id}/badge`;
                app.pub = `#/pub/${app.id}`;
                this.profileAppsOwned.push(app);
            }
        } catch (e) {
            await this.fidjConnectionService.checkError(e);
        }

        if (event) {
            event.target.complete();
        }
    }

}
