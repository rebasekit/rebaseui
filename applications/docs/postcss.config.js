const config = require("../../configurations/tailwind-config/tailwind.config.js")

module.exports = {
  plugins: {
    tailwindcss: { config },
    autoprefixer: {},
  },
}
