import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-connecter',
  templateUrl: './connecter.component.html',
  styleUrls: ['./connecter.component.scss']
})
export class ConnecterComponent implements OnInit {

  connectForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.connectForm = this.fb.group({
      account: this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
    });
  }
  onSubmit({ value, valid }: { value: connectForm, valid: boolean }) {
    console.log(value, valid);
  }
}
