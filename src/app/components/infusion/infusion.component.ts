import { Component, OnInit } from '@angular/core';
import{ Router } from "@angular/router";
import {Location} from '@angular/common';
import { FormService } from 'app/providers/calculator.service';
@Component({
   selector :"infusion",
   templateUrl:'./infusion.component.html',
   styleUrls:['./infusion.component.scss']
})

export class InfusionComponent implements OnInit{
    constructor(private _location: Location, private router: Router, private formService: FormService){}
   
    data: any;
    ngOnInit(){  
        this.data = this.formService.getValue();
        console.log(this.formService.getValue());  
    }

    // detail(){
    //     this.router.navigate(['/calculator'])
    // }
    // resus(){
    //     this.router.navigate(['/resus_drug'])
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
    back() {
        this._location.back();
    }
    
    next(){
        this.router.navigate(['/fluid'])
    }
}