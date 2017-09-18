import bel from './externals/bel.js';

export default (iconName) => {
  return bel`
    <i class="material-icons">${iconName}</i>
  `;
};
