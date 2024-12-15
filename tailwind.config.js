/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: 'var(--color-primary1)',
          2: 'var(--color-primary2)',
          3: 'var(--color-primary3)',
          4: 'var(--color-primary4)',
          5: 'var(--color-primary5)',
        },
        secondary: {
          1: 'var(--color-secondary1)',
          2: 'var(--color-secondary2)',
          3: 'var(--color-secondary3)',
          4: 'var(--color-secondary4)',
          5: 'var(--color-secondary5)',
        },
        tertiary: {
          1: 'var(--color-teritary1)',
          2: 'var(--color-teritary2)',
          3: 'var(--color-teritary3)',
          4: 'var(--color-teritary4)',
          5: 'var(--color-teritary5)',
        },
        quaternary: {
          1: 'var(--color-quaternary1)',
          2: 'var(--color-quaternary2)',
          3: 'var(--color-quaternary3)',
          4: 'var(--color-quaternary4)',
          5: 'var(--color-quaternary5)',
        },
      },
      fontFamily: {
        primary: ['var(--font-primary)', 'sans-serif'],
      },
      fontSize: {
        hero: 'var(--text-hero)', // 128px
        heading1: 'var(--text-heading1)', // 96px
        heading2: 'var(--text-heading2)', // 80px
        heading3: 'var(--text-heading3)', // 64px
        heading4: 'var(--text-heading4)', // 48px
        heading5: 'var(--text-heading5)', // 32px
        paragraph1: 'var(--text-paragraph1)', // 48px
        paragraph2: 'var(--text-paragraph2)', // 40px
        paragraph3: 'var(--text-paragraph3)', // 32px
        paragraph4: 'var(--text-paragraph4)', // 24px
        paragraph5: 'var(--text-paragraph5)', // 16px
      },
      spacing: {
        5: 'var(--spacing-5)', // 5px
        10: 'var(--spacing-10)', // 10px
        15: 'var(--spacing-15)', // 15px
        20: 'var(--spacing-20)', // 20px
        30: 'var(--spacing-30)', // 30px
        40: 'var(--spacing-40)', // 40px
        50: 'var(--spacing-50)', // 50px
        60: 'var(--spacing-60)', // 60px
        70: 'var(--spacing-70)', // 70px
        80: 'var(--spacing-80)', // 80px
        100: 'var(--spacing-100)', // 100px
        130: 'var(--spacing-130)', // 130px
      },
      backgroundImage: {
        'default-image-1': "url('./src/assets/images/default-image (1).jpg')",
        'default-image-2': "url('./src/assets/images/default-image (2).jpg')",
        'default-image-3': "url('./src/assets/images/default-image (3).jpg')",
        'default-image-4': "url('./src/assets/images/default-image (4).jpg')",
        'default-image-5': "url('./src/assets/images/default-image (5).jpg')",
        'default-image-6': "url('./src/assets/images/default-image (6).jpg')",
        'default-image-7': "url('./src/assets/images/default-image (7).jpg')",
        'default-image-8': "url('./src/assets/images/default-image (8).jpg')",
        'default-image-9': "url('./src/assets/images/default-image (9).jpg')",
        'default-image-10': "url('./src/assets/images/default-image (10).jpg')",
        'asset-svg-1': "url('./src/assets/svgs/asset-svg (1).svg')",
        'asset-svg-2': "url('./src/assets/svgs/asset-svg (2).svg')",
        'asset-svg-3': "url('./src/assets/svgs/asset-svg (3).svg')",
        'asset-svg-4': "url('./src/assets/svgs/asset-svg (4).svg')",
        'asset-svg-5': "url('./src/assets/svgs/asset-svg (5).svg')",
        'asset-svg-6': "url('./src/assets/svgs/asset-svg (6).svg')",
        'asset-svg-7': "url('./src/assets/svgs/asset-svg (7).svg')",
        'asset-svg-8': "url('./src/assets/svgs/asset-svg (8).svg')",
      },
    },
  },
  plugins: [],
};