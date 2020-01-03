import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-Client',
  templateUrl: './Client.component.html',
  styleUrls: ['./Client.component.scss']
})
export class ClientComponent implements OnInit {
 
  clientForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.clientForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ]
   });
  }
  onSubmit({ value, valid }: { value: clientForm, valid: boolean }) {
    console.log(value, valid);
  }  
  
}
