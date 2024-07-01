export default Carousel3D;
declare class Carousel3D extends HTMLElement {
  static observedAttributes: string[];
  static sheet: CSSStyleSheet;
  static debounce: (func: (...args: any[]) => any, timeout: number) => void;
  renderOverlay: () => void;
  renderOut: () => void;
  rad: number;
  connectedCallback(): void;
  perspectiveContainer: Element | HTMLDivElement;
  itemsContainer: Element | HTMLElement;
  overlay: Element | HTMLDivElement;
  items: NodeListOf<Element>;
  ignoredElems: NodeListOf<Element>;
  styleElems: NodeListOf<HTMLStyleElement>;
  anchorElem: Element;
  numSides: number;
  rotDeg: number;
  firstRender: boolean;
  rotateMultiplier: number;
  renderOutDebounced: (() => void) | (() => void) | ((...args: any[]) => void);
  resizeObserver: ResizeObserver;
  mutationObserver: MutationObserver;
  attributeChangedCallback(name: string, oldVal: any, newVal: any): void;
  disconnectedCallback(): void;
}
