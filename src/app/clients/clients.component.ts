import {
  Component,
  computed,
  signal,
  ChangeDetectionStrategy,
  HostListener,
} from "@angular/core";
import { ClientCardComponent } from "../client-card/client-card.component";

@Component({
  selector: "app-clients",
  imports: [ClientCardComponent],
  templateUrl: "./clients.component.html",
  styleUrl: "./clients.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsComponent {
  private _cards = signal([
    { id: 1, content: "assets/videos/comingsoon.mp4" },
    { id: 2, content: "assets/videos/comingsoon.mp4" },
    { id: 3, content: "assets/videos/comingsoon.mp4" },
  ]);

  private _currentIndex = signal<number>(0);
  private _isMobile = signal(window.innerWidth < 1000);

  currentIndex = computed(() => this._currentIndex());
  cards = computed(() => this._cards());
  isMobile = computed(() => this._isMobile());

  @HostListener("window:resize")
  onResize() {
    this._isMobile.set(window.innerWidth < 1000);
  }

  prevCard() {
    this._currentIndex.update((i) =>
      i <= 0 ? this._cards().length - 1 : i - 1
    );
  }

  nextCard() {
    this._currentIndex.update((i) =>
      i >= this._cards().length - 1 ? 0 : i + 1
    );
  }
}
