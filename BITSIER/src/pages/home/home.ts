import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BITSIERPage } from '../b-itsier/b-itsier';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
userProfile: any = null;

constructor(ngZone: NgZone, public navCtrl:NavController, private googlePlus:GooglePlus) {
  firebase.auth().onAuthStateChanged( user => {
      if (user){
        this.userProfile = user;
      } else {
          this.userProfile = null;
      }
    });
}
login(): void {
  this.googlePlus.login({
    'webClientId': '944014234886-ukge8c5kfg8gh253cn580aqs8c2stj4c.apps.googleusercontent.com',
    'offline': true
  }).then( res => {
    const googleCredential = firebase.auth.GoogleAuthProvider
            .credential(res.idToken);

        firebase.auth().signInWithCredential(googleCredential)
      .then( response => {
          console.log("Firebase success: " + JSON.stringify(response));})
    console.log(res);
  })
    .catch(err => {
      console.error(err)
      console.log(JSON.stringify(err));
    })
}

  goToBITSIER(params){
    if (!params) params = {};
    this.navCtrl.push(BITSIERPage);
  }
  public onSignIn(googleUser){
    var profile = googleUser.getBasicProfile();
    console.log("im here");
 console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
 console.log('Name: ' + profile.getName());
 console.log('Image URL: ' + profile.getImageUrl());
 console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
  }
