import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formG!: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.formG = this.fb.group({

      name: '',
      alterEgo: '',
      enemy: '',
      planet: '',
      weaksess: this.fb.array([]),
      powers: this.fb.array([])

    })
  }

  getControl(name: string){
    return this.formG.get(name) as AbstractControl
  }

  addWeaksess(){}

  getFormArray(name: string){
    return (this.formG.get(name) as FormArray).controls
  }

  submit(){
    console.log(this.formG.value);

  }
}
