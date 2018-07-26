//Providers
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

//AngularFire
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { FIREBASE_CONFIG } from "./app.firebase.config";

export const MODULES = [
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
];

export const PROVIDERS = [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    AngularFireDatabase
];

export const DIRECTIVES = [];
