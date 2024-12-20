/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'cyanShadow': '4px 3px 4px rgba(8, 51, 68, 0.4)',
      },
      backgroundImage: {
        'custom-gradient-alpha': 'linear-gradient(90deg, rgba(18,77,149,0.3394607843137255) 0%, rgba(80,167,228,0.2554271708683473) 40%, rgba(90,198,199,0.26943277310924374) 100%)',
      },
    },
  },
  plugins: [],
}

