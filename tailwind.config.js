/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export default {
    important: true,
    mode: 'jit',
    content: ["./**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
            primary: '#e6a2a9',
            second: '#f4d4dd',
            third: '#D2B48C'
        },
        fontFamily: {
          afacad: 'Afacad Flux, sans-serif',
          anton: 'Anton SC, sans-serif'
        },
      },
    },
    plugins: [
        plugin(function({ addComponents }) {
          addComponents({
            '.flex-box': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            },
            '.sections': {
                width: '100%',
                height: '100vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            },
            '.input': {
              width: '90%',
              height: '40px',
              background: 'transparent',
              border: '1px solid #000',
              borderRadius: '5px'
            },
          });
        }),
      ],
  }