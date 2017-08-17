import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Validators, FormArray, FormBuilder} from '@angular/forms';
import{ Router } from "@angular/router";
import {Location} from '@angular/common';
import { FormService } from 'app/providers/calculator.service';
declare let $:any;

@Component({
   selector :"resus",
   templateUrl:'./resus_drug.component.html',
   styleUrls:['./resus_drug.component.scss'],
})

export class Resus_DrugComponent implements OnInit, AfterViewInit{

 constructor(private router: Router,private _location: Location, private formService: FormService){}
      
    Rweight:number;
    data: any;
    ngOnInit(){  
        this.data = this.formService.getValue();
        console.log(this.formService.getValue());  
    }

    ngAfterViewInit(){
        var canvas, context, canvaso, contexto;
        canvaso = document.getElementById('imageView');
        context = canvaso.getContext('2d');
        context.lineWidth = 5;
        
        context.strokeStyle = '#000000';
        context.strokeRect(199, 80, 272, 77);
    }

     next(){
        this.router.navigate(['/intubation'])
      }
     
      back() {
        this._location.back();
    }
}