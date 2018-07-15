import { Component, OnInit } from '@angular/core';
import { AddmemberComponent } from '../addmember/addmember.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-displaymember',
  templateUrl: './displaymember.component.html',
  styleUrls: ['./displaymember.component.css']
})
export class DisplaymemberComponent implements OnInit {
  people: any[];
  fname: string;
  lname: string;
  mobile: string;
  email: string;
  flag:boolean;
  constructor(public router: Router) {
    this.people = this.getPeople();
    this.flag = false;
    
   }

  ngOnInit() {
  }
  edit(name: string){
    console.log(name);    
    this.router.navigate(["/edit",name]);     
  }
  delete(name: string){
    console.log(name);
    this.router.navigate(["/delete",name]);
    
}
  onClick(name: string){
     console.log(localStorage.getItem(name));
     var data = JSON.parse(localStorage.getItem(name));
     this.fname = data.firstname;
      this.lname = data.lastname;
      this.mobile = data.mobile;
      this.email = data.email;
      this.flag = true;

      this.router.navigate(["/display",name]);
  }

 getPeople():any[] {
  var values = [],
  keys = Object.keys(localStorage),
  i = keys.length;
  while ( i-- ) {
    if(localStorage.key(i) !== "" && localStorage.key(i) !== "undefined")
     values.push(localStorage.key(i))
  }
  return values;
 }

}
