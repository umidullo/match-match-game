import { Game } from './components/game/game';
import { ImageCategoryModel } from './models/image-category-model';
export class App {
  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.rootElement.appendChild(this.game.element);
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const ind = localStorage.getItem('animalType') === 'cat' ? 0 : 1;
    const ctg = categories[ind];
    const images = ctg.images.map((name) => `${ctg.category}/${name}`);
    this.game.newGame(images);
  }
}
