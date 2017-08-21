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

  
  
    // detail(){
    //     this.router.navigate(['/calculator'])
    // }
    // resus(){
    //     this._location.back();
    // }
    // intibution(){
    //     this.router.navigate(['/intubation'])
    // }
    // infusion(){
    //     this.router.navigate(['/infusion'])
    // } 
    // fluid(){
    //     this.router.navigate(['/fluid'])
    // }
    // arrythmias(){
    //     this.router.navigate(['/arrythmias'])
    // }
    next(){
        this.router.navigate(['/infusion'])
    }

    back() {
        this._location.back();
    }
}