import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  searchtitle:any;
  constructor(private http :HttpClient) { }
  getBookList() : Observable<object> {
    return this.http.get('https://www.googleapis.com/books/v1/volumes',
    {
      params:{
        q: this.searchtitle
      },
    });
  } 
  setParram(name){
    this.searchtitle=name;
  } 
    
  
}

