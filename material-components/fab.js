import { ripple } from './vendor/material-components-web@0.20.0.js';
import { standardElem } from './utils/helpers.js';

const fabIcon = standardElem({
  tag: 'span',
  baseClass: 'mdc-fab__icon',
});

const fabButton = standardElem({
  tag: 'button',
  baseClass: 'mdc-fab',
  className: 'material-icons',
  modifiers: [
    'mini',
    'exited',
  ],
});

export default ({label, ...props} = {}) => (iconName) => {
  const el = fabButton({
    ariaLabel: label,
    ...props,
  })(
    fabIcon()(iconName),
  );
  ripple.MDCRipple.attachTo(el);
  return el;
};
