import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  addContact(con: NgForm):void{
    console.log(con.value);
    localStorage.setItem(con.value.firstname,JSON.stringify(con.value));
    this.router.navigateByUrl('/display');
  }
}
