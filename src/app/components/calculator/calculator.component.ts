import { Component, OnInit, Input,AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Validators, FormArray, FormBuilder} from '@angular/forms';
import{ Router } from "@angular/router";
import { FormService } from "app/providers/calculator.service";


@Component({
   selector :"calculator",
   templateUrl:'./calculator.component.html',
   styleUrls:['calculator.component.scss']
})

export class CalculatorComponent implements OnInit{
    public myForm: FormGroup;
     constructor(private _fb : FormBuilder,private router: Router, private formService: FormService){}
     ngOnInit(){
       this.myForm = this._fb.group({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        name: [''],
        DOB: [''],
        age: [''],
        HN: [''],
        weight: ['',Validators.required],
        prescriber:[''],
       });
     }
    
   save(){
      console.log(this.myForm.value);
      this.formService.storeData(this.myForm.value);
      this.router.navigate(['resus_drug']);
   }

   ngAfterViewInit(){
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
    


 