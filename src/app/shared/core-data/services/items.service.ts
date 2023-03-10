import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../api-interfaces/api-interfaces';

//** Used for API Server **
const BASE_URL = 'http://localhost:3000';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) {}

  //GET
  getAllItems() {
    return this.http.get<Item[]>(this.getUrl());
  }
  
  //GET (by id) - used for searching?
  find(id: string) {
    return this.http.get(this.getUrlWithID(id));
  }
  
  //POST (used to save new)
  createItem(item: Item) {
    return this.http.post(this.getUrl(), item);
  }
  
  //PUT (used to update as new)
  updateItem(item: Item) {
    return this.http.put(this.getUrlWithID(item.id), item);
  }
  
  //DELETE
  deleteItem(item: Item) {
    return this.http.delete(this.getUrlWithID(item.id));
  }
  
  
  //Methods to simplify REST/CRUD
  
  //** Used for URL methods to connect to variable
  model = 'items';
  
  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }
  
  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }
  
  
  
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.getUrl());
  }
  
  
  getItem(id: number | string): Observable<Item> {
    const url = `${this.getUrl()}/${id}`;
    return this.http.get<Item>(url);
  }
  
  //setting param URL for item
  private items: Item[] = [];
  
  getItemUrl(index: number) {
    return this.items[index];
  }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
  }
}
