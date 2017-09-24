import yo from '../externals/yo-yo.js';
import button, { raisedButton } from '../../../package/button.js';

const cdButton = (props={}) => (...children) => button(Object.assign(props, { compact: true, dense: true }))(...children);

export default () => {
  return yo`
    <div>
      ${button()(yo`<i>Flat Button</i>`)}
      ${raisedButton()('Raised Button')}
      ${button({ onclick: (event) => console.log(event) })('On Click')}
      ${button({ compact: true, dense: true })('Compact and Dense')}
      ${button({ stroked: true })('Stroked')}
    </div>
  `;
};
/*
    */