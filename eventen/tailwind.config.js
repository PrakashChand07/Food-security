module.exports = {
  content: [
    "./src/Admin/**/*.{js,jsx,ts,tsx}",
    "./src/Admin/components/**/*.{js,jsx,ts,tsx}",
    "./src/Admin/pages/**/*.{js,jsx,ts,tsx}",
    "./src/Admin/layouts/**/*.{js,jsx,ts,tsx}"
  ],
  important: '.admin-scope',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5faff',
          100: '#e6f2ff',
          200: '#bfe0ff',
          300: '#99ceff',
          400: '#4da6ff',
          500: '#0076ff',
          600: '#0066e6',
          700: '#0051b3',
          800: '#003d80',
          900: '#00284d'
        },
        accent: '#7c3aed'
      }
    }
  },
  plugins: [],
}
