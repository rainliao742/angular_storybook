import figma, { html } from '@figma/code-connect/angular';

figma.connect(
  'https://www.figma.com/design/b46tnfp2JYkicqsRp01cwN/Untitled?node-id=4-9',
  {
    example: () => html`
      <app-nav-link label="Solutions" href="/solutions" />
    `,
  }
);
