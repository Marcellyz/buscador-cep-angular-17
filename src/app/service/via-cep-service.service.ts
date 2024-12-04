import { Response } from './../../../node_modules/@types/express-serve-static-core/index.d';
import { ViaCepResults } from './../models/ViaCepResults';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViaCepServiceService {

  apiUrl: string = environment.viaCepUrl;
  constructor(private http:HttpClient) { }

  getEnderecoByCep(cep: string){
    return this.http.get<ViaCepResults>
    (this.apiUrl + cep + "/json/")
    .pipe(
      map((response)=>{
        return response
      })
    )
  }
}
