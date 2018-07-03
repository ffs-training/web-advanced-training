import { Component } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sessionKey:string = '';
  sessionValue:string = '';

  localKey:string = '';
  localValue:string = '';

  constructor (private storeService: StoreService) {}

  sessionSet () {
    this.storeService.sessionStorageSet(this.sessionKey, this.sessionValue);
  }

  sessionGet () {
    this.sessionValue = this.storeService.sessionStorageGet(this.sessionKey);
  }

  localSet () {
    this.storeService.localStorageSet(this.localKey, this.localValue);
  }

  localGet () {
    this.localValue = this.storeService.localStorageGet(this.localKey);
  }
}
