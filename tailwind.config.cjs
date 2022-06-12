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
    themes: ["cupcake"],
  },
}
