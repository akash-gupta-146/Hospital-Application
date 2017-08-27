import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Validators, FormArray, FormBuilder} from '@angular/forms';
import{ Router } from "@angular/router";
import {Location} from '@angular/common';
import { FormService } from 'app/providers/calculator.service';


@Component({
   selector :"intubation",
   templateUrl:'./intubation.component.html',
   styleUrls:['./intubation.component.scss']
})

export class IntubationComponent implements OnInit{
    constructor(private _location: Location, private router:Router, private formService: FormService){}
   
    data: any;
    ngOnInit(){  
        this.data = this.formService.getValue();
        console.log(this.formService.getValue());  
    }

    next(){
        this.router.navigate(['/infusion'])
    }

    print(){
        window.print();
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

    back() {
        this._location.back();
    }
}