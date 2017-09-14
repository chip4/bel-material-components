import yo from '../externals/yo-yo.js';
import textField from '../../../material-components/text-field/index.js';

export default () => {
  return yo`
    <div>
      ${textField({label: 'Vanilla'})}
      ${textField({
        label: 'Placeholder',
        placeholder: 'Here is a placeholder',
      })}
      ${textField({
        label: 'oninput',
        oninput: (val) => console.log('val.target.value', val.target.value),
      })}
      ${textField({
        label: 'Disabled',
        disabled: true,
      })}
      ${textField({
        label: 'Multiline',
        placeholder: 'Here is some placeholder text',
        multiline: { rows: 8, columns: 40 },
      })}
      ${textField({
        label: 'FullWidth',
        fullWidth: true,
      })}
      ${textField({
        label: 'Box',
        box: true,
      })}
    </div>
  `;
};
