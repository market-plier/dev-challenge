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
      control: { type: 'text' },
    },
    endIcon: {
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

export const DefaultButton = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
DefaultButton.args = {
  size: 'md',
  disabled: false,
  disableShadow: false,
}

export const VariantOutline = Template.bind({});
VariantOutline.args = {
  size: 'md',
  variant: 'outline',
  disabled: false,
  disableShadow: false,
}

export const VariantText = Template.bind({});
VariantOutline.args = {
  size: 'md',
  variant: 'text',
  disabled: false,
  disableShadow: false,
}

export const ButtonDisableShadow = Template.bind({});
VariantOutline.args = {
  size: 'md',
  color: 'primary',
  disabled: false,
  disableShadow: true,
}

export const ButtonDisabled = Template.bind({});
VariantOutline.args = {
  size: 'md',
  disabled: true,
}

export const ButtonDisabledVariantText = Template.bind({});
VariantOutline.args = {
  size: 'md',
  variant: 'text',
  disabled: true,
}

export const ButtonStartIcon = Template.bind({});
VariantOutline.args = {
  size: 'md',
  color: 'primary',
  startIcon: 'local_grocery_store',
  disabled: false,
  disableShadow: false,
}

export const ButtonEndIcon = Template.bind({});
VariantOutline.args = {
  size: 'md',
  color: 'primary',
  endIcon: 'local_grocery_store',
  disabled: false,
  disableShadow: false,
}

export const ButtonSmall = Template.bind({});
VariantOutline.args = {
  size: 'sm',
  color: 'primary',
  disabled: false,
  disableShadow: false,
}

export const ButtonMedium = Template.bind({});
VariantOutline.args = {
  size: 'md',
  color: 'primary',
  disabled: false,
  disableShadow: false,
}

export const ButtonLarge = Template.bind({});
VariantOutline.args = {
  size: 'lg',
  color: 'primary',
  disabled: false,
  disableShadow: false,
}

export const ButtonDefaultColor = Template.bind({});
VariantOutline.args = {
  size: 'md',
  color: 'default',
  disabled: false,
  disableShadow: false,
}

export const ButtonPrimaryColor = Template.bind({});
VariantOutline.args = {
  size: 'md',
  color: 'primary',
  disabled: false,
  disableShadow: false,
}

export const ButtonSecondaryColor = Template.bind({});
VariantOutline.args = {
  size: 'md',
  color: 'secondary',
  disabled: false,
  disableShadow: false,
}

export const ButtonDangerColor = Template.bind({});
VariantOutline.args = {
  size: 'md',
  color: 'danger',
  disabled: false,
  disableShadow: false,
}
