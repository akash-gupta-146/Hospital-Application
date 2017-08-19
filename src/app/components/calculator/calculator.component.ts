import { Component, OnInit, Input } from '@angular/core';
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
        weight: [''],
        prescriber:[''],
       });
      //  ,[Validators.required, Validators.minLength(1)]
     }
    
   save(){
      console.log(this.myForm.value);
      this.formService.storeData(this.myForm.value);
      this.router.navigate(['resus_drug']);
   }

  //  next(){
  //      this.router.navigate(['resus_drug']);
  //  } 
    
}
 