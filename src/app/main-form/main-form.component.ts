import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  addMemberItemInputForm = {} as FormGroup;
	isValidFormSubmitted: boolean | null = null;
  public data: string[] = ['Food', 'Household', 'Furniture', 'Electronic'];
  showTable = false;
  getFinalValue: any;
  showFinalFormValue = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createAddMemberItemInputForm();
  }

  createAddMemberItemInputForm(){
    this.addMemberItemInputForm = this.formBuilder.group({
			memberName: ['', Validators.required],
      itemType: ['', Validators.required],
			itemDetails: this.formBuilder.array(
				[this.createEmpFormGroup()],
				[Validators.required, Validators.maxLength(5)])
		});
  }

  get memberName() {
		return this.addMemberItemInputForm.get('memberName');
	}

  get itemType() {
		return this.addMemberItemInputForm.get('itemType');
	}

	get itemDetails(): FormArray {
		return this.addMemberItemInputForm.get('itemDetails') as FormArray;
	}

  createEmpFormGroup(){
		return this.formBuilder.group({
			itemName: ['', [Validators.required]],
			quantity: ['', [Validators.required, Validators.max(5)]],
			price: ['', [Validators.required]]
		})
	}

  changeType(event: any){
    console.log(event)
    this.showTable = true;
  }

  retureTotal(item: any){
    let getValue = item.value;
    let firstValue = getValue.quantity !== '' ? getValue.quantity : 0;
    let secondValue = getValue.price !== '' ? getValue.price : 0;
    return firstValue * secondValue;
  }

	addEmployee() {
		let newMem = this.createEmpFormGroup();
		this.itemDetails.push(newMem);
	}

	deleteEmployee(i: number) {
		this.itemDetails.removeAt(i);
	}

	onFormSubmit() {
		this.isValidFormSubmitted = false;
		if(this.addMemberItemInputForm.invalid){
			return;
		}
		this.isValidFormSubmitted = true;
    let formValue = this.addMemberItemInputForm.value;
    this.showValue(formValue)
    console.log(formValue);
	}

  showValue(value: any){
    this.getFinalValue = value;
    this.showFinalFormValue = true;
    this.resetTeamForm();
  }

	resetTeamForm() {
		this.addMemberItemInputForm.reset();
	}

}
