/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
      "./layouts/**/*.html",
      "./content/**/*.md",
      "./content/**/*.html",
      "./hugo_stats.json",
    ],
    extract: {
      json: (content) => {
        try {
          const parsed = JSON.parse(content);
          return parsed?.htmlElements?.classes ?? [];
        } catch {
          return [];
        }
      },
    },
  },
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 120s linear infinite',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            // font sizes
            fontSize: '1.125rem',
            h1: { fontSize: theme('fontSize.4xl') },
            h2: { fontSize: theme('fontSize.3xl') },
            h3: { fontSize: theme('fontSize.2xl') },
            // colors
            color: theme('colors.neutral.300'),
            strong: { color: theme('colors.neutral.100') },
            h1: { color: theme('colors.neutral.100') },
            h2: { color: theme('colors.neutral.100') },
            h3: { color: theme('colors.neutral.100') },
            a: { color: theme('colors.orange.300') },
            code: { color: theme('colors.yellow.200') },
            blockquote: { color: theme('colors.neutral.400') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
