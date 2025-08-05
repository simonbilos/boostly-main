import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { Inject } from "@angular/core";

@Component({
  selector: "app-root",
  imports: [ContactComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "boostly-main";
}
