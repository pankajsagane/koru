import { Component, OnInit } from '@angular/core';
import {MyserviceService} from "../myservice.service"


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service:MyserviceService) { }
 private empList:[]=[];
 private inputdata:string="";
 private selectedIds:number[]=[];

  ngOnInit() {
      this.service.getRecord().subscribe(record=>this.empList=record);     
  }

  adduser(form){ 
    console.log(form.value);
  this.empList['data'].push(form.value)
    
  }
 
 
  filter(){
    if(this.inputdata ==""){
      this.service.getRecord().subscribe(record=>this.empList=record);
    }
   this.empList['data']=this.empList['data'].filter(user=>(user.name==this.inputdata)||(user.description==this.inputdata)||(user.webReference==this.inputdata));
  
  }
  selectID(id:number, event:any){
    this.selectedIds.push(id);
    console.log(this.selectedIds)
}

deleteSelected(){
  this.selectedIds.forEach((obj:number) =>{
    this.empList['data']= this.empList['data'].filter(item=> item.id !== obj);
})
}

}
