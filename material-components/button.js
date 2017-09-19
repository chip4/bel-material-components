import './vendor/bel@5.1.1.js';
import { ripple } from './vendor/material-components-web@0.20.0.js';

export const button = (props={}) => (...children) => {
  const extraClasses = [
    'raised',
    'unelevated',
    'stroked',
    'dense',
    'compact',
  ].filter((mod) => props[mod])
    .map((mod) => `mdc-button--${mod}`)
    .join(' ');
  const el = bel`
    <button class="mdc-button ${extraClasses}" ${props}>
      ${children}
    </button>
  `;
  ripple.MDCRipple.attachTo(el);
  return el;
};

export const raisedButton = (props) => (...children) => button({ raised: true })(...children);
export default button;