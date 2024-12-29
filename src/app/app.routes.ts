import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, Routes } from '@angular/router';



import { inject } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';

export const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const auth = inject(Auth);
    const router = inject(Router);

    return new Promise<boolean>((resolve) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                if (state.url === '/login') {
                    resolve(false);
                    router.navigate(['/chat']);
                } else {
                    resolve(true);
                }
            } else {
                console.log('user is null.');
                if (state.url === '/login') {
                    resolve(true);
                } else {
                    resolve(false);
                    router.navigate(['/login']);
                }
            }
        });
    });
};


export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent), canActivate: [canActivate] },
    { path: 'chat', loadComponent: () => import('./components/chat/chat.component').then(m => m.ChatComponent), canActivate: [canActivate] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', loadComponent: () => import('./components/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) },
];
