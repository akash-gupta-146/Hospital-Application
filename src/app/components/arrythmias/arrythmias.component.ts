import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location} from '@angular/common';
import{ Router } from "@angular/router";
import { FormService } from 'app/providers/calculator.service';

declare let $:any;

@Component({
   selector :"arrythmias",
   templateUrl:'./arrythmias.component.html',
   styleUrls:['./arrythmias.component.scss']
})

export class ArrythmiasComponent implements OnInit,  AfterViewInit{
    constructor(private _location: Location, private formService: FormService){

    }

    ngAfterViewInit(){
        var canvas, context, canvaso, contexto;
        canvaso = document.getElementById('imageView');
        context = canvaso.getContext('2d');
        context.lineWidth = 5;
        
        context.strokeStyle = '#000000';
        context.strokeRect(199, 80, 272, 77);
    }

    data: any;
    ngOnInit(){  
        this.formService.getValue();
        console.log(this.formService.getValue());  
    }

    back() {
        this._location.back();
    }
}