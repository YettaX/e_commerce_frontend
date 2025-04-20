// postcss.config.js
module.exports = {
    plugins: [
      require('@tailwindcss/postcss'), // Use the new PostCSS plugin
      require('autoprefixer'), // Autoprefixer for automatic vendor prefixes
    ],
  };
  