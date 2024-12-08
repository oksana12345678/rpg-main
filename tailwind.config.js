/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /_mask-(circle|square|squircle|heart|decagon|hexagon|hexagon-2|star|star-2)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        button_accent: '#7C00F8',
        button_two: '#1D1D45',
        button_hover_l: '#7C00F8',
        button_hover_r: '#A249FB',
        button_hover_two_l: '#1D1D45',
        button_hover_two_r: '#4949AB',
        disable: '#707071',
        accent_button1: '#2A006D',
        accent_button2: '#3C3CC1',
        bg_side_bar: '#282829',
        bg_text_accent: '#06000C',
        yalow_accent: '#FFD600',
        orang_accent: '#FF9900',
        text_scrolls: '#0B0D33',
        backdrop: 'rgba(6, 0, 12, 0.8)',
        notification_window: '#06000c',
        error_color: 'rgba(248, 0, 0, 1)',
        error_backdrop: 'rgba(162, 73, 251, 0.02)',

        front_end: '#61DAFB',
        shadow_front_end: 'rgba(97, 218, 251, 0.5)',
        ux_ui_design: '#E91E63',
        shadow_ux_ui_design: 'rgba(233, 30, 99, 0.5)',
        backend: '#E8B504',
        fullStack: '#3F51B5',
        HR: '#FF5722',
        BA: '#009688',
        QA: '#9C27B0',
        DevOps: '#607D8B',
        PM: '#4CAF50',

        courses: 'rgba(244, 169, 213, 0.5)',
        couch: 'rgba(247, 236, 110, 0.5)',
        mentoring: 'rgba(202, 138, 245, 0.5)',
        courses_hover: 'rgba(244, 169, 213, 0.8)',
        couch_hover: 'rgba(247, 236, 110, 0.8)',
        mentoring_hover: 'rgba(202, 138, 245, 0.8)',

        main_bg_color: '#141415',
        shadow_text_accent: '#3b3b3f',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        miamanueva: ['Miama Nueva', 'sans-serif'],
        kobzar: ['Kobzar KS', 'sans-serif'],
      },
      boxShadow: {
        'inner-custom': 'inset 2px 2px 14px 2px',
        'inner-custom-big': 'inset 0 0 32px 0',

        'avatar-custom': '0px 0px 42px -18px',
      },
    },
  },
  plugins: [
    daisyui,

    // For creating utility class - drop-shadow-[tailwind color]
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {};
      const colors = theme('colors');

      Object.keys(colors).forEach((colorName) => {
        if (typeof colors[colorName] === 'object') {
          Object.keys(colors[colorName]).forEach((shade) => {
            const colorValue = colors[colorName][shade];
            newUtilities[`.drop-shadow-${colorName}-${shade}`] = {
              filter: `drop-shadow(0 0 10px ${colorValue})`,
            };
          });
        } else {
          newUtilities[`.drop-shadow-${colorName}`] = {
            filter: `drop-shadow(0 0 10px ${colors[colorName]})`,
          };
        }
      });

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
  daisyui: {
    prefix: '_', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
  },
};
