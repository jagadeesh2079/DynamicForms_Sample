import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';
import { RadioQuestion } from './question-radio';
import { CalnderQuestion } from './question-calnder';
import { CheckboxQuestion } from './question-checkbox';



@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: ' Jag',
        required: true,
        cssClass:'col-md-6',
        order: 1
      }),

      new TextboxQuestion({
        key: 'lastName',
        label: 'Last name',
        value: 'P',
        required: true,
        cssClass:'col-md-6',
        order: 2
      }),


      new DropdownQuestion({
        key: 'title',
        label: 'Ttile',
        options: [
          {key: 'Mr',  value: 'Mr',checked:true},
          {key: 'Ms',  value: 'Ms',checked:true},
        ],
        cssClass:'col-md-6',
        order: 3
      }),

      new RadioQuestion({
        key:'gender',
        label:'Gender',
        type: 'radio',
        options: [
          {key: 'Male',  value: 'Male', checked:false},
          {key: 'Female',  value: 'Female', checked:false}
        ],
        cssClass:'col-md-6',
        order: 4
      })
      ,


     new CalnderQuestion({
        key:'dateofbith',
        label:'DOB',
        order:5,
        value: '',
        type:'date' 
      }),

      new TextboxQuestion({
        key: 'Address1',
        label: 'Addess1',
         required:true,
        order: 6
      }),

      new TextboxQuestion({
        key: 'Address2',
        label: 'Addess 2',
        required:false,
        order: 7
      }),

      new TextboxQuestion({
        key: 'Address3',
        label: 'Addess 3',
        required:false,
        order: 8
      }),

      new CheckboxQuestion({
        key: 'citizen',
        label: 'Is Citizen',
        type:'checkbox' ,
        value:'',
        order: 9
      }),

     
      new DropdownQuestion({
        key: 'country',
        label: 'Country',
        show:'true',
        options: [
          {key: 'Malaysia',  value: 'Malaysia' ,checked:true},
          {key: 'India',  value: 'India',checked:true},
          {key: 'Singapore',  value: 'Singapore',checked:true},
          {key: 'Usa',  value: 'Usa',checked:true}
        ],
        order: 10
      }),
     

    ];


    


    return of(questions.sort((a, b) => a.order - b.order));
  }
}
