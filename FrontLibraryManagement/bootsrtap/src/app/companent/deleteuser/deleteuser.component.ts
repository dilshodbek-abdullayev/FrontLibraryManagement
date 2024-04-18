import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CrudService, Message } from '../../services/crud.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrl: './deleteuser.component.scss'
})
export class DeleteuserComponent {

  myId!:number;
  isDeleted:boolean=false;
  mes:Message={
    fullName:"",
  }
  constructor(private crud:CrudService){}

  delete(){
    this.crud.delete(this.myId).subscribe({
      next:(data)=>{
        this.mes=data;
        this.isDeleted=true;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }



}
