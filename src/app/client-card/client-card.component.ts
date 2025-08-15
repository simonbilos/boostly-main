import { Component, input } from "@angular/core";

@Component({
  selector: "app-client-card",
  imports: [],
  templateUrl: "./client-card.component.html",
  styleUrl: "./client-card.component.css",
})
export class ClientCardComponent {
  content = input<string>();
}
