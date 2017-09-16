import yo from '../externals/yo-yo.js';
import withElevation from '../../../material-components/elevation.js';

const paper = (...children) => withElevation(8)(bel`<div>${children}</div>`);

export default () => {
  return yo`
    <div>
      ${paper(
        yo`<span> Am I Paper? </span>`
      )}
    </div>
  `;
};