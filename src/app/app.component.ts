import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { ClientsComponent } from "./clients/clients.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  standalone: true,
  selector: "app-root",

  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [NavMenuComponent, ClientsComponent, ContactComponent],
})
export class AppComponent {
  title = "boostly-main";
}
