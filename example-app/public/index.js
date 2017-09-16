import yo from './externals/yo-yo.js';
import styled from './externals/styled-elements.js';
import buttonDemo from './components/buttonDemo.js';
import textFieldDemo from './components/textFieldDemo.js';
import elevationDemo from './components/elevationDemo.js';
import withElevation, { elevationMixin, elevationTransitionMixin } from '../../material-components/elevation.js';

const paper = (...children) => styled(withElevation(2)(yo`<div>${children}</div>`))`
  padding: 1em;
  margin: 1em;
`;

const newPaper = styled.div`
  padding: 1em;
  margin: 1em;
  ${elevationMixin(4)}
  ${elevationTransitionMixin()}
  &:active {
    ${elevationMixin(8)}
  }
`;

const root = (state = {} , dispatch) => {
  return yo`
    <div>
      ${newPaper(buttonDemo())}
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
