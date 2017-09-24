import yo from '../externals/yo-yo.js';
import styled from '../externals/styled-elements.js';
import withElevation, { elevationMixin, elevationTransitionMixin } from '../../../package/elevation.js';

const paper = (...children) => withElevation(8)(bel`<div>${children}</div>`);

const newPaper = styled.div`
  padding: 1em;
  margin: 1em;
  ${elevationMixin(4)}
  ${elevationTransitionMixin()}
  &:active {
    ${elevationMixin(8)}
  }
`;

export default () => {
  return yo`
    <div>
      ${paper(
        yo`<span> Am I Paper? </span>`
      )}
      ${newPaper(
        yo`<b>Click Me</b>`
      )}
    </div>
  `;
};