import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
//import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideDatabase, getDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({ "projectId": "chat-play-live", "appId": "1:597013068918:web:63e02a62392164e2097357", "storageBucket": "chat-play-live.appspot.com", "apiKey": "AIzaSyBBcjZtLKLv65_17YLE8VJMB5BzfTeSRtA", "authDomain": "chat-play-live.firebaseapp.com", "messagingSenderId": "597013068918", "measurementId": "G-2EDPSL541H" })),
    provideAuth(() => getAuth()),
    //provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideAnimationsAsync()]
};
