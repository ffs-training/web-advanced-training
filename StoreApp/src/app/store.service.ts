import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private prefix: string = 'storage_test_';

  constructor() {

  }

  sessionStorageSet(key: string, value: string) {
    this._set(sessionStorage, key, value);
  }

  sessionStorageGet(key: string) {
    return this._get(sessionStorage, key);
  }

  localStorageSet(key: string, value: string) {
    this._set(localStorage, key, value);
  }
  
  localStorageGet(key: string) {
    return this._get(localStorage, key);
  }

  private _set(storage: Storage, key: string, value: string): void {
    storage.setItem(this.prefix + key, value);
  }

  private _get(storage: Storage, key: string): string {
    return storage.getItem(this.prefix + key);
  }
}
