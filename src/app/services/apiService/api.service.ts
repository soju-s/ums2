import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private api:HttpClient){}

  post(data:any,apiLink:any){
    return this.api.post(environment.baseUrl+apiLink,data)
    
  }


}
