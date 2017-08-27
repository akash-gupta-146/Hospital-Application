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
    data: any;
    ngOnInit(){  
         this.data = this.formService.getValue(); 
    }
      print(){      
        window.print();
    }      
    calculate1(getWeight){
        if(getWeight*0.1< 3)
            return (getWeight*0.1);
        else 
            return 3;
    }
    calculate2(getWeight){
        if(getWeight*0.1<6)
            return (getWeight*0.2);
        else 
            return 6;
    }
    
    back() {
        this._location.back();
    }
    ngAfterViewInit(){
        // var canvas, context, canvaso, contexto;
        // canvaso = document.getElementById('imageView');
        // context = canvaso.getContext('2d');
        // context.lineWidth = 5;        
        // context.lineWidth = 1;
      
 // First Flow Chart 
        // context.font = "15px Arial";
        // context.fillText(" SHOCKABLE RHYTHM ", 60, 15)
        // context.fillText("Ventricular Fibrillation and",35, 50)
        // context.fillText("Pulseless Ventricular Tachycardia ",35, 70)
        // context.closePath();
        
        // rect 1
        // context.strokeStyle = '#000000';
        // context.strokeRect(29, 93, 210, 74);
        // context.font = "13px Arial";
        // context.fillText("DC SHOCK 4 J/KG", 40, 115)
        // context.fillText(this.data.Rweight*4, 35,140),
        // context.fillText("Estimated Joules"  , 66, 140),

        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(112, 165);
        // context.lineTo(112, 228);
        // context.stroke();
        // context.closePath();

        // context.font = "12px Arial";
        // context.fillText("2 min CPR" , 130, 185 ),
        // context.fillText("check monitor" , 130, 200 ),

        
        // rect 2
        // context.strokeStyle = '#000000';
        // context.strokeRect(29, 229, 210, 74);
        // context.fillText("DC SHOCK 4 J/KG",   40, 255),
        // context.fillText(this.data.Rweight*4, 35, 280),
        // context.fillText("Estimated Joules" , 66, 280),

        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(110, 298);
        // context.lineTo(110, 360);
        // context.stroke();
        // context.closePath();

        // context.fillText("2 min CPR" , 130, 320 ),
        // context.fillText("check monitor" , 130, 335 ),
        
        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(110, 440);
        // context.lineTo(110, 480);
        // context.stroke();
        // context.closePath();
        
        // context.fillText("2 min CPR" , 130, 455 ),
        // context.fillText("check monitor" , 130, 475 ),

 
        
        // rect 3
        // context.strokeStyle = '#000000';
        // context.strokeRect(29, 358, 210, 74);
        // context.fillText("Epinephrine then DC",  40, 378),
        // context.fillText("SHOCK 4 J/KG" , 40, 397),
        // context.fillText(this.data.Rweight*4, 35, 415),
        // context.fillText("Estimated Joules", 66, 415,),

        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(110, 435);
        // context.lineTo(110, 500);
        // context.stroke();
        // context.closePath();
        


        // rect 4
        // context.strokeStyle = '#000000';
        // context.strokeRect(29, 500, 210, 74);
        // context.fillText("Amiodarone then DC",  40, 520),
        // context.fillText("SHOCK 4 J/KG" , 40, 540),
        // context.fillText(this.data.Rweight*4, 35, 560),
        // context.fillText("Estimated Joules" , 66, 560,),
        // context.fillText("2 min CPR" , 130, 600 ),
        // context.fillText("check monitor" , 130, 620 ),
        

        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(110, 574);
        // context.lineTo(110, 640);
        // context.stroke();
        // context.closePath();


        // // rect 5
        // context.strokeStyle = '#000000';
        // context.strokeRect(29, 640, 210, 74);
        // context.fillText("Epinephrine then DC",  40, 660),
        // context.fillText("SHOCK 4 J/KG" , 40, 680),
        // context.fillText(this.data.Rweight*4, 35, 700),
        // context.fillText("Estimated Joules" , 66, 700),
        // context.fillText("2 min CPR" , 130, 735 ),
        // context.fillText("check monitor" , 130, 750 ),
        
        // rect 6
        // context.strokeStyle = '#000000';
        // context.strokeRect(29, 780, 210, 74);
        // context.fillText("DC SHOCK 4 J/KG",   50, 800),
        // context.fillText(this.data.Rweight*4, 35, 820),
        // context.fillText("Estimated Joules" , 66, 820),


        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(110, 715);
        // context.lineTo(110, 780);
        // context.stroke();
        // context.closePath();
        
        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(240, 800);
        // context.lineTo(290, 800);
        // context.stroke();
        // context.closePath();
        
       
        
        // // rect 7
        // context.strokeStyle = '#000000';
        // context.strokeRect(256, 600, 99, 60);
        // context.fillText("2 min CPR", 262, 620, 71, 44),
        // context.fillText("Check Monitor", 262, 634,78, 44),
        
        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(290, 600);  
        // context.lineTo(289, 530);
        // context.stroke();
        
        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(290, 530);
        // context.lineTo(240, 530);
        // context.stroke();
        // context.closePath();

        // context.strokeStyle = '#000000';
        // context.beginPath();
        // context.moveTo(290, 800);
        // context.lineTo(290, 660);
        // context.stroke();
        // context.closePath();
        // last box

// First Chart End







// Second Flow Chart

// FIRST RECT

// context.fillText("Supraventricular Tachycardia", 500,10),



// context.strokeStyle = '#000000';
// context.strokeRect(550, 25, 147, 53);

// context.fillText("Shock", 570, 50),
// context.fillText("Present", 570, 70),



// SECOND RECT
// context.strokeStyle = '#000000';
// context.strokeRect(450, 40, 57, 33);
// context.fillText("No", 464, 60),

// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(550, 55);
// context.lineTo(506, 55);
// context.stroke();
// context.closePath();

// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(478, 72);
// context.lineTo(478, 110);
// context.stroke();
// context.closePath();


// THIRD 
// context.strokeStyle = '#000000';
// context.strokeRect(750, 40, 57, 33);
// context.fillText("yes", 765, 60),

// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(750, 55);
// context.lineTo(700, 55);
// context.stroke();
// context.closePath();

// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(777, 72);
// context.lineTo(777, 110);
// context.stroke();
// context.closePath();



// FOURTH /
// FIFTH 
// context.strokeStyle = '#000000';
// context.strokeRect(730, 110, 100, 47);
// context.fillText("Iv Access", 745, 135),

// // 6th
// context.strokeStyle = '#000000';
// context.strokeRect(740, 195, 77, 36);
// context.fillText("yes", 625, 135),

// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(777, 156);
// context.lineTo(777, 192);
// context.stroke();
// context.closePath();

// 7th
// context.strokeStyle = '#000000';
// context.strokeRect(600, 115, 58, 31);
// context.fillText("No", 757, 216),

// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(656, 130);
// context.lineTo(730, 130);
// context.stroke();
// context.closePath();

// 8th
// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(478, 160);
// context.lineTo(478, 260);
// context.stroke();
// context.closePath();

// context.strokeStyle = '#000000';
// context.strokeRect(380, 260, 230, 77);
// context.fillText("Adenosine", 430, 285),
// context.fillText(this.calculate1(this.data.Rweight), 430, 300),
// context.fillText("mg", 430, 315),
// context.fillText("100microgram/kg", 430, 330),

// 9th
// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(600, 130);
// context.lineTo(560, 130);
// context.stroke();
// context.closePath();

// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(560, 130);
// context.lineTo(560, 260);
// context.stroke();
// context.closePath();

// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(777, 230);
// context.lineTo(777, 260);
// context.stroke();
// context.closePath()

// context.strokeStyle = '#000000';
// context.strokeRect(680, 260, 230, 77);
// context.fillText("Synchronous DC shock", 710, 290),
// context.fillText(this.data.Rweight*0.5, 710, 310),
// context.fillText("J/Kg", 750, 310),
// context.fillText("100microgram/kg", 710, 330),

// 10 th
// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(478, 337);
// context.lineTo(478, 379);
// context.stroke();
// context.closePath();

// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(777, 337);
// context.lineTo(777, 379);
// context.stroke();
// context.closePath();

// context.strokeStyle = '#000000';
// context.strokeRect(380, 379, 230, 77); 
// context.fillText("Adenosine", 420, 400),
// context.fillText(this.calculate2(this.data.Rweight), 420, 415),
// context.fillText("mg", 420, 430),
// context.fillText("100microgram/kg", 420, 445),

// 11th
// context.strokeStyle = '#000000';
// context.strokeRect(680, 379, 230, 77);
// context.fillText("CONSIDER Synchronous ", 390, 770),
// context.fillText("DC shock",390,790),
// context.fillText("(see warning!) PLEASE ", 390, 810),
// context.fillText("D/W CARDIOLOGY",390,830),
// context.fillText("PRIOR TO USING:-  Verapamil",  390, 850),
// context.fillText("Amiodarone Flecainide",390, 870),
// context.fillText("Propranolol Digoxin",390,890),
// // 12th 
// context.strokeStyle = '#000000';
// context.strokeRect(380, 500, 230, 77); 
// context.fillText("Do NOT exceed adenosine ", 395, 665),
// context.fillText("maximum single dose 12mg", 395, 685),

// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(478, 460);
// context.lineTo(478, 500);
// context.stroke();
// context.closePath();

// 13th 
// context.strokeStyle = '#000000';
// context.strokeRect(680, 500, 230, 77);
// context.fillText("Synchronous DC shock 1J/kg", 683, 420),
// context.fillText(this.data.Rweight*1, 685, 440),
// context.fillText("Estimated Joules ", 705, 440),

// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(777, 460);
// context.lineTo(777, 500);
// context.stroke();
// context.closePath();

// repeating rect 
// context.strokeStyle = '#000000';
// context.strokeRect(800, 600, 135, 60);
// context.fillText("Consider", 815, 620),
// context.fillText("using", 815, 635),
// context.fillText("antiarrhythmics", 815, 650),


// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(777, 580);
// context.lineTo(777, 670);
// context.stroke();
// context.closePath();

// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(777, 670);
// context.lineTo(960, 670);
// context.stroke();
// context.closePath();

// context.beginPath();
// context.moveTo(960, 670);
// context.lineTo(960, 550);
// context.stroke();
// context.closePath();


// context.beginPath();
// context.moveTo(960, 550);
// context.lineTo(910, 550);
// context.stroke();
// context.closePath();

// 
// context.strokeRect(380, 630, 230, 77); 

// context.beginPath();
// context.moveTo(478, 580);
// context.lineTo(478, 630);
// context.stroke();
// context.closePath();

// 

// context.strokeRect(380, 630, 230, 77); 
// context.fillText("Synchronous DC shock 2J/kg", 700, 530),
// context.fillText(this.data.Rweight*2, 700, 550),
// context.fillText("Estimated Joules ", 725, 550),

// context.beginPath();
// context.moveTo(478, 710);
// context.lineTo(478, 750);
// context.stroke();
// context.closePath();

//
// context.strokeRect(380, 750,230, 150); 

// context.strokeRect(700, 750, 240, 70); 
// context.fillText("USE THE NEAREST HIGHE", 710, 770),
// context.fillText("VALUE FOR DC SHOCK", 710, 790),

// context.fillText("Use Paediatric Paddles for ",710, 840),
// context.fillText("Children <10 kg", 710, 860)

// Second Flow Chart End




// // third flow chart   
// context.fillText("NON SHOCKABLE RHYTHM",1060,10),
// context.fillText("Asystole and PEA",1060,30),

// 1st rectangle
// context.strokeRect(1060, 65, 230, 50);/
// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(1175, 140);
// context.lineTo(1175, 200);
// context.stroke();
// context.closePath();

// // 2nd rectangle
// context.strokeRect(1060, 200, 230, 65);
// context.fillText("Ventilate with high", 1070, 230),
// context.fillText("O2 concentration", 1070, 245),


// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(1175, 262);
// context.lineTo(1175, 340);
// context.stroke();
// context.closePath();

// 3rd rectangle

// context.strokeRect(1060, 350, 230, 65);
// context.fillText("Epinephrine",  1079, 365),
// context.fillText(this.data.Rweight*0.01 ,  1079, 385),
// context.fillText("mg",  1079, 395),
// context.fillText("10mcg/kg IV or IO", 1079, 410),


// context.beginPath();
// context.moveTo(1175, 420);
// context.lineTo(1175, 470);
// context.stroke();
// context.closePath();

//  4th rectangle
// context.strokeRect(1000, 450, 100, 40);
// context.fillText("4min CPR", 1010, 475),

// context.beginPath();
// context.moveTo(1175, 470);
// context.lineTo(1100, 470);
// context.stroke();
// context.closePath();

// context.beginPath();
// context.moveTo(1025, 450);
// context.lineTo(1025, 380);
// context.stroke();
// context.closePath();

// context.beginPath();
// context.moveTo(1025, 380);
// context.lineTo(1050, 380);
// context.stroke();
// context.closePath();

// 5th rectangle
// context.fillText("Warning!", 1070, 640),
// context.fillText(" Please ensure patients",1070, 690),
// context.fillText("are sedated or anaesthetised ", 1070, 710),
// context.fillText("for cardioversion, unless", 1070,730)
// context.fillText("patient already unconscious", 1070,750),

// context.strokeRect(1060, 600, 230, 230);

// third chart end 
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