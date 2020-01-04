import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      number: ["", Validators.required],
      restaurantName: ["", Validators.required],
      address: ["", Validators.required],
      town: ["", Validators.required],
      postalCode: ["", Validators.required],
      specialities: ["", Validators.required],
      delivery: ["", Validators.required],
      livreurs: ["", Validators.required]
    });
  }

  onSubmit({ value, valid }: { value: Validators; valid: boolean }) {
    console.log(value, valid);
  }
}
