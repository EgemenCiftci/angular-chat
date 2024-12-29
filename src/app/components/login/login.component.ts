import { AfterViewInit, Component, inject } from '@angular/core';
import * as firebaseui from 'firebaseui'; // don't convert to default import
import { Auth, EmailAuthProvider, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements AfterViewInit {
  private auth = inject(Auth);


  ngAfterViewInit() {
    const ui = new firebaseui.auth.AuthUI(this.auth);
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: (authResult: any, redirectUrl: any) => {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          console.log(authResult);
          console.log(redirectUrl);
          return true;
        },
        uiShown: () => {
          console.log('FirebaseUI is shown.');
        }
      },
      signInFlow: 'popup',
      //signInSuccessUrl: '<url-to-redirect-to-on-success>',
      signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        FacebookAuthProvider.PROVIDER_ID,
        TwitterAuthProvider.PROVIDER_ID,
        GithubAuthProvider.PROVIDER_ID,
        EmailAuthProvider.PROVIDER_ID
      ]
    };

    //if (ui.isPendingRedirect()) {
    ui.start('#firebaseui-auth-container', uiConfig);
    //}
  }
}
