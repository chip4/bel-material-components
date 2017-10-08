import { standardElem } from './utils/helpers.js';

export const optGroup = standardElem({
  tag: 'optgroup',
});

export const option = standardElem({
  tag: 'option',
});

export default standardElem({
  tag: 'select',
  baseClass: 'mdc-select',
});