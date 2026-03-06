/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        ink: '#1a1a1a',
        paper: '#fafaf8',
        muted: '#6b6b6b',
        rule: '#e5e5e3',
        accent: '#2563eb',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#1a1a1a',
            lineHeight: '1.8',
            a: {
              color: '#2563eb',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
            'h1, h2, h3, h4': {
              letterSpacing: '-0.02em',
              fontWeight: '600',
            },
            h2: {
              marginTop: '2.5em',
              marginBottom: '0.75em',
            },
            h3: {
              marginTop: '2em',
              marginBottom: '0.5em',
            },
            blockquote: {
              fontStyle: 'normal',
              fontWeight: '500',
              borderLeftColor: '#2563eb',
              borderLeftWidth: '3px',
              color: '#1a1a1a',
            },
            code: {
              fontFamily: 'JetBrains Mono, SF Mono, Fira Code, monospace',
              fontSize: '0.875em',
              backgroundColor: '#f3f3f1',
              padding: '0.15em 0.35em',
              borderRadius: '0.25em',
              fontWeight: '400',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            pre: {
              backgroundColor: '#1a1a1a',
              color: '#e5e5e3',
              borderRadius: '0.5em',
              padding: '1.25em 1.5em',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
            },
            table: {
              fontSize: '0.9em',
            },
            th: {
              fontWeight: '600',
              borderBottomColor: '#1a1a1a',
              borderBottomWidth: '2px',
            },
            td: {
              borderBottomColor: '#e5e5e3',
            },
            strong: {
              fontWeight: '650',
            },
            hr: {
              borderColor: '#e5e5e3',
              marginTop: '3em',
              marginBottom: '3em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
