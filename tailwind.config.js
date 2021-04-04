module.exports = {
  prefix: '',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{html,scss,ts}'],
  },
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Oswald', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    extends: {
      color: {
        inherit: 'inherit',
        transparent: 'transparent',
        current: 'currentColor',

        white: '#fff',
        black: '#000',

        background: 'var(--bg)',
        accent: 'var(--accent)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
    },
  },
  variants: {},
  plugins: [],
};
