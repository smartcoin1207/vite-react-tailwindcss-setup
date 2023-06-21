<h1>VITE-REACT-TAILWINDCSS SETUP</h1>

<h3>Setting up a Vite.js project with React-template and TailwindCSS</h3>

Tiny project to become familiar with TailwindCSS<br><br>

1. npm create vite@latest myprojectname -- --template react<br>
2. cd myprojectname
3. npm install -D tailwindcss postcss autoprefixer
4. npx tailwindcss init -p (this generates the Configuration Files)
5. Add "./index.html" and "./src/**/*.{js,ts,jsx,tsx}" to the content array in your tailwind.config.js file
6. Add the Tailwind Directives, @tailwind base,  @tailwind components and @tailwind utilities to Your index.css file
7. Run your Vite server with the npm run dev command
8. Hold the ctrl key and click on the link at Local