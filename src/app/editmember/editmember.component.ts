import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editmember',
  templateUrl: './editmember.component.html',
  styleUrls: ['./editmember.component.css']
})
export class EditmemberComponent implements OnInit {

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
    const name = this.aroute.snapshot.params['name'];
  }
  editContact(con: NgForm):void{
    console.log(con.value);
    localStorage.setItem(con.value.firstname,JSON.stringify(con.value));
    this.router.navigateByUrl('/display');
  }

}
