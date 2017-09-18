import yo from './externals/yo-yo.js';
import styled, { injectGlobal } from './externals/styled-elements.js';
import buttonDemo from './components/buttonDemo.js';
import textFieldDemo from './components/textFieldDemo.js';
import elevationDemo from './components/elevationDemo.js';
import iconDemo from './components/iconDemo.js';
import { elevationMixin } from '../../material-components/elevation.js';

const paper = styled.div`
  ${elevationMixin(2)}
  padding: 1em;
  margin: 1em;
`;

const root = (state = {} , dispatch) => {
  return yo`
    <div>
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
