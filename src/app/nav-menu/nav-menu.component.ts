import { Component } from "@angular/core";

@Component({
  selector: "app-nav-menu",
  imports: [],
  templateUrl: "./nav-menu.component.html",
  styleUrl: "./nav-menu.component.css",
})
export class NavMenuComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollDiv(divName: string) {
    let elem = document.getElementById(divName);
    elem?.scrollIntoView();
  }
}
