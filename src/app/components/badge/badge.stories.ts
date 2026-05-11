import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge';

const meta: Meta<BadgeComponent> = {
  title: 'Design System/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'danger', 'warning'],
      description: '顏色變體',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: '尺寸',
    },
    label: { control: 'text', description: '文字' },
  },
  args: {
    label: 'Badge',
    variant: 'default',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
  name: 'Default（預設）',
  args: { variant: 'default', label: 'Default' },
};

export const Success: Story = {
  name: 'Success（成功）',
  args: { variant: 'success', label: 'Success' },
};

export const Danger: Story = {
  name: 'Danger（危險）',
  args: { variant: 'danger', label: 'Danger' },
};

export const Warning: Story = {
  name: 'Warning（警告）',
  args: { variant: 'warning', label: 'Warning' },
};

export const Small: Story = {
  name: 'Small 尺寸',
  args: { variant: 'default', label: 'Small', size: 'sm' },
};

export const AllVariants: Story = {
  name: '所有變體',
  render: () => ({
    template: `
      <div style="display: flex; gap: 8px; align-items: center; padding: 24px;">
        <app-badge variant="default" label="Default" />
        <app-badge variant="success" label="Success" />
        <app-badge variant="danger"  label="Danger"  />
        <app-badge variant="warning" label="Warning" />
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  name: '所有尺寸',
  render: () => ({
    template: `
      <div style="display: flex; gap: 8px; align-items: center; padding: 24px;">
        <app-badge variant="default" label="Small" size="sm" />
        <app-badge variant="default" label="Medium" size="md" />
      </div>
    `,
  }),
};
