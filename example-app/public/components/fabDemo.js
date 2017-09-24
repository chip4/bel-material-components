import yo from '../externals/yo-yo.js';
import styled from '../externals/styled-elements.js';
import fab from '../../../fab.js';

const fob = styled(fab()('motorcycle'))`
  background-color: blue;
`;

export default () => yo`
    <div>
      ${fob}
      ${fab({ label: 'Party' })('hot_tub')}
      ${fab({ label: 'Face' })('face')}
      ${fab({ label: 'Add' })('add')}
      ${fab({ mini: true })('fingerprint')}
      ${fab({ exited: true })('gavel')}
    </div>
  `;