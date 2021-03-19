declare module '*.json';
declare module '*.png' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module '*.jpg';
