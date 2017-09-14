import 'https://ipfs.io/ipfs/QmXgdfrhHE1BibXcZ6QWS7bqNvWrE2nCWtDeemPK1csqix/vendor/bel@5.1.1.js';
import { raisedButton } from 'https://ipfs.io/ipfs/QmXgdfrhHE1BibXcZ6QWS7bqNvWrE2nCWtDeemPK1csqix/button.js';
import textField from 'https://ipfs.io/ipfs/QmXgdfrhHE1BibXcZ6QWS7bqNvWrE2nCWtDeemPK1csqix/text-field.js';
import subcomponent from './subcomponent.js';

const root = (state = {} , dispatch) => {
  return bel`
    <div>
      ${raisedButton('Button')}
      ${textField({ label: 'Text Field' })}
      ${subcomponent()}
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
