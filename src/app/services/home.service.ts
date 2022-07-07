import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public http: HttpClient) { }
  public baseUrl = environment.baseUrl

  getIt(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/todos")
    // return JSON.parse(localStorage.getItem('allStudent'))
  }
  giveMe(id){
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }
  getData(){
    return this.http.get<any>(`${this.baseUrl}myData.php`);
  }
  setData(data){
    return this.http.post<any>(`${this.baseUrl}add.php`,data);
  }
  delData(stud_id){
    return this.http.post<any>(`${this.baseUrl}del.php`, stud_id);
  }
}
