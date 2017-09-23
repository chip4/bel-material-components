import yo from '../externals/yo-yo.js';
import styled from '../externals/styled-elements.js';
import icon from '../../../material-components/icon.js';

export default () => yo`
    <div>
      ${Array.from(new Array(20), () => icon()('face'))}
    </div>
  `;