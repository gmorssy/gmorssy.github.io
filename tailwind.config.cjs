module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
<<<<<<< HEAD
    themes: ["cupcake"],
=======
    themes: ["retro", "dark", "dracula", "cupcake", "bumblebee", "emerald", "corporate", "synthwave",  "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
>>>>>>> fb5768f6aa5923965a0d27874ac7f597d4a40505
  },
}
