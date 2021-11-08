module.exports = {
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ["bg-blue-500", "bg-blue-400", "bg-purple-500", "bg-purple-400", "bg-indigo-500", "bg-indigo-400", 
                 "text-blue-500", "text-blue-400", "text-purple-500", "text-purple-400", "text-indigo-500", "text-indigo-400",
                 "hover:bg-blue-500", "hover:bg-blue-400", "hover:bg-purple-500", "hover:bg-purple-400", "hover:bg-indigo-500", "hover:bg-indigo-400",
                 "group-hover:text-blue-500", "group-hover:text-blue-400", "group-hover:text-purple-500", "group-hover:text-purple-400", "group-hover:text-indigo-500", "group-hover:text-indigo-400"
                ],
    },
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
