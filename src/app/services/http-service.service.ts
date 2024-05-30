import { Injectable } from '@angular/core';
import { DSDiem } from '../model/dsdiem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private REST_API_SERVER='http://localhost:3000';
  private httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }


  public getDiem(): Observable<any>{
    const url=`${this.REST_API_SERVER}/dsdiems`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
}
