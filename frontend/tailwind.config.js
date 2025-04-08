// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        earthGreen: '#2d6a4f',
        brandYellow: '#ffd166',
        accentOrange: '#f28482',
        darkBlue: '#1b263b',
        lightGray: '#f0f0f0',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-heavy': '0 8px 12px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #2d6a4f 0%, #ffd166 100%)',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  }
}
