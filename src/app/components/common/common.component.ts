import { Component, OnInit } from '@angular/core';
import{ Router } from "@angular/router";
@Component({
    selector :"commom",
    templateUrl:'./common.component.html',
    styleUrls:['./common.component.scss']
 })
 
 export class CommonComponent implements OnInit{
    
    constructor(private router:Router){}
    
        ngOnInit(){  
     
        }
        
        formatDate(date) {
            var monthNames = [
              "January", "February", "March",
              "April", "May", "June", "July",
              "August", "September", "October",
              "November", "December"
            ];
          
            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();
          
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return day + ' ' + monthNames[monthIndex] + ' ' + year+ ' ' + ' ' + ' ' + ' ' + ' ' + ' '+strTime;
          }
          
          e = this.formatDate(new Date());  
}
