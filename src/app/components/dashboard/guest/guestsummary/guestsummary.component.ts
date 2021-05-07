import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-guestsummary',
  templateUrl: './guestsummary.component.html',
  styleUrls: ['./guestsummary.component.scss']
})
export class GuestsummaryComponent implements OnInit {

  reservations=[];
  constructor(public client:ApiService) { }

  ngOnInit(): void {
    this.client.getWithAuth("reservations")
    .subscribe((res:any)=>{

      this.reservations=res.data.reservation_list;
    });
  }



}
