import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Client } from "../models/client";
@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"]
})
export class ClientComponent implements OnInit {
  clientForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.clientForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }
  get email() {
    return this.clientForm.get("email");
  }
  get password() {
    return this.clientForm.get("password");
  }
  get lastName() {
    return this.clientForm.get("lastName");
  }
  get firstName() {
    return this.clientForm.get("firstName");
  }

  onSubmit({ value, valid }: { value: Client; valid: boolean }) {
    console.log(value, valid);
  }
}
