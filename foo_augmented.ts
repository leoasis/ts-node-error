import IFoo from './foo';

declare module './foo' {
  interface IFoo {
    b(c: number): number
  }
}