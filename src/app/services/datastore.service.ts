import { Injectable } from '@angular/core';
import * as nedb from 'nedb';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  private basePath = './db/';
  private db = {};

  constructor() {}

  private getCollection(name: string): nedb {
    if (this.db[name] === undefined) {
      this.db[name] = new nedb({
        filename: `${this.basePath}${name}.json`,
        autoload: true
      });
    }

    return this.db[name];
  }
}
