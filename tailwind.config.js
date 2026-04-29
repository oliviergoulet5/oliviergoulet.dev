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
      }
    },
  },
  plugins: [],
};
