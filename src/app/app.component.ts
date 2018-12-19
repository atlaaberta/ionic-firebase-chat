import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as faker from 'faker';

import { HomePage } from '../pages/home/home';
import { MessageProvider } from '../providers/message/message';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  name: String;
  text: String;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private messageProvider: MessageProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
  }

  ngOnInit() {
    this.name = faker.name.firstName();
  }

  sendMessage() {
    this.messageProvider.addMessage(this.name, this.text);
    this.text = "";
  }
}

