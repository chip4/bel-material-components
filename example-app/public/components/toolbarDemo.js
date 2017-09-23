import bel from '../externals/yo-yo.js';
import styled from '../externals/styled-elements.js';
import simpleToolbar, {
  toolbar,
  toolbarRow,
  toolbarSection,
  toolbarIconAnchor,
  toolbarIconSpan,
  toolbarIconButton,
  toolbarTitle
} from '../../../material-components/toolbar.js';
import { elevationMixin } from '../../../material-components/elevation.js';

const root = styled.div`
  & > * {
    margin: 1em;
  }
`;

const complexSection = (props) => toolbarSection(props)(
  toolbarIconButton({ menu: true })('menu'),
  toolbarIconSpan({ menu: true })('menu'),
  toolbarTitle()('Title'),
  toolbarIconSpan()('favorite'),
  toolbarIconAnchor()('hot_tub'),
);

export default () => bel`
  ${root(
    simpleToolbar()(
      toolbarIconAnchor({ menu: true })('menu'),
      toolbarTitle()('Title'),
    ),
    toolbar()(
      toolbarRow()(
        complexSection({ alignStart: true }),
        complexSection(),
        complexSection({ alignEnd: true }),
      ),
    ),
  )}
`;