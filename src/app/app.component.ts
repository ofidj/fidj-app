import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {FidjService} from 'fidj';
import {environment} from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private fidjService: FidjService
    ) {
        this.initializeApp();
    }

    async initializeApp() {
        await this.platform.ready();
        await this.fidjService.init(environment.appId, {prod: environment.production});
        this.statusBar.styleDefault();
        this.splashScreen.hide();
    }
}
