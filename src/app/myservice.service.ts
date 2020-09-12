import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }
   baseUrl:any="assets/data.json"

  getRecord():Observable<any>{
    return this.http.get(this.baseUrl)
    }
}
