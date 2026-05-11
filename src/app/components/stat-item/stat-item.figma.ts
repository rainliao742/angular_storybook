import figma, { html } from '@figma/code-connect/angular';

figma.connect(
  'https://www.figma.com/design/b46tnfp2JYkicqsRp01cwN/Untitled?node-id=4-38',
  {
    example: () => html`
      <app-stat-item value="99.9%" label="CORE UPTIME" />
    `,
  }
);
