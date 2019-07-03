import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Document } from './document';
// import {DocumentData} from './document.service';
import { throwError, of, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { DocumentDetails } from './documentdetails';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  // apiurl = 'api/documents';                 // Our created Data can be accessed here at api/users
  headers = new HttpHeaders({
  // 'Access-Control-Allow-Origin':'*'
  }).set('Content-Type', 'application/json').set('Accept', 'application/json').set('Access-Control-Allow-Origin', '*');
  httpOptions = {
    headers: this.headers
  };


  constructor(private http: HttpClient) { }

  // private handleError(error: any) {
  //   console.error(error);                                       //Created a function to handle and log errors, in case
  //   return throwError(error);
  // }

  getDocuments(): Observable<Document[]> {

    return this.http.get('http://agile-award-insights-2.w3ibm.mybluemix.net/v2/document').pipe(
      tap<Document[]>(data => data));

    // tap(data => data));

    //const url = `${this.apiurl}`;
    // return this.http.get<Document[]>(url).pipe(
    // tap(data => console.log(data)),
    //catchError(this.handleError)
    //);
  }

  getDocument(_id: string): Observable<any> {
   // const url = `${this.apiurl}/${_id}`;
    return this.http.get('http://agile-award-insights-2.w3ibm.mybluemix.net/v2/document/' + `${_id}`).pipe(
      tap<DocumentDetails>(data => data));
  }


  addDocument(document: DocumentDetails): Observable<DocumentDetails> {
    //document._id = "0";
    return this.http.post<DocumentDetails>(('http://agile-award-insights-2.w3ibm.mybluemix.net/v2/document'), document , this.httpOptions).pipe(
      tap<DocumentDetails>(data => data));
      // tap(data => console.log(data)),
      // catchError(this.handleError)
    
  }

  deleteDocument(_id: string): Observable<any> {
     return this.http.delete<DocumentDetails>('http://agile-award-insights-2.w3ibm.mybluemix.net/v2/document/' + `${_id}`, this.httpOptions).pipe()
      //  tap<DocumentDetails>(data => data));
   }
 

  // updateDocument(document: DocumentDetails): Observable<DocumentDetails> {
  //   const url = `${this.apiurl}/${document._id}`;
  //   return this.http.put<DocumentDetails>(this.apiurl, document, this.httpOptions).pipe(
  //     map(() => document),
  //     catchError(this.handleError)
  //   );
  // }
}