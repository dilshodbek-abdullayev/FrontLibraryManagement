import { Component } from '@angular/core';
import { CreateUser } from '../../models/create-user';
import { UserModel } from '../../models/user-model';
import { Message, CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {
  myId!:number;
  isUpdated:boolean=false;
  user:UserModel={
  userId:"",
  fullName:"",
  email:"",
  role:""
  
  };
  message:Message={
    fullName:""
  }
  setValue: CreateUser={
    fullName:"",
    email:"",
    login:"64554545454456",
    password:"4565464545654654dfsa",
    role:""
  };
  
  constructor(private crud:CrudService){
  
  }
  
  getById(){
    this.crud.getById(this.myId).subscribe({
      next: (data)=> {
          this.user = data
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
  
  setUser(){
    this.crud.update(this.myId, this.setValue).subscribe({
      next: (data)=>{
        this.message=data;
        this.isUpdated=true;
      }
    })
  }
}