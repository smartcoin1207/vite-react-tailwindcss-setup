<h1>VITE-REACT-TAILWINDCSS SETUP</h1>

<h3>Setting up a Vite.js project with React-template and TailwindCSS</h3>

Tiny project to become familiar with TailwindCSS<br>

Run the following commends in your terminal:<br>

1. npm create vite@latest myprojectname -- --template react<br>
2. cd myprojectname
3. npm install -D tailwindcss postcss autoprefixer
4. npx tailwindcss init -p (this generates the Configuration Files)<br>

configure the paths to all of your HTML templates:
5. Add "./index.html" and "./src/**/*.{js,ts,jsx,tsx}" to the content array in your tailwind.config.js file<br>

For adding special functionality and customization:<br>
6. Add the Tailwind Directives, @tailwind base,  @tailwind components and @tailwind utilities to Your index.css file<br>

Start your server:<br>
7. Run your Vite server with the npm run dev command<br>

View app in your browser:<br>
8. Hold the ctrl key and click on the link at Local<br><br>

![tailwind](https://github.com/Noud63/vite-react-tailwind-setup/assets/38325801/427430ac-4cf2-4553-bf8b-13c49af83821)<br><br>
![tailwindmobile](https://github.com/Noud63/vite-react-tailwind-setup/assets/38325801/c0b35c97-b955-42ec-aec5-e1275b43eaa5)
