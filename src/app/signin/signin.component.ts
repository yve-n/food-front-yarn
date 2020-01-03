import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  connectForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.connectForm = this.fb.group({
      account: this.fb.group({
        email: ["", Validators.required],
        password: ["", Validators.required]
      })
    });
  }

  onSubmit({ value, valid }: { value: connectForm; valid: boolean }) {
    console.log(value, valid);
  }
}
