import { Component, Input, OnInit } from '@angular/core';
import { Helper } from 'src/app/Models/Helper';

@Component({
  selector: 'app-singleguest',
  templateUrl: './singleguest.component.html',
  styleUrls: ['./singleguest.component.scss']
})
export class SingleguestComponent implements OnInit {

  @Input()data:any;
  @Input()startdate:string;
  @Input()i;
  helper:Helper=new Helper();
  bgcolor=this.helper.randDarkColor();
  noOfDays=0;
  width=0;
  left=0;

  constructor() { }

  ngOnInit(): void {
    let currentDate=new Date();
    let checkinDate=new Date(this.data.checkindate);

    let stdate=new Date(this.startdate);
    this.noOfDays=this.helper.dateDiff(currentDate,checkinDate);
    this.width=((this.noOfDays)*50)-20;
    this.left=((this.helper.dateDiff(checkinDate,stdate))*50) +10;
    console.log(this.left,stdate);
  }

}
