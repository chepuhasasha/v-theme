interface App {
  directive: (
    name: string,
    cb: (el: HTMLElement, binding: { value: string }) => void
  ) => void;
}