import { textfield } from './vendor/material-components-web@0.20.0.js';
import { standardElem } from './utils/helpers.js';

function labelEl({ label, value, placeholder }) {
  return (!label) ? '' : standardElem({
    tag: 'span',
    baseClass: "mdc-textfield__label",
    modifiers: [
      'floatAbove',
    ],
  })({
    floatAbove: value || placeholder,
  })(label);
}

function inputEl({ multiline, ...props }) {
  if(multiline){
    return standardElem({
      tag: 'textarea',
      baseClass: 'mdc-textfield__input',
    })(Object.assign(props, multiline))(props.value);
  } else {
    return standardElem({
      tag: 'input',
      baseClass: 'mdc-textfield__input',
    })(props)();
  }
}

const labelWrap = standardElem({
  tag: 'label',
  baseClass: 'mdc-textfield',
  modifiers: [
    'disabled',
    'upgraded',
    'multiline',
    'fullwidth',
    'box',
  ],
});

/**
 * TextField
 * 
 * props: {
 *  disabled: bool
 *  value: string // input value
 *  label: string // label text
 *  oninput: function // called on user input for each keypress with event
 *  placeholder: string
 *  multiline: bool | {rows, cols} // is textField multiline, optionally pass rows and cols
 *  fullWidth: bool // is fullwidth textField
 * }
 * 
 * TODO:
 * [] help text
 * [] validation
 * [x] oninput
 * [x] placeholder - bug with label overlapping placeholder text after focus
 */
export default (props={}) => {
  const modifiers = [];
  const el = labelWrap(props)(
    inputEl(props),
    labelEl(props),
    props.box ? bel`<div class="mdc-textfield__bottom-line"></div>` : '',
  );
  textfield.MDCTextfield.attachTo(el);
  return el;
};