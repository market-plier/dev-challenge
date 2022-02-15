// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: ButtonComponent,
  argTypes: {
    variant: {
      options: ['outline', 'text', ''],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    color: {
      options: ['default', 'primary', 'secondary', 'danger'],
      control: { type: 'select' },
    },
    startIcon: {
      defaultValue: 'local_grocery_store',
      control: { type: 'text' },
    },
    endIcon: {
      defaultValue: 'local_grocery_store',
      control: { type: 'text' },
    },
    disabled: {
      defaultValue: false,
      control: {type: 'boolean'}
    },
    disableShadow:{
      defaultValue: false,
      control: {type: 'boolean'}
    }
  }
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  variant: 'outline',
  color: 'primary',
  size: 'md',
  disabled: false,
  disableShadow: false,
}

export const Secondary = Template.bind({});


export const Large = Template.bind({});


export const Small = Template.bind({});
