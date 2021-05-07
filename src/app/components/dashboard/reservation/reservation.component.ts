import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/Models/Helper';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  // months=[
  //   "Jan",
  //   "Feb",
  //   "Mar",
  //   "Apr",
  //   "May",
  //   "Jun",
  //   "July",
  //   "Aug",
  //   "Sep",
  //   "Oct",
  //   "Nov",
  //   "Dec",
  //   ];
  //   enddate=new Date();
  //   dates=[];

  //   startdate="2021-04-01";
    reservations=[];
    // helper:Helper=new Helper();
    constructor(private client:ApiService) { }

    ngOnInit(): void {
      this.client.getWithAuth("reservations")
      .subscribe((res:any)=>{
      this.reservations=res.data.reservation_list;
        // this.startdate=this.helper.smallestDate(this.reservations.map(o=>o.check_in));
        // let stdate=new Date(this.startdate);
        // this.dates=this.helper.getDates(stdate,this.enddate);
      });
  }



}
