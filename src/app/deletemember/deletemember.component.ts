import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-deletemember',
  templateUrl: './deletemember.component.html',
  styleUrls: ['./deletemember.component.css']
})
export class DeletememberComponent implements OnInit {

  fname: string;
  lname: string;
  mobile: string;
  email: string;
  constructor(public aroute: ActivatedRoute,public router: Router) { 
    var data = JSON.parse(localStorage.getItem(this.aroute.snapshot.params['name']));
    this.fname = data.firstname;
     this.lname = data.lastname;
     this.mobile = data.mobile;
     this.email = data.email;

  }

  ngOnInit() {
  }
  delteContact(){
  console.log(this.aroute.snapshot.params['name']);
    localStorage.removeItem(this.aroute.snapshot.params['name']);
    this.router.navigateByUrl('/display');
    
  }
}
