import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button';

const meta: Meta<ButtonComponent> = {
  title: 'Design System/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'nav-cta'],
      description: '按鈕樣式變體',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '按鈕尺寸',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    label: {
      control: 'text',
      description: '按鈕文字',
    },
    disabled: {
      control: 'boolean',
      description: '是否停用',
    },
  },
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  name: 'Primary（主要）',
  args: {
    variant: 'primary',
    label: 'Initiate Deployment',
  },
};

export const Secondary: Story = {
  name: 'Secondary（次要）',
  args: {
    variant: 'secondary',
    label: 'View Protocols',
  },
};

export const NavCTA: Story = {
  name: 'Nav CTA（導覽列）',
  args: {
    variant: 'nav-cta',
    label: 'Launch Console',
  },
};

export const Small: Story = {
  name: 'Small 尺寸',
  args: {
    variant: 'primary',
    label: 'Small',
    size: 'sm',
  },
};

export const Large: Story = {
  name: 'Large 尺寸',
  args: {
    variant: 'primary',
    label: 'Large Button',
    size: 'lg',
  },
};

export const Disabled: Story = {
  name: 'Disabled（停用）',
  args: {
    variant: 'primary',
    label: 'Unavailable',
    disabled: true,
  },
};

export const AllVariants: Story = {
  name: '所有變體',
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; padding: 24px;">
        <app-button variant="primary" label="Primary" />
        <app-button variant="secondary" label="Secondary" />
        <app-button variant="nav-cta" label="Nav CTA" />
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  name: '所有尺寸',
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; padding: 24px;">
        <app-button variant="primary" size="sm" label="Small" />
        <app-button variant="primary" size="md" label="Medium" />
        <app-button variant="primary" size="lg" label="Large" />
      </div>
    `,
  }),
};
