import { Component, OnInit } from '@angular/core';
import{ Router } from "@angular/router";
import {Location} from '@angular/common';
import { FormService } from 'app/providers/calculator.service';

@Component({
   selector :"fluid",
   templateUrl:'./fluid.component.html',
   styleUrls:['./fluid.component.scss']
})

export class FluidComponent implements OnInit{

    name = "Tushar Balar";
    weight= "60";
    Rweight="60";
    Pname="Aditya";
    DOB="07/08/1998"
    HN="12345";
    age="19";

    constructor(private _location: Location, private router:Router,  private formService: FormService){}

     data: any;
    ngOnInit(){  
        this.data = this.formService.getValue();
        console.log(this.formService.getValue());  
    }
    
    totalMls:any=0;
    
        getMls(mls:any, index:any){
            
            if(mls <= 10 &&  index==1)
                {
                this.totalMls += mls*100;
                return mls*100;
                }
            else if(mls>10 && mls <= 20 &&  index==2)
                {
                    this.totalMls += (mls-10)*50 + 1000;
                    return (mls-10)*50 + 1000; 
                }
            else if(this.data.weight > 20 && this.data.weight <= 70 &&  index==3)
                {
                    this.totalMls += (mls)*20+1500;
                    return (mls)*20+1500;
                }
            else if(mls > 70 && index==4)
                {
                    this.totalMls += 2500;
                    return 2500;
                }
            else return 0;
        }


    // detail(){
    //     this.router.navigate(['/calculator'])
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
        this.router.navigate(['/arrythmias']);
    }

}