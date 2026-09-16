/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0808F5",   // Azul Intenso Oficial
          red: "#FF0808",    // Vermelho Destaque Oficial
          bg: "#F5F6F8",     // Cinza Muito Claro
          text: "#222222",   // Cinza Escuro Texto
        },
      },
    },
  },
  plugins: [],
};
