import { Component } from "@angular/core";
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
} from "@angular/forms";

import { inject } from "@angular/core";

@Component({
  selector: "app-contact",
  imports: [ReactiveFormsModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent {
  private formBuilder = inject(FormBuilder);

  contactForm = this.formBuilder.group({
    userName: this.formBuilder.group({
      firstName: [""],
      lastName: [""],
    }),
    userEmail: [""],
    userPhone: [""],
    messageContent: [""],
  });

  // contactForm = new FormGroup({
  //   userEmail: new FormControl(""),
  //   userText: new FormControl(""),
  // });

  onSubmit() {
    console.warn(this.contactForm.value);
  }

  // updateValue() {
  //   this.contactForm.patchValue({
  //     userEmail: "kirbis@gmail.com",
  //     userText: {
  //       textObject: "pomoc s dizajnom",
  //       textContent: "ahoj, potrebujem helfnut",
  //     },
  //   });
  // }
}
