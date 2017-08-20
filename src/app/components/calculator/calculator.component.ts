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
        weight: [' ',[Validators.required, Validators.minLength(1)]],
        prescriber:[''],
       });
     }
    
   save(){
      console.log(this.myForm.value);
      this.formService.storeData(this.myForm.value);
      this.router.navigate(['resus_drug']);
   }

   ngAfterViewInit(){
    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('time').innerHTML =
      h + ":" + m + ":" + s;
      var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
  }
   }
    
}
 