import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Helper } from 'src/app/Models/Helper';
import { ApiService } from 'src/app/services/api.service';
import { ResItem } from './resitem.model';

@Component({
  selector: 'app-addreservation',
  templateUrl: './addreservation.component.html',
  styleUrls: ['./addreservation.component.scss']
})
export class AddreservationComponent implements OnInit {

  helper:Helper=new Helper();
  roomsel=false;
  room_type_id=1;
  room_id=1;
  currentRooms=[];
  roomTypes=[];
  paidServices=[];
  currentPrice=0;
  orders:ResItem[]=[];
  nights=1;

  //old guest
  oldGuest=false;
  guest_id="";

  //Personal Information
  name="";
  phone="";
  email="";
  address="";
  nationality="";

  //Verification
  doc_type="citi";
  doc_no="";
  issuedate="";
  expairydate="";
  issue_place="";

  //Card Detail
  card_no="";
  card_expairydate="";
  ccv="";
  //stay information
  checkInDate:Date=new Date();
  adults=1;
  childrens=0;

  //paid services
  selectedPaidServices=[];
  constructor(private client:ApiService,private router:Router) { }
  //data lock
  lock=false;
  ngOnInit(): void {

    this.client.getWithAuth("rooms")
    .subscribe((res:any)=>{
      this.roomTypes=res.room_type;
      console.log(this.roomTypes);
      this.room_type_id=this.roomTypes[0].id;
      this.roomTypeChanged();
    });

    this.client.getWithAuth("paid-services")
    .subscribe((res:any)=>{
      this.paidServices=res.data;
    });

  }

  roomTypeChanged(){
    this.currentRooms=[];
    let selRoomType=this.roomTypes.find(o=>o.id==this.room_type_id);
    this.currentPrice=selRoomType.base_price;
    console.log(selRoomType.room,"Sel Room");
    selRoomType.room.forEach((room:any) => {
        if(this.orders.findIndex(o=>o.room_id==room.id)<0){
          this.currentRooms.push(room);
        }
    });
    this.room_id=this.currentRooms[0].id;
    this.roomsel==true;
  }

  dateChanged(e){
    this.checkInDate=e.target.valueAsDate;
  }

  addOrder(){
    let roomType=this.roomTypes.find(o=>o.id==this.room_type_id);
    let room=this.currentRooms.find(o=>o.id==this.room_id);
    // if(this.nights<1){
    //   alert("err");
    //   return;
    // }
    this.orders.push(new ResItem(room,roomType));
    this.roomTypeChanged();
  }

  delOrder(room_id:number){
    var index=this.orders.findIndex(o=>o.room_id==room_id);
    if(index>-1){
      this.orders.splice(index,1);
      this.roomTypeChanged();
    }

  }



  paidServiceChange(e){
    console.log(e.target.checked);
    console.log(e.target.value);
    let index=this.selectedPaidServices.findIndex(o=>o==e.target.value);
    if(e.target.checked && index<0){
      this.selectedPaidServices.push(e.target.value);
    }else{
      if(index>=0){
        this.selectedPaidServices.splice(index,1);

      }
    }
    console.log(this.selectedPaidServices);
  }

  addReservation(){
    if(this.lock){
      return
    }
    if(this.oldGuest){
      if(this.guest_id.length==0){
          alert("Enter Guest ID");
          return;
      }
    }
    if(this.name.length<4){
      alert("Please Enter Guest Name");
      return;
    }
    if(this.phone.length<10){
      alert("Please Enter Correct Phone Number");
      return;
    }
    if(this.email.length>0){
      if(!(this.helper.validateEmail(this.email))){
        alert("Please Enter Correct Email Address");
        return;
      }
    }

    if(this.doc_no.length<=0){
      alert("Please Enter A Valid Verification Document Number");
      return;
    }

    var today=new Date();

    if(this.helper.datecompare(this.checkInDate,today)==-1){
      alert("Please Choose A Correct Checkin Date");
      return;
    }

    if(this.adults<1 || this.childrens<0){
      alert("Please Enter Correct No of guests");
      return 0;
    }

    if(this.orders.length<=0){
      alert("Please Select At Least One Room");
      return;
    }

    var data={
        "name":this.name,
        "email":this.email,
        "phone":this.phone,
        "address":this.address,
        "nationality":this.nationality,
        "identity_type":this.doc_type,
        "id_number":this.doc_type,
        "id_issue_date":this.issuedate,
        "id_expire_date":this.expairydate,
        "id_issued_place":this.issue_place,
        "card_no":this.card_no,
        "card_expire_date":this.card_expairydate,
        "ccv":this.ccv,
        "check_in":this.helper.getISODate( this.checkInDate),
        "adults":this.adults,
        "child":this.childrens,
        "number_of_room":this.orders.length,
        "room_id":this.orders.map(o=>o.room_id),
        "paid_service_id":this.selectedPaidServices,
        "olduser":this.oldGuest,
        "unique_id":this.guest_id
    };
    this.lock=true;
    this.client.postWithAuth("reservations/add",data)
    .subscribe((res)=>{
      console.log(res);
      this.lock=false;
      this.router.navigate(['/admin/reservations']);
    },
    (err)=>{
      this.lock=false;
      alert('Some Error Occured Please Try Again')
    });

  }

}
