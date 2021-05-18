import {Component, OnInit} from '@angular/core';
// import {NavController} from 'ionic-angular';
import {FidjService} from 'fidj';
// import {HomePage} from "../home/home";
// import {Profile} from "../../app/shared/profile.service";
// import {version} from "../../app/shared/version.const";
// import {Network} from "@ionic-native/network";
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: 'signin.page.html',
    styleUrls: ['signin.page.scss']
})
export class SigninPage implements OnInit {

    // public appVersion = version;
    private connected: Subscription;
    userLoginEmail: any;
    userLoginPassword: any;
    appVersion: any;
    asUser: boolean;

    constructor(
        // public navCtrl: NavController,
        //      private network: Network,
        //    private profile: Profile,
        private router: Router,
        private fidjService: FidjService
    ) {
        this.asUser = true;
    }

    ngOnInit() {

        if (this.fidjService.isLoggedIn()) {
            return this.router.navigateByUrl('/my');
        } else {
            console.log('not logged in');
        }
        // this.connected = this.network.onConnect().subscribe(data => {
        //     console.log(data);
        //     if (this.fidjService.isLoggedIn()) {
        //         this.navCtrl.setRoot(HomePage);
        //     }
        // }, error => console.error(error));
    }

    async login(email, pwd) {
        // this.profile.setEmail(email);
        try {
            await this.fidjService.login(email, pwd);
            await this.router.navigateByUrl('/my');
        } catch (err) {
            console.error(JSON.stringify(err, Object.getOwnPropertyNames(err)));
        }
    }

    async loginAsDemo() {
        // this.profile.setEmail('demo user');
        try {
            await this.fidjService.loginAsDemo();
            await this.router.navigateByUrl('/my');
        } catch (e) {
            console.error(e);
        }
    }

    async profileChanged(event) {
        this.asUser = !this.asUser;
    }

}
