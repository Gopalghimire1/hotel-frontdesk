export class Helper {
     datecompare(date1:Date,date2:Date):number{
        let val=0;
        let d1=0,d2=0;
        d1=(date1.getFullYear()*10000)+(date1.getMonth()*100)+(date1.getDate());
        d2=(date2.getFullYear()*10000)+(date2.getMonth()*100)+(date2.getDate());
        if(d1==d2){
            val=0;
        }else if(d1<d2){
            val=-1;
        }else{
            val=1;
        }
        return val;
    }

     validateEmail(email:string):boolean{
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    }

    getDates(startDate:Date , stopDate:Date):Date[] {
        let dateArray:Date[] = [];
        let currentDate = startDate;
        while (currentDate <= stopDate) {
            let d1=new Date(currentDate);
            dateArray.push(d1);
            currentDate.setDate(currentDate.getDate()+1);
        }
        return dateArray;
    }

    getRandomColor():string{
        return  "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";  
    }

    randDarkColor() {
        let lum = -0.25;
        let hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        let rgb = "#",
            c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }
        return rgb;
    }

    dateDiff(date2:Date,date1:Date){
        let difference= date2.getTime()-date1.getTime();
        return Math.ceil(difference / (1000 * 3600 * 24));
    }

    getISODate(date:Date):string{
        let m=(date.getMonth()+1);
        let d=(date.getDate());
        return date.getFullYear()+"-"+(m<10?"0"+m:m)+"-"+(d<10?"0"+d:d);
    }

    smallestDate(dates:string[]):string{
        let least=dates[0];
        for (let index = 1; index < dates.length; index++) {
            const element = dates[index];
            let d1=new Date(least);
            let d2=new Date(element);
            if(this.datecompare(d2,d1)==-1){
                least=element;
            }
        }
        return least;
    }
}