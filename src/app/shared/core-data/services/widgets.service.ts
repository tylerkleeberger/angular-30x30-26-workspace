import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Widget } from '../../api-interfaces/api-interfaces';

//** Used for API Server **
const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  constructor(private http: HttpClient) {}

  //GET
  getAllItems() {
    return this.http.get<Widget[]>(this.getUrl());
  }
  
  //GET (by id) - used for searching?
  find(id: string) {
    return this.http.get(this.getUrlWithID(id));
  }
  
  //POST (used to save new)
  createItem(widget: Widget) {
    return this.http.post(this.getUrl(), widget);
  }
  
  //PUT (used to update as new)
  updateItem(widget: Widget) {
    return this.http.put(this.getUrlWithID(widget.id), widget);
  }
  
  //DELETE
  deleteItem(widget: Widget) {
    return this.http.delete(this.getUrlWithID(widget.id));
  }
  
  
  //Methods to simplify REST/CRUD
  
  //** Used for URL methods to connect to variable
  model = 'widgets';
  
  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }
  
  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }
  
  
  
  getItems(): Observable<Widget[]> {
    return this.http.get<Widget[]>(this.getUrl());
  }
  
  
  getItem(id: number | string): Observable<Widget> {
    const url = `${this.getUrl()}/${id}`;
    return this.http.get<Widget>(url);
  }
  
  //setting param URL for item
  private widgets: Widget[] = [];
  
  getItemUrl(index: number) {
    return this.widgets[index];
  }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
  }
}
