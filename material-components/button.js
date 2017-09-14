import './vendor/bel@5.1.1.js';
import { ripple } from './vendor/material-components-web@0.20.0.js';

export const modifiers = {
  raised: 'raised', // a contained button that is elevated upon the surface.
  unelevated: 'unelevated', // a contained button that is flush with the surface.
  stroked: 'stroked', // adds border
  dense: 'dense', // compresses the button text to make it slightly smaller.
  compact: 'compact', // reduces the amount of horizontal padding in the button.
};

/**
 * Button Factory
 *
 * @export buttonFactory
 * @param {Array} modifiers array of material-components-web button modifiers
 * @returns button creation function that creates buttons with given modifiers
 */
export function buttonFactory(modifiers=[]) {
  return (props, ...children) => {
    console.log('props',typeof props, props instanceof HTMLElement);
    if(typeof props !== 'object' || props instanceof HTMLElement) {
      children.push(props);
      props = undefined;
    }
    const el = bel`
      <button class="mdc-button ${modifiers.map((mod) => `mdc-button--${mod}`).join(' ')}" ${props}>
        ${children}
      </button>
    `;
    ripple.MDCRipple.attachTo(el);
    return el;
  };
}

export const raisedButton = buttonFactory([modifiers.raised]);
export default buttonFactory();