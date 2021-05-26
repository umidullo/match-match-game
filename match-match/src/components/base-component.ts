export class BaseComponent {
  readonly element: HTMLElement;

  constructor(
    tag: keyof HTMLElementTagNameMap = 'div',
    stylesClassName: string[] = []
  ) {
    this.element = document.createElement(tag);
    this.element.classList.add(...stylesClassName);
  }
}
