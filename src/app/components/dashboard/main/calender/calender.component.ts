import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  date:Date;
  currentdate:Date;
  months=[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    ];
    days=[];
    year=2000;
    currentMonth=3;
    firstDay=0;;
    constructor() { }

    ngOnInit(): void {
      this.date=new Date();
      this.currentdate=new Date();
      this.compileCalender();
  }

  changeMonth(month){
    this.date=new Date(this.year,month,1);
    this.compileCalender();
  }

  compileCalender(){
    this.days=[];
    this.year=this.date.getFullYear();
    this.currentMonth=this.date.getMonth();
    let f = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    this.firstDay=f.getDay();
    for (let index = 0; index < this.firstDay; index++) {
      this.days.push("");
    }
    for (let index = 1; index <= new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate(); index++) {
      this.days.push(index);
      
    }
  }

}
