import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  source: ['tokens/tokens.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      prefix: 'ds',
      buildPath: 'src/styles/tokens/',
      files: [
        {
          destination: '_tokens.generated.scss',
          format: 'scss/variables',
          options: {
            outputReferences: false,
          },
        },
      ],
    },
    css: {
      transformGroup: 'css',
      prefix: 'ds',
      buildPath: 'src/styles/tokens/',
      files: [
        {
          destination: '_tokens.generated.css',
          format: 'css/variables',
          selector: ':root',
          options: {
            outputReferences: false,
          },
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'src/styles/tokens/',
      files: [
        {
          destination: 'tokens.generated.ts',
          format: 'javascript/es6',
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
console.log('✅ Design tokens built successfully.');
