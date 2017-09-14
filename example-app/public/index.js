import yo from './externals/yo-yo.js';
import buttonDemo from './components/buttonDemo.js';
import textFieldDemo from './components/textFieldDemo.js';

const root = (state = {} , dispatch) => {
  return yo`
    <div>
      ${buttonDemo()}
      ${textFieldDemo()}
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
