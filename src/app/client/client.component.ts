import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  onSubmit({ value, valid }: { value: any; valid: boolean }) {
    console.log(value, valid);
  }
}
