import yo from '../externals/yo-yo.js';
import button, { raisedButton, buttonFactory, modifiers } from '../../../material-components/button/index.js';

export default () => {
  return yo`
    <div>
      ${button(yo`<i>Flat Button</i>`)}
      ${raisedButton('Raised Button')}
      ${button({ onclick: (event) => console.log(event) },'On Click')}
      ${buttonFactory([modifiers.compact, modifiers.dense ])('Compact and Dense')}
    </div>
  `;
};