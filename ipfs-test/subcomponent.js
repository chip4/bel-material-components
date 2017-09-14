import 'https://ipfs.io/ipfs/QmXgdfrhHE1BibXcZ6QWS7bqNvWrE2nCWtDeemPK1csqix/vendor/bel@5.1.1.js';
import button from 'https://ipfs.io/ipfs/QmXgdfrhHE1BibXcZ6QWS7bqNvWrE2nCWtDeemPK1csqix/button.js';
import textField from 'https://ipfs.io/ipfs/QmXgdfrhHE1BibXcZ6QWS7bqNvWrE2nCWtDeemPK1csqix/text-field.js';

export default () => bel`
  <div>
    ${button('Flat Button')}
    ${textField({ label: 'Subcomponent' })}
  </div>
`;