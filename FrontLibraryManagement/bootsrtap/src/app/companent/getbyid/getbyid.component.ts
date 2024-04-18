import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-getbyid',
  templateUrl: './getbyid.component.html',
  styleUrl: './getbyid.component.scss'
})
export class GetbyidComponent implements OnInit {
      myId!: number;
      user:UserModel={
        userId:"",
        fullName:"",
        email:"",
        role:""
        
      };
      constructor(private http: CrudService){
        this.getByid();

      }
  ngOnInit(): void {
   this.getByid();
  }
  getByid(){
    this.http.getById(this.myId).subscribe({
      next:(data)=>{
        this.user=data
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
}