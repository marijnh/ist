declare class Failure extends Error {}

declare const ist: {
  (a: boolean): void
  <T>(a: T, b: T, cmp?: string | ((a: T, b: T) => boolean)): void
  Failure: typeof Failure
  throws: (f: () => void, expected: null | RegExp | string | ((error: any) => boolean)) => void
}

export default ist
