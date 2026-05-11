import type { Meta, StoryObj } from '@storybook/angular';
import { StatItemComponent } from './stat-item';

const meta: Meta<StatItemComponent> = {
  title: 'Design System/Stat Item',
  component: StatItemComponent,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', description: '數值' },
    label: { control: 'text', description: '指標名稱' },
  },
  args: {
    value: '99.9%',
    label: 'Core Uptime',
  },
};

export default meta;
type Story = StoryObj<StatItemComponent>;

export const Default: Story = {
  name: '預設',
  args: {
    value: '99.9%',
    label: 'Core Uptime',
  },
};

export const Latency: Story = {
  name: '延遲指標',
  args: {
    value: '2.4ms',
    label: 'Avg Latency',
  },
};

export const Throughput: Story = {
  name: '吞吐量',
  args: {
    value: '500TB',
    label: 'Daily Throughput',
  },
};

export const AllStats: Story = {
  name: '統計列（Dashboard 樣式）',
  render: () => ({
    template: `
      <div style="display: flex; gap: 48px; padding: 32px; background: #f8f9fa; border-radius: 12px;">
        <app-stat-item value="99.9%" label="Core Uptime" />
        <app-stat-item value="2.4ms" label="Avg Latency" />
        <app-stat-item value="500TB" label="Daily Throughput" />
        <app-stat-item value="12k+" label="Enterprise Nodes" />
      </div>
    `,
  }),
};
