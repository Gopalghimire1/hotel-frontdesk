import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { Setting } from 'src/app/Models/setting';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-singlereservation',
  templateUrl: './singlereservation.component.html',
  styleUrls: ['./singlereservation.component.scss']
})
export class SinglereservationComponent implements OnInit {
  id:string;
  data:any;
  reservation:any;
  rooms:any;
  services:any;
  url= Setting.url;
  constructor(private client:ApiService,private current:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    this.id=this.current.snapshot.paramMap.get("id");
    this.client.getWithAuth('reservations/single/'+this.id)
    .subscribe((res:any)=>{
      this.reservation=res.data.reservation;
      this.rooms=res.data.reservation_night;
      this.services=res.data.reservation_paid_service;
      console.log(this);
    });
  }

  back(){
    this.location.back();
  }

}
