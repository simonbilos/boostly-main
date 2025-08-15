import { Component, signal } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-partnership",
  imports: [],
  templateUrl: "./partnership.component.html",
  styleUrl: "./partnership.component.css",
})
export class PartnershipComponent {
  img = signal([
    "/assets/images/1.png",
    "/assets/images/2.png",
    "/assets/images/3.png",
    "/assets/images/4.png",
  ]);
}
