import figma, { html } from '@figma/code-connect/angular';

figma.connect(
  'https://www.figma.com/design/b46tnfp2JYkicqsRp01cwN/Untitled?node-id=4-3',
  {
    example: () => html`
      <app-button variant="primary" label="Button" />
    `,
  }
);

figma.connect(
  'https://www.figma.com/design/b46tnfp2JYkicqsRp01cwN/Untitled?node-id=4-5',
  {
    example: () => html`
      <app-button variant="secondary" label="Button" />
    `,
  }
);

figma.connect(
  'https://www.figma.com/design/b46tnfp2JYkicqsRp01cwN/Untitled?node-id=4-7',
  {
    example: () => html`
      <app-button variant="nav-cta" label="Launch Console" />
    `,
  }
);
