// TODO combine desktopSelect and default select into one implementation
// See: https://github.com/material-components/material-components-web/tree/master/packages/mdc-select
// for requirements

import { createElement } from './externals/bel.js';
import { standardElem } from './utils/helpers.js';
import { select } from './vendor/material-components-web@0.20.0.js';

export const desktopOption = ({value, disabled=false, ...props}={}) => standardElem({
  tag: 'li',
  baseClass: 'mdc-list-item',
})({ ...props, id: value, ariaDisabled: disabled, role: 'option', tabindex: '0'});

export const desktopOptGroup = ({ label, ...props }={}) => (...children) => standardElem({
  tag: 'ul',
  baseClass: 'mdc-list',
  className: 'mdc-simple-menu__items'
})(props)(desktopOption({disabled: true})(label), ...children);

const selectWrappingElem = ({ disabled=false, ...props}={}) => standardElem({
  tag: 'div',
  baseClass: 'mdc-select',
  modifiers: ['disabled'],
  init: (component) => {
    const mdcSelect = new select.MDCSelect(component)
    mdcSelect.listen('MDCSelect:change', () => {
      console.log('MDCSelect:change', mdcSelect.value);
    });
    return component;
  },
})({ ariaDisabled: disabled, role: 'listbox', tabindex: '0' });

export const desktopSelect = (props) => (...children) => selectWrappingElem(props)(
  createElement('span', { className: 'mdc-select__selected-text' }, ['Vegetables']),
  createElement('div', { className: 'mdc-simple-menu mdc-select__menu' }, [
    desktopOptGroup()(children)
  ]),
);

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
