import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Validators, FormArray, FormBuilder} from '@angular/forms';
import{ Router } from "@angular/router";
import {Location} from '@angular/common';
import { FormService } from 'app/providers/calculator.service';

@Component({
   selector :"resus",
   templateUrl:'./resus_drug.component.html',
   styleUrls:['./resus_drug.component.scss'],
})

export class Resus_DrugComponent implements OnInit{

 constructor(private router: Router,private _location: Location, private formService: FormService){}
      
    Rweight:number;
    data: any;
    whatTime:any;

    ngOnInit(){  
        this.data = this.formService.getValue();
        console.log(this.formService.getValue()); 
    }

    print(){      
        window.print();
    }

    next(){
        this.router.navigate(['/intubation'])
    }
    back() {
         this._location.back();
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

