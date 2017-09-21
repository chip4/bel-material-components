export const createModifyingClasses = (prefix, props) => Object.keys(props)
  .filter((key) => props[key])
  .map(camelToSnakeCase)
  .map((mod) => `${prefix}--${mod}`)
  .join(' ');

export const camelToSnakeCase = (str) => str.replace(/([A-Z])/g, ($1) => "-"+$1.toLowerCase());
