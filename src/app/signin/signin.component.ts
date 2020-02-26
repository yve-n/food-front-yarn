import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SignIn } from "../models/signin";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  get email() {
    return this.signinForm.get("email");
  }

  get password() {
    return this.signinForm.get("password");
  }

  onSubmit({ value, valid }: { value: SignIn; valid: boolean }) {
    console.log(value, valid);
  }
}
