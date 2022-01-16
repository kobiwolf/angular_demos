import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-content-top',
  templateUrl: './content-top.component.html',
  styleUrls: ['./content-top.component.scss']
})
export class ContentTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(a: NgForm) {
    console.log(a.value);

  }

}
