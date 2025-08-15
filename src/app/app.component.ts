import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ClientsComponent } from "./clients/clients.component";

@Component({
  standalone: true,
  selector: "app-root",
  imports: [RouterOutlet, ClientsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "boostly-main";
}
