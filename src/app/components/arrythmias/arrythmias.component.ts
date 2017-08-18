import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location} from '@angular/common';
import{ Router } from "@angular/router";
import { FormService } from 'app/providers/calculator.service';

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
        
        context.lineWidth = 1;
 // First Flow Chart 
        context.strokeStyle = '#000000';
        context.beginPath();
        context.moveTo(82, 53);
        context.lineTo(168, 53);
        context.stroke();
        context.closePath();
        
        context.strokeStyle = '#000000';
        context.beginPath();
        context.moveTo(166, 53);
        
        context.strokeStyle = '#000000';
        context.beginPath();
        context.moveTo(168, 52);
        context.lineTo(168, 20);
        context.stroke();
        context.closePath();
        
        context.strokeStyle = '#000000';
        context.beginPath();
        context.moveTo(83, 52);
        context.lineTo(91, 42);
        context.stroke();
        context.closePath();
        
        context.strokeStyle = '#000000';
        context.beginPath();
        context.moveTo(83, 51);
        context.lineTo(90, 61);
        context.stroke();
        context.closePath();
        
        // rect 1
        context.strokeStyle = '#000000';
        context.strokeRect(29, 93, 180, 64);
        context.fillText("DC SHOCK 4 J/KG", 35, 110, 180, 64)
        context.fillText(this.data.Rweight*4, 39, 125, 180, 74 ),
        context.fillText("Estimated Joules"  , 45, 125, 180, 74 ),

        context.strokeStyle = '#000000';
        context.beginPath();
        context.moveTo(110, 161);
        context.lineTo(110, 225);
        context.stroke();
        context.closePath();
        
        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(87, 217);
        // context.lineTo(77, 209);
        // context.stroke();
        // context.closePath();
        
        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(87, 217);
        // context.lineTo(96, 209);
        // context.stroke();
        // context.closePath();
        
        // rect 2
        context.strokeStyle = '#000000';
        context.strokeRect(29, 229, 180, 61);
        
        context.strokeStyle = '#000000';
        context.beginPath();
        context.moveTo(110, 293);
        context.lineTo(110, 348);
        context.stroke();
        context.closePath();
        
        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(87, 340);
        // context.lineTo(79, 332);
        // context.stroke();
        // context.closePath();
        
        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(88, 339);
        // context.lineTo(95, 333);
        // context.stroke();
        // context.closePath();
        
        // rect 3
        context.strokeStyle = '#000000';
        context.strokeRect(29, 352, 180, 62);
        
        context.strokeStyle = '#000000';
        context.beginPath();
        context.moveTo(110, 418);
        context.lineTo(110, 479);
        context.stroke();
        context.closePath();
        
        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(88, 474);
        // context.lineTo(78, 463);
        // context.stroke();
        // context.closePath();
        
        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(90, 472);
        // context.lineTo(98, 464);
        // context.stroke();
        // context.closePath();


        // rect 4
        context.strokeStyle = '#000000';
        context.strokeRect(29, 480, 180, 62);

        context.strokeStyle = '#000000';
        context.beginPath();
        context.moveTo(110, 550);
        context.lineTo(110, 550);
        context.stroke();
        context.closePath();


        // rect 5
        context.strokeStyle = '#000000';
        context.strokeRect(29, 580, 180, 62);

        context.strokeStyle = '#000000';
        context.beginPath();
        context.moveTo(110, 660);
        context.lineTo(110, 660);
        context.stroke();
        context.closePath();

       
        context.lineWidth = 2;
        
        // rect 6
        context.strokeStyle = '#000000';
        context.strokeRect(29, 700, 180, 62);
        
        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(350, 100);
        // context.lineTo(350, 100);
        // context.stroke();
        // context.closePath();
        
        context.strokeStyle = '#000000';
        context.beginPath();
        context.moveTo(157, 800);
        context.lineTo(290, 800);
        context.stroke();
        context.closePath();
        
        context.strokeStyle = '#000000';
        context.beginPath();
        context.moveTo(290, 820);
        context.lineTo(290, 650);
        context.stroke();
        context.closePath();
        
        // rect 7
        context.strokeStyle = '#000000';
        context.strokeRect(256, 600, 71, 44);
        
        context.strokeStyle = '#000000';
        context.beginPath();
        context.moveTo(290, 600);
        
        context.lineTo(289, 500);
        context.stroke();
        
        
        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(289, 316);
        // context.lineTo(288, 254);
        // context.stroke();
        // context.closePath();
        
        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(290, 254);
        
        context.strokeStyle = '#000000';
        context.beginPath();
        context.moveTo(290, 500);
        context.lineTo(235, 500);
        context.stroke();
        context.closePath();
        // last box

//First Chart End

// Second Flow Chart

// FIRST RECT
context.strokeStyle = '#000000';
context.strokeRect(550, 12, 147, 53);

// SECOND RECT
context.strokeStyle = '#000000';
context.strokeRect(450, 25, 57, 33);


context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(550, 40);
context.lineTo(506, 40);
context.stroke();
context.closePath();

context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(478, 57);
context.lineTo(478, 110);
context.stroke();
context.closePath();


// THIRD 
context.strokeStyle = '#000000';
context.strokeRect(750, 25, 57, 33);

context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(750, 40);
context.lineTo(700, 40);
context.stroke();
context.closePath();

context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(777, 57);
context.lineTo(777, 110);
context.stroke();
context.closePath();



// FOURTH 
context.strokeStyle = '#000000';
context.strokeRect(425, 110, 100, 47);

// FIFTH 
context.strokeStyle = '#000000';
context.strokeRect(730, 110, 100, 47);

// 6th
context.strokeStyle = '#000000';
context.strokeRect(740, 195, 77, 36);

context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(777, 156);
context.lineTo(777, 192);
context.stroke();
context.closePath();

// 7th
context.strokeStyle = '#000000';
context.strokeRect(600, 115, 58, 31);

context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(656, 130);
context.lineTo(730, 130);
context.stroke();
context.closePath();

// 8th
context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(478, 160);
context.lineTo(478, 260);
context.stroke();
context.closePath();

context.strokeStyle = '#000000';
context.strokeRect(380, 260, 230, 77);

// 9th
context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(600, 130);
context.lineTo(560, 130);
context.stroke();
context.closePath();

context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(560, 130);
context.lineTo(560, 260);
context.stroke();
context.closePath();

context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(777, 230);
context.lineTo(777, 260);
context.stroke();
context.closePath()

context.strokeStyle = '#000000';
context.strokeRect(680, 260, 230, 77);

// 10 th
context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(478, 337);
context.lineTo(478, 379);
context.stroke();
context.closePath();

context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(777, 337);
context.lineTo(777, 379);
context.stroke();
context.closePath();

context.strokeStyle = '#000000';
context.strokeRect(380, 379, 230, 77); 
// 11th
context.strokeStyle = '#000000';
context.strokeRect(680, 379, 230, 77);

// 12th 
context.strokeStyle = '#000000';
context.strokeRect(380, 500, 230, 77); 

context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(478, 460);
context.lineTo(478, 500);
context.stroke();
context.closePath();

// 13th 
context.strokeStyle = '#000000';
context.strokeRect(680, 500, 230, 77);

context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(777, 460);
context.lineTo(777, 500);
context.stroke();
context.closePath();
// Second Flow Chart End
    }

    data: any;
    ngOnInit(){  
        this.formService.getValue();
        this.data= this.formService.getValue(); 
    }

    back() {
        this._location.back();
    }
}