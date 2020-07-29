import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
}
)

export class ContactService {
  private api = 'https://mailthis.to/wonder'

  constructor(
    private http: HttpClient 
  ) { }

  PostMessage(input: any){
    return this.http.post(this.api, input, {responseType: 'text'}).pipe(
      map(
        (response) => {
          if(response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    )
  }


}