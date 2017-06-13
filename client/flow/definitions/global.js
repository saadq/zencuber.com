declare module CSSModule {
  declare var exports: { [key: string]: string };
}

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
}
