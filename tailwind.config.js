module.exports = {
  content: ["./*.{html,js}"], // Define o caminho dos arquivos que utilizam Tailwind
  theme: {
    extend: {
      colors: {
        primaria: "var(--cor-primaria)",
        secundaria: "var(--cor-secundaria)",
        neutro: "var(--neutro)",
        preto: "var(--preto)",
        degradeAzul: "var(--degrade-azul)"
      },
      fontFamily: {
        fonteTitulo: "var(--fonte-titulo)",
        fonteTexto: "var(--fonte-texto)"
      }
    },
  },
  plugins: [],
};