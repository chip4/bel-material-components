import { ripple } from './vendor/material-components-web@0.20.0.js';
import { standardElem } from './utils/helpers.js';

export const button = standardElem({
  tag: 'button',
  baseClass: 'mdc-button',
  modifiers: [
    'raised',
    'unelevated',
    'stroked',
    'dense',
    'compact',
  ],
  init: (el) => {
    ripple.MDCRipple.attachTo(el);
    return el;
  },
});

export const raisedButton = (props) => (...children) => button({ raised: true })(...children);
export default button;