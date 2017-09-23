import { standardElem } from './utils/helpers.js';

export const toolbar = standardElem({
  tag: 'header',
  baseClass: 'mdc-toolbar',
});

export const toolbarRow = standardElem({
  tag: 'div',
  baseClass: 'mdc-toolbar__row',
});

export const toolbarSection = standardElem({
  tag: 'div',
  baseClass: 'mdc-toolbar__section',
  modifiers: [
    'alignStart',
    'alignEnd',
    'shrinkToFit',
  ],
});

const toolbarIcon = (tag) => standardElem({
  tag,
  className: 'material-icons',
  baseClass: 'mdc-toolbar__icon',
  modifiers: [
    'menu',
  ],
});

export const toolbarIconAnchor = toolbarIcon('a');
export const toolbarIconButton = toolbarIcon('button');
export const toolbarIconSpan = toolbarIcon('span');

export const toolbarTitle = standardElem({
  tag: 'span',
  baseClass: 'mdc-toolbar__title',
});

export default (props={}) => (...children) => toolbar(props)(
  toolbarRow()(
    toolbarSection({alignStart: true})(
      ...children
    )
  ),
);