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
    }
}
