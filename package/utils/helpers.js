import { createElement } from '../externals/bel.js';

export const createModifyingClasses = (prefix, props) => Object.keys(props)
  .filter((key) => props[key])
  .map(camelToSnakeCase)
  .map((mod) => `${prefix}--${mod}`)
  .join(' ');

export const camelToSnakeCase = (str) => str.replace(/([A-Z])/g, ($1) => "-"+$1.toLowerCase());

/**
 * standardElem
 * 
 * creates elements with signature stdElem(props)(children). Material components aware to
 * make BEM-style modifiers easy to use.
 * 
 * @param tag: tag string (ex: div, span, select, etc.)
 * @param baseClass: base mdc css class (ex: mdc-select, mdc-fab)
 * @param className: extra classes to add to default baseClass
 * @param modifiers: array of mdc modifiers to be applied to baseClass
 * @param init: function to do any initialization on the fresh component and return it
 */
export const standardElem = ({ tag, baseClass, className='', modifiers=[], init=(elem) => elem }) => (props={}) => (...children) => {
  const extraClasses = createModifyingClasses(baseClass,
    modifiers.reduce((memo, modifier) => {
      memo[modifier] = props[modifier];
      return memo;
    },{}),
  );
  return init(createElement(tag, Object.assign(processKeys(props), {
    className: `${className || ''} ${baseClass || ''} ${extraClasses || ''} ${props.className || ''}`
  }), children));
};

function processKeys(props){
  return Object.keys(props).reduce((memo, key) => {
    memo[camelToSnakeCase(key)] = props[key];
    return memo;
  },{});
}
