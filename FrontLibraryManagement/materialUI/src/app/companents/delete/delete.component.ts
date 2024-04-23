import { Component } from '@angular/core';
import { CrudService, Message } from '../../services/crud.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
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