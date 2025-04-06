/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export default {
    important: true,
    mode: 'jit',
    content: ["./**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
            primary: '#f4d4dd',
            second: '#e6a2a9',
            third: '#6E4C3B'
        },
        fontFamily: {
          afacad: 'Afacad Flux, sans-serif',
          anton: 'Anton SC, sans-serif'
        },
        transitionTimingFunction: {
          'custom-ease': 'cubic-bezier(0.5, 1.6, 0.4, 0.7)',
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
              height: '45px',
              background: '#f4d4dd',
              border: '1px solid #000',
              
            },
            '.slide': {
              width: '100%',
              height: '100vh',
              position: 'relative',
              flexShrink: '0'
            },
          });
        }),
      ],
  }