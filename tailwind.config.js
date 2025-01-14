/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
import { daikiui } from '@daiki-ui/react/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      primary: {
        light: '#b1e4f0',
        DEFAULT: 'rgb(var(--dui-primary-color))',
        dark: '#225268',
        container: '#effbfc',
      },
      secondary: {
        light: '#a5f5d7',
        DEFAULT: '#0bbe92',
        container: '#ebfef7',
      },
      surface: {
        bright: 'white',
        DEFAULT: '#f8fafc',
        dim: '#e2e8f0',
      },
      error: {
        DEFAULT: '#ef4444', // red-500
        container: '#fee2e2', // red-100
      },
      warning: {
        DEFAULT: '#facc15', // yellow-400
        container: '#fef9c3', // yellow-100
      },
      success: {
        DEFAULT: '#22c55e', // green-500
        container: '#dcfce7', // green-100
      },
      on: {
        primary: {
          DEFAULT: colors.white,
          container: '#20637e',
        },
        secondary: {
          DEFAULT: colors.white,
          container: '#017b62',
        },
        surface: {
          DEFAULT: '#0f172a',
        },
        error: {
          DEFAULT: colors.white,
        },
        warning: {
          DEFAULT: colors.white,
        },
        success: {
          DEFAULT: colors.white,
        },
      },
      outline: {
        lighter: colors.gray[50],
        light: colors.gray[200],
        DEFAULT: colors.gray[300],
        dark: colors.gray[400],
        darker: colors.gray[500],
      },
    },
    screens: {
      sm: '360px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    spacing: {
      none: '0px',
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '40px',
      '4xl': '48px',
      '5xl': '56px',
      '6xl': '64px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    daikiui({
      colors: {
        primaryColor: '#FAF',
      },
    }),
  ],
  /* corePlugins: {
    preflight: false,
  }, */
};
