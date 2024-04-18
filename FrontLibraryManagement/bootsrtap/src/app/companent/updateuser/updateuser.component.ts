import { Message } from './../../services/crud.service';
import { Component } from '@angular/core';
import { CreateUser } from '../../models/create-user';
import { CrudService } from '../../services/crud.service';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.scss'
})
export class UpdateuserComponent {
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