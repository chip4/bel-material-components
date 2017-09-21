import yo from './externals/yo-yo.js';
import styled, { injectGlobal } from './externals/styled-elements.js';
import buttonDemo from './components/buttonDemo.js';
import textFieldDemo from './components/textFieldDemo.js';
import elevationDemo from './components/elevationDemo.js';
import iconDemo from './components/iconDemo.js';
import fabDemo from './components/fabDemo.js';
import toolbarDemo from './components/toolbarDemo.js';
import { elevationMixin } from '../../material-components/elevation.js';

// Toolbars explode when this is removed https://jsbin.com/diqifanice/edit?html,output
injectGlobal`
.mdc-toolbar__section {
  height: auto;
}
`;

const paper = styled.div`
  ${elevationMixin(2)}
  padding: 1em;
  margin: 1em;
`;

const root = (state = {} , dispatch) => {
  return yo`
    <div>
      ${paper(toolbarDemo())}
      ${paper(fabDemo())}
      ${paper(iconDemo())}
      ${paper(buttonDemo())}
      ${paper(textFieldDemo())}
      ${paper(elevationDemo())}
    </div>
  `;
};

const el = root();

/*
setTimeout(() => {
  yo.update(el, root({name: 'Melanie'}))
}, 1000);
*/

document.body.appendChild(el);
