import {
  Component,
  signal,
  effect,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "app-nav-menu",
  imports: [],
  templateUrl: "./nav-menu.component.html",
  styleUrl: "./nav-menu.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuComponent {
  eachComponent = signal([
    { link: "#clients", id: "clients", content: "Klienti", class: "menu-item" },
    {
      link: "#our-services",
      id: "services",
      content: "Služby",
      class: "menu-item",
    },
    {
      link: "#partnership",
      id: "partnership",
      content: "Spolupráca",
      class: "menu-item",
    },
    {
      link: "#contact",
      id: "contact",
      content: "Kontakt",
      class: "contact-button",
    },
  ]);

  menuOpen = signal(false);
  scrolled = signal(false);

  constructor() {
    effect(() => {
      const onScroll = () => {
        this.scrolled.set(window.scrollY > 10);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    });
  }

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  scrollDiv(divName: string) {
    let elem = document.getElementById(divName);
    elem?.scrollIntoView();
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }
}
