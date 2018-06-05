import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';
import {WelcomePage} from "../pages/welcome/welcome";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  rootPage:any;



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.storage.get('firstIn').then((result) => {

        if(result){
          this.rootPage = TabsPage;
        }
        else{
          this.storage.set('firstIn', true);
          console.log('55')
          this.rootPage = WelcomePage;
        }
      }
    );
  }


}
