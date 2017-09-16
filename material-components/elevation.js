export default (z) => (el) => {
  console.log('el', el);
  el.className += `mdc-elevation--z${z} mdc-elevation-transition`;
  return el;
};