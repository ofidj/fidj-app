import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {FidjService, ErrorInterface} from 'fidj';

@Injectable({
    providedIn: 'root',
})
export class FidjConnectionService {
    constructor(
        private router: Router,
        private fidjService: FidjService,
    ) {
    }

    async checkLogin() {
        if (this.fidjService.isLoggedIn()) {
        } else {
            console.log('not logged in');
            await this.router.navigateByUrl('/signin');
        }
    }

    async checkError(error: ErrorInterface) {
        console.warn('checkError', error);
        if (error.code === 401 || error.code === 403) {
            console.log('looks not logged in');
            if (this.router.url.indexOf('signin') < 0) {
                try {
                    await this.fidjService.logout();
                } catch (e) {
                }
                await this.router.navigateByUrl('/');
            }
        }
    }
}
