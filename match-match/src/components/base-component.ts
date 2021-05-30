export class BaseComponent {
  readonly element: HTMLElement;

  constructor(
    tag: keyof HTMLElementTagNameMap = 'div',
    stylesClassName: string[] = []
  ) {
    this.element = document.createElement(tag);
    this.element.classList.add(...stylesClassName);
  }

  create = (
    el: string,
    classNames: string,
    child: any,
    parent: HTMLElement,
    ...dataAttr: any
  ): HTMLElement => {
    let element: any = null;

    try {
      element = document.createElement(el);
    } catch (error) {
      throw new Error('Unable to create HTMLElement! Give a proper tag name');
    }

    if (classNames) element.classList.add(...classNames.split(' '));

    if (child && Array.isArray(child)) {
      child.forEach(
        (childElement) => childElement && element.append(childElement)
      );
    } else if (child && typeof child === 'object') {
      element.append(child);
    } else if (child && typeof child === 'string') {
      element.innerHTML = child;
    }

    if (parent) parent.append(element);

    if (dataAttr.length) {
      dataAttr.forEach(([attrName, attrValue]: Array<string>) => {
        if (attrValue === '') element.setAttribute(attrName, '');

        if (
          attrName.match(
            /value|onchange|id|name|placeholder|cols|rows|role|aria|src|alt|title|autocorrect|spellcheck/
          )
        ) {
          element.setAttribute(attrName, attrValue);
        } else {
          element.dataset[attrName] = attrValue;
        }
      });
    }

    return element;
  };
}
