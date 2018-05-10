import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GridService {
  gridBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getColumn(): Observable<any[]> {
    const url = `${this.gridBaseUrl}/getColumnNames`;
    console.log(url);
    return this.http.get<any[]>(url);
  }
  getGridData(): Observable<any[]> {
    const url = `${this.gridBaseUrl}/getGridData`;
    return this.http.get<any[]>(url);
  }
  postId(id: string , name: string  ): Observable<any> {
    const url = `${this.gridBaseUrl}/postId`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const data = {id: id , name: name};

    return this.http.post(url, data, { headers: headers});
    // .map((res: Response) => {
    //   if (res) {
    //             if (res.status === 201) {
    //                 return [{ status: res.status, json: res }];
    //             } else if (res.status === 200) {
    //                 return [{ status: res.status, json: res }];
    //             }
    //         }
    // });


//     .map((res: Response) => {
//       if (res) {
//           if (res.status === 201) {
//               return [{ status: res.status, json: res }]
//           }
//           else if (res.status === 200) {
//               return [{ status: res.status, json: res }]
//           }
//       }
//   }).catch((error: any) => {
//       if (error.status === 500) {
//           return Observable.throw(new Error(error.status));
//       }
//       else if (error.status === 400) {
//           return Observable.throw(new Error(error.status));
//       }
//       else if (error.status === 409) {
//           return Observable.throw(new Error(error.status));
//       }
//       else if (error.status === 406) {
//           return Observable.throw(new Error(error.status));
//       }
//   });
// }
  }
}


