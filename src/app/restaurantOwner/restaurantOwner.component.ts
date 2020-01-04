import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RestaurantOwner } from "../models/restaurantOwner";
@Component({
  selector: "app-restaurantOwner",
  templateUrl: "./restaurantOwner.component.html",
  styleUrls: ["./restaurantOwner.component.scss"]
})
export class RestaurantOwnerComponent implements OnInit {
  restaurantForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.restaurantForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      number: ["", Validators.required],
      restaurantName: ["", [Validators.required, Validators.minLength(3)]],
      address: ["", Validators.required],
      town: ["", [Validators.required, Validators.minLength(3)]],
      postalCode: ["", Validators.required],
      specialities: ["", Validators.required],
      delivery: ["", Validators.required],
      livreurs: ["", Validators.required]
    });
  }
  get email() {
    return this.restaurantForm.get("email");
  }
  get password() {
    return this.restaurantForm.get("password");
  }
  get lastName() {
    return this.restaurantForm.get("lastName");
  }
  get firstName() {
    return this.restaurantForm.get("firstName");
  }
  get number() {
    return this.restaurantForm.get("number");
  }
  get address() {
    return this.restaurantForm.get("address");
  }
  get town() {
    return this.restaurantForm.get("town");
  }
  get restaurantName() {
    return this.restaurantForm.get("restaurantName");
  }
  get specialities() {
    return this.restaurantForm.get("specialities");
  }
  get postalCode() {
    return this.restaurantForm.get("postalCode");
  }
  get delivery() {
    return this.restaurantForm.get("delivery");
  }
  get livreurs() {
    return this.restaurantForm.get("livreurs");
  }

  onSubmit({ value, valid }: { value: RestaurantOwner; valid: boolean }) {
    console.log(value, valid);
  }
}
