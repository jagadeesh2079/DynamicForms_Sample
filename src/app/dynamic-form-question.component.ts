import {Component, Input, input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {QuestionBase} from './question-base';

@Component({
  standalone: true,
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  imports: [CommonModule, ReactiveFormsModule],
})
export class DynamicFormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() questions: QuestionBase<string>[]| null = [];
  @Input() form!: FormGroup;
  isCountryShow=true;
  
   get isValid() {
    return this.form.controls[this.question.key].valid;
  }
  onPaymentMethodChange(data:string){
    this.questions?.forEach((item,index)=>{
      if(item.controlType === 'radio')
      {
        var genm = item.options.find(x => x.key=== 'Male');
        var genf = item.options.find(x => x.key=== 'Female');
        if(genf && genm){
          genf.checked= data !== 'Mr'? true: false;
          genm.checked= data === 'Mr'? true: false;
        }
      }
    });

  }
  onCheckBoxChange(){
    this.questions?.forEach((item,index)=>{
      if(item.controlType === 'dropdown' && item.key==='country')
      {
        item.show = item.show ==='true'? 'false': 'true';
        this.isCountryShow = !this.isCountryShow;
      }
    });
  }
   onDate(event:any) {
    console.log(event ,'HI');
    if(new Date() < new Date(event)){
      alert('selected date can not be greater than or equal to current date !!');
    }
  }
}
