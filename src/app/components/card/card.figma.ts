import figma, { html } from '@figma/code-connect/angular';

figma.connect(
  'https://www.figma.com/design/b46tnfp2JYkicqsRp01cwN/Untitled?node-id=4-13',
  {
    example: () => html`
      <app-card size="large" title="Card Title" description="Card description text." />
    `,
  }
);

figma.connect(
  'https://www.figma.com/design/b46tnfp2JYkicqsRp01cwN/Untitled?node-id=4-26',
  {
    example: () => html`
      <app-card size="small" title="Card Title" description="Card description text." />
    `,
  }
);

figma.connect(
  'https://www.figma.com/design/b46tnfp2JYkicqsRp01cwN/Untitled?node-id=4-32',
  {
    example: () => html`
      <app-card size="small" variant="alt" title="Card Title" description="Description." />
    `,
  }
);
