<h1>VITE-REACT-TAILWINDCSS SETUP</h1>

<h3>Setting up a Vite.js project with React-template and TailwindCSS</h3>

1. npm create vite@latest myprojectname -- --template react<br>
2. cd myprojectname
3. npm install -D tailwindcss postcss autoprefixer

<h3>Generate the Configuration Files</h3>

4. npx tailwindcss init -p
5. Add "./index.html" and "./src/**/*.{js,ts,jsx,tsx}" to the content array in your tailwind.config.js file
6. Add Add Tailwind Directives, @tailwind base,  @tailwind components and @tailwind utilities to Your index.css file
7. Run your Vite server with the npm run dev command