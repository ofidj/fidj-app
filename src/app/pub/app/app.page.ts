import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Base64, FidjService} from 'fidj';
import {FidjConnectionService} from '../../shared/fidj.connection.service';

@Component({
    selector: 'app-app',
    templateUrl: 'app.page.html',
    styleUrls: ['app.page.scss']
})
export class AppPage implements OnInit {

    public appId: string;
    public appDetail: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fidjService: FidjService,
        private fidjConnectionService: FidjConnectionService,
    ) {
    }

    ngOnInit() {
        // this is where we'll grab data
        // grab using the snapshot method
        this.appId = this.route.snapshot.params.appId;
        this.refresh(null);
    }

    async refresh(event) {

        try {
            this.appDetail = (await this.fidjService.sendOnEndpoint({
                verb: 'GET',
                key: 'apps',
                relativePath: this.appId
            })).app;
            this.appDetail.badge = this.fidjConnectionService.getUrl() + `/apps/${this.appId}/badge`;
            // console.log('appDetail:', this.appDetail);
        } catch (e) {
            await this.fidjConnectionService.checkError(e);
        }

        if (event) {
            event.target.complete();
        }
    }
}
