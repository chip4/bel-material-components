import yo from './externals/yo-yo.js';
import buttonDemo from './components/buttonDemo.js';

const root = (state = {} , dispatch) => {
  return yo`
    <div>
      ${buttonDemo()}
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
