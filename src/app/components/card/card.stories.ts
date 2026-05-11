import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card';

const meta: Meta<CardComponent> = {
  title: 'Design System/Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'small'],
      description: '卡片尺寸',
    },
    variant: {
      control: 'select',
      options: ['default', 'alt'],
      description: '卡片樣式變體',
    },
    title: { control: 'text', description: '標題' },
    description: { control: 'text', description: '描述文字' },
    tag: { control: 'text', description: '標籤（選填）' },
  },
  args: {
    title: 'Neural Backbone',
    description: 'Advanced distributed computing infrastructure designed to support trillions of concurrent parameters.',
    size: 'large',
    variant: 'default',
    tag: '',
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Large: Story = {
  name: 'Large（大型）',
  args: { size: 'large' },
};

export const Small: Story = {
  name: 'Small（小型）',
  args: {
    size: 'small',
    title: 'Void Encryption',
    description: 'Quantum-resistant security layers that shield your data.',
  },
};

export const WithTag: Story = {
  name: '帶標籤',
  args: {
    size: 'large',
    tag: 'Featured',
    title: 'Cognitive Synergy',
    description: 'Cross-modal intelligence fusion across all data streams.',
  },
};

export const Alt: Story = {
  name: 'Alt 變體',
  args: {
    variant: 'alt',
    title: 'Real-Time Telemetry',
    description: 'Live observability across your entire AI fleet with millisecond precision.',
  },
};

export const AllVariants: Story = {
  name: '所有變體',
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 16px; padding: 24px; max-width: 900px;">
        <app-card size="large" title="Neural Backbone" description="Advanced distributed computing infrastructure." tag="Core" />
        <app-card size="small" variant="alt" title="Void Encryption" description="Quantum-resistant security layers." />
      </div>
    `,
  }),
};
