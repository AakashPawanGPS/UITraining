import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {

  num = 10
  sum = 20
  placeholder = "Enter Your Father's Name"
  disabled:boolean = true;
  name = "aaskash"

  strClass = "active class1"
  objClass = {
    active: true,
    class2: false
  }
  arrClass = ['class3']

  constructor() { }

  ngOnInit(): void {
  }

  myfunc() {
    return "Aakash Pawan"
  }

  clicked(){
    console.log("clicked");
    
    // alert("Button is Clicked")
  }

  keyUped(e: any){
    console.log(e.target.value)
  }

  focussed(){
    console.log("Focus...");
  }
}
