import { createElement } from '../externals/bel.js';

export const createModifyingClasses = (prefix, props) => Object.keys(props)
  .filter((key) => props[key])
  .map(camelToSnakeCase)
  .map((mod) => `${prefix}--${mod}`)
  .join(' ');

export const camelToSnakeCase = (str) => str.replace(/([A-Z])/g, ($1) => "-"+$1.toLowerCase());

export const standardElem = ({ tag, baseClass, className='', modifiers=[], init=(x) => x }) => (props={}) => (...children) => {
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
