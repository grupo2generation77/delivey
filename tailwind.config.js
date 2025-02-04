module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Certifique-se de incluir todos os arquivos relevantes
    ],
    theme: {
      extend: {
        animation: {
          "spin-slow": "spin 10s linear infinite", // Animação personalizada para girar lentamente
        },
      },
    },
    plugins: [
      require("tailwindcss-animated"), // Adiciona o plugin tailwindcss-animated
    ],
  };