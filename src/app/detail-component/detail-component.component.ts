import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent {

  @Input() rowData: any;
  

  myform: FormGroup;
  title: string = "Add";

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.initialize();

    if (this.rowData) {
      this.title = "Edit";
      this.setControlValues();
    }

    console.log(this.rowData);
  }

  setControlValues() {
    this.myform.controls['name'].setValue(this.rowData.name);
    this.myform.controls['userName'].setValue(this.rowData.userName);
    this.myform.controls['email'].setValue(this.rowData.email);
    this.myform.controls['address'].setValue(this.rowData.address.suite);
    this.myform.controls['phone'].setValue(this.rowData.address.phone);
    this.myform.controls['website'].setValue(this.rowData.website);
  }


  initialize() {

    this.myform = this.fb.group({

      name: ["", Validators.required],
      userName: ["", Validators.required],
      email: ["", Validators.required],
      address: [""],
      phone: ["", Validators.required],
      website: [""],

    });
  }

  submitForm() {

    let obj = this.myform.value;

    console.log(obj);

  }

}
