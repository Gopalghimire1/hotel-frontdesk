import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-allguest',
  templateUrl: './allguest.component.html',
  styleUrls: ['./allguest.component.scss']
})
export class AllguestComponent implements OnInit {
  reservations=[];
  constructor(public client:ApiService) { }

  ngOnInit(): void {
    this.client.getWithAuth("reservations/all")
    .subscribe((res:any)=>{
      this.reservations=res.data.reservation_list;
    });
  }

}
