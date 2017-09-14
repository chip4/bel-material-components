import './vendor/bel@5.1.1.js';
import { textfield } from './vendor/material-components-web@0.20.0.js';

function rootClasses({ disabled, value, label, multiline, fullWidth, box }){
  const modifiers = [];
  if(disabled){
    modifiers.push('disabled');
  }
  if(value && label){ //TODO 0 should be true
    modifiers.push('upgraded')
  }
  if(multiline){
    modifiers.push('multiline')
  }
  if(fullWidth){
    modifiers.push('fullwidth')
  }
  if(box){
    modifiers.push('box')
  }
  return modifiers.map((mod) => `mdc-textfield--${mod}`).join(' ');
}

function labelEl({ label, value, placeholder }) {
  return (!label) ? '' : bel`
    <span class="mdc-textfield__label ${value || placeholder ? 'mdc-textfield__label--float-above' : ''}">${label}</span>
  `;
}

function inputEl({ disabled, value='', multiline, placeholder='', oninput }) {
  const disabledAttr = disabled ? 'disabled':'';
  if(multiline){
    return bel`
      <textarea class="mdc-textfield__input"
        rows=${multiline.rows}
        cols=${multiline.columns}
        placeholder=${placeholder}
        >
        ${value}
      </textarea>
    `;
  } else {
    return bel`
      <input type="text"
        class="mdc-textfield__input"
        placeholder=${placeholder}
        value=${value}
        oninput=${oninput}
        ${disabledAttr}
      />
    `;
  }
}

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
  const el = bel`
    <label class="mdc-textfield ${rootClasses(props)}">
      ${inputEl(props)}
      ${labelEl(props)}
      ${props.box ? bel`<div class="mdc-textfield__bottom-line"></div>` : ''}
    </label>
  `;
  textfield.MDCTextfield.attachTo(el);
  return el;
};