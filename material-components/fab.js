import bel from './externals/bel.js';
import { ripple } from './vendor/material-components-web@0.20.0.js';

export default ({mini, exited, label} = {}) => (iconName) => {
  function extraClasses(){
    const prefix = 'mdc-fab--';
    let mods = [];
    if(mini){
      mods.push(`${prefix}mini`)
    }
    // TODO exited isn't working 2017-9-18
    if(exited){
      mods.push(`${prefix}exited`)
    }
    return mods.join(' ');
  }
  const el = bel`
    <button class="mdc-fab material-icons ${extraClasses()}" aria-label="${label}">
      <span class="mdc-fab__icon">
        ${iconName}
      </span>
    </button>
  `;
  ripple.MDCRipple.attachTo(el);
  return el;
};
