export class ResItem {
    room_type_id:number;
    room_id:number;
    room_type:string;
    room:string;
    price:number;
    // nights:number;
    // total:number;
    constructor(_room:any,_room_type:any){
        this.room_type_id=_room_type.id;
        this.room_type=_room_type.title;
        this.room=_room.number;
        this.room_id=_room.id;
        this.price=_room_type.base_price;
        // this.nights=_nights;
        // this.total=this.price*this.nights;
    }
}