import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';
import { CreateUser } from '../models/create-user';

@Injectable({
  providedIn: 'root'
})

export interface Message{
  fullName:string,
}
export class CrudService {

  baseUrl:string="https://localhost:7189/api/User";
  constructor(private http:HttpClient) { }

  getAll():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.baseUrl + 'GetAll')
  }
  createUser(data:CreateUser):Observable<Message>{
    return this.http.post<Message>(this.baseUrl+'CreateUser',data)
  }
  getById(id:number):Observable<UserModel> {
    return this.http.get<UserModel>(this.baseUrl+`GetByUserId?id=${id}`)
  }
  update(id:number,data:CreateUser):Observable<Message> {
    return this.http.put<Message>(this.baseUrl+`UpdateUser?id=${id}`,data);
  }
  delete(id:number):Observable<Message>{
    return this.http.delete<Message>(this.baseUrl+`DeleteUser?id=${id}`)
  }

}
