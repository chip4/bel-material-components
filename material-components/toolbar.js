import bel from './externals/bel.js';
import { createModifyingClasses } from './utils/helpers.js';

export const toolbar = (props={}) => (...children) => bel`
  <header class="mdc-toolbar" ${props}>
    ${children}
  </header>
`;

export const toolbarRow = (props={}) => (...children) => bel`
  <div class="mdc-toolbar__row" ${props}>
    ${children}
  </div>
`;

export const toolbarSection = ({ alignStart=true, alignEnd, shrinkToFit, ...props }={}) => (...children) => {
  const extraClasses = createModifyingClasses('mdc-toolbar__section', {
    alignStart,
    alignEnd,
    shrinkToFit,
  });
  console.log('extraClasses', extraClasses);
  return bel`
    <div class="mdc-toolbar__section ${extraClasses}" ${props}>
      ${children}
    </div>
  `;
}

export const toolbarIconAnchor = ({ menu, ...props }={}) => (iconName) => {
  const extraClasses = createModifyingClasses('mdc-toolbar__icon', {
    menu,
  });
  return bel`
    <a class="material-icons mdc-toolbar__icon--menu ${extraClasses}" ${props}>${iconName}</a>
  `;
}

export const toolbarTitle = (props={}) => (...children) => bel`
  <span class="mdc-toolbar__title">${children}</span>
`;