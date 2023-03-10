import { Injectable } from '@angular/core';
import { Message } from '../shared/api-interfaces/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  constructor() { }
}
