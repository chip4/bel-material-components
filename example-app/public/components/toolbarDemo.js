import bel from '../externals/yo-yo.js';
import styled from '../externals/styled-elements.js';
import { toolbar, toolbarRow, toolbarSection, toolbarIconAnchor, toolbarTitle } from '../../../material-components/toolbar.js';
import { elevationMixin } from '../../../material-components/elevation.js';

const root = styled.div`
  & > * {
    margin: 1em;
  }
`;

export default () => bel`
  ${root(
    toolbar()(
      toolbarRow()(
        toolbarSection()(
          toolbarIconAnchor({ menu: true })('menu'),
          toolbarTitle()('Title'),
        ),
      ),
    ),
  )}
`;