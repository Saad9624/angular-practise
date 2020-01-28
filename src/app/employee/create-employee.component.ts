import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , FormBuilder , Validators} from '@angular/forms' ;


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup ;

  constructor(private fb : FormBuilder) { }

  // ngOnInit() {
  //   this.employeeForm = new FormGroup({
  //     fullName : new FormControl()  ,
  //     email : new FormControl() ,
  //     skills: new FormGroup({
  //         skillName:  new FormControl() ,
  //         experience: new FormControl() ,
  //         proficiency: new FormControl() ,

  //     })

  //   })
  // }

//another  way to create form using form builder

  ngOnInit(){
    this.employeeForm  = this.fb.group({
      fullName:['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]] ,
      email:[''] ,
      skills:this.fb.group({
        skillName: [''] ,
        experience:['Angular'] ,
        proficiency:['beginner'] ,
      })
    })
  }

  onSubmit() : void {
    console.log(this.employeeForm.value)
  }

  //loading data from hardcoded values
  // onLoadDataClick() : void {
  //  this.employeeForm.setValue({
  //    fullName : 'Saad' ,
  //    email :'Saadsheikh@gmail.com' ,
  //    skills :{
  //     skillName :'JAVA' ,
  //     experience :'1.5 Years' ,
  //     proficiency:'beginner'
  //    }
  //  }) ;
  // }

   onLoadDataClick() : void {
   this.logKeyValuePairs(this.employeeForm)
  }

  

  getkeyandvalue(group : FormGroup):void{
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key) ;
      if(abstractControl instanceof FormGroup){
        this.getkeyandvalue(abstractControl);

      }
      else{
        console.log('Key = ' + key + ' Value =' + abstractControl.value)
      }
    })
  }

  //printvaluesandkeyss
  logKeyValuePairs(group : FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key) ;
      if(abstractControl instanceof FormGroup){
        this.getkeyandvalue(abstractControl);

      }
      else{
        console.log('Key = ' + key + ' Value =' + abstractControl.value)
      }
    })
  }

  onUpdateDataClick(): void{
    this.employeeForm.patchValue({
      fullName:'Sheikh' ,
      email:'Sheikh@gmail.com' ,
      skills :{
        proficiency:'Intermediate'
       }
    })
  }

}
