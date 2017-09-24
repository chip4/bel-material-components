import yo from './externals/yo-yo.js';
import styled, { injectGlobal } from './externals/styled-elements.js';
import buttonDemo from './components/buttonDemo.js';
import textFieldDemo from './components/textFieldDemo.js';
import elevationDemo from './components/elevationDemo.js';
import iconDemo from './components/iconDemo.js';
import fabDemo from './components/fabDemo.js';
import toolbarDemo from './components/toolbarDemo.js';
import { elevationMixin } from '../../elevation.js';
import toolbar, { toolbarIconAnchor, toolbarTitle } from '../../toolbar.js';

// Toolbars explode when this is removed https://jsbin.com/diqifanice/edit?html,output
injectGlobal`
.mdc-toolbar__section {
  height: auto;
}
`;

const paper = (title) => (...children) => styled(bel`
  <div>
    ${styled(toolbar()(
      toolbarTitle()(title),
    ))`background-color: #888;`}
    ${styled.div`padding: 1em;`(children)}
  </div>
`)`
  ${elevationMixin(2)}
  margin: 2em;
`;

const root = (state = {} , dispatch) => {
  return yo`
    <div>
      ${paper('Toolbar')(toolbarDemo())}
      ${paper('Floating Action Button')(fabDemo())}
      ${paper('Icon')(iconDemo())}
      ${paper('Button')(buttonDemo())}
      ${paper('TextField')(textFieldDemo())}
      ${paper('Elevation')(elevationDemo())}
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
