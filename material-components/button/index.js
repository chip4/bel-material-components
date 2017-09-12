import 'https://wzrd.in/standalone/bel@latest';
import { ripple } from '../vendor/material-components-web.js';

console.log("ripple",ripple);

export default () => {
  const el = bel`
    <button class="mdc-button mdc-button--raised">
      Raised button
    </button>
  `;
  ripple.MDCRipple.attachTo(el);
  return el;
};