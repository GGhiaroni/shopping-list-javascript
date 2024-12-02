module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaria: "var(--cor-primaria)",
        secundaria: "var(--cor-secundaria)",
        neutro: "var(--neutro)",
        preto: "var(--preto)",
        corBackground: "var(--cor-background)",
        corBackgroundDois: "var(--cor-background-dois)"
      },
      fontFamily: {
        fonteTitulo: "var(--fonte-titulo)",
        fonteTexto: "var(--fonte-texto)",
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
};