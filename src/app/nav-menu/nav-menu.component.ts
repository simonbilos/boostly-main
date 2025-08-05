import { Component } from "@angular/core";

@Component({
  selector: "app-nav-menu",
  imports: [],
  templateUrl: "./nav-menu.component.html",
  styleUrl: "./nav-menu.component.css",
})
export class NavMenuComponent {
  warning: string = "Hey!";

  warningConsole() {
    console.log(this.warning);
  }
}
