import { Component, computed, signal } from "@angular/core";

@Component({
  selector: "app-clients",
  imports: [],
  templateUrl: "./clients.component.html",
  styleUrl: "./clients.component.css",
})
export class ClientsComponent {
  private _cards = signal([
    { id: 1, content: "karta 1" },
    { id: 2, content: "karta 2" },
    { id: 3, content: "karta 3" },
  ]);

  private _currentIndex = signal<number>(0);

  currentIndex = computed(() => this._currentIndex());
  cards = computed(() => this._cards());

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
