import bel, { createElement } from './externals/bel.js';
import { createModifyingClasses } from './utils/helpers.js';

export const toolbar = ({ className, ...props}={}) => (...children) => bel`
  <header class="mdc-toolbar ${className}" ${props}>
    ${children}
  </header>
`;

export const toolbarRow = (props={}) => (...children) => bel`
  <div class="mdc-toolbar__row" ${props}>
    ${children}
  </div>
`;

export const toolbarSection = ({ alignStart, alignEnd, shrinkToFit, ...props }={}) => (...children) => {
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

const toolbarIcon = (tag) => ({ menu, ...props }={}) => (...children) => {
  const extraClasses = createModifyingClasses('mdc-toolbar__icon', {
    menu,
  });
  return createElement(tag, Object.assign(props, {
    className: `material-icons mdc-toolbar__icon ${extraClasses}`,
  }), children);
}

export const toolbarIconAnchor = toolbarIcon('a');
export const toolbarIconButton = toolbarIcon('button');
export const toolbarIconSpan = toolbarIcon('span');

export const toolbarTitle = (props={}) => (...children) => bel`
  <span class="mdc-toolbar__title">${children}</span>
`;

export default (props={}) => (...children) => toolbar(props)(
  toolbarRow()(
    toolbarSection({alignStart: true})(
      ...children
    )
  ),
);