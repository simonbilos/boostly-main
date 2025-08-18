import { Component, signal } from "@angular/core";

@Component({
  selector: "app-our-services",
  imports: [],
  templateUrl: "./our-services.component.html",
  styleUrl: "./our-services.component.css",
})
export class OurServicesComponent {
  img = signal([
    {
      label: "Správa sociálnych sietí",
      picture: "/assets/images/social_media.jpeg",
    },
    { label: "Tvorba videí", picture: "/assets/images/video_make.jpg" },
    { label: "Tvorba webstránok", picture: "/assets/images/development.jpeg" },
  ]);
}
