import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DynamicDataService {
  //http://localhost:2000/users

  url: string = "http://localhost:3000/users";

  allUser: IUser[] | undefined;


  constructor(private http: HttpClient) {

  }

  addNewUser(user: any) {
    var x = this.http.post<IUser>(this.url, user);
    x.subscribe({
      next: (x) => { console.log(x) }
    })
  }

  getAllUser() {
    return this.http.get<IUser[]>(this.url);
  }

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.url}/${id}`)
  }

  // getUsersByCat(){
  //   return this.http.get(`${this.}`)
  // }

  deleteUserById(id: number) {
    console.log(id);
    return this.http.delete(`${this.url}/${id}`);
  }



}
