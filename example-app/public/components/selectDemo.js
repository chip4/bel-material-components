
import yo from '../externals/yo-yo.js';
import select, { option, optGroup, desktopSelect, desktopOptGroup, desktopOption } from '../../../package/select.js';

const createOptions = (option, optGroup) => [
  option({ value: ''})('Pick a Food'),
  option({ value: 'grains'})('Bread, Cereal, Rice, and Pasta'),
  optGroup({ label: 'Fruits' })(
    option({ value: 'apple'})('Apple'),
    option({ value: 'oranges'})('Orange'),
    option({ value: 'banana'})('Banana'),
  ),
  option({ value: 'dairy'})('Milk, Yogurt, and Cheese'),
  option({ value: 'meat'})('Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts'),
  option({ value: 'fats'})('Fats, Oils, and Sweets'),
];

export default () => {
  return yo`
    <div>
      ${desktopSelect()(...createOptions(desktopOption, desktopOptGroup))}
      ${desktopSelect({ disabled: true })(...createOptions(desktopOption, desktopOptGroup))}
      ${select()(...createOptions(option, optGroup))}
      ${select({ disabled: true })(...createOptions(option, optGroup))}
    </div>
  `;
};