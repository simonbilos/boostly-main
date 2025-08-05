import { Component } from "@angular/core";
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-contact",
  imports: [ReactiveFormsModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent {
  contactForm = new FormGroup({
    userEmail: new FormControl("", Validators.required),
    userText: new FormControl("", Validators.required),
  });

  onSubmit() {
    console.warn(this.contactForm.value);
  }

  updateValue() {
    this.contactForm.patchValue({
      userEmail: "kirbis@gmail.com",
      userText: "Dari sa",
    });
  }
}
