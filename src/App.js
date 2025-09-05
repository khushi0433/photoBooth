import logo from './logo.svg';
import './App.css';
import react  from 'react';
import PhotoBoot from './components/photoBoot';
import { Cat } from 'lucide-react';
import { Github } from 'lucide-react';

function App() {
  return (
    <body class="bg-gray-900">
      <nav className="flex justify-between items-center p-2 bg-gray-800 text-white">
        <span className="text-2xl font-bold text-orange-300">Photo<span className="text-blue-300 font-thin">Booth</span></span>
    <div>
      <Cat className='icon' size={24} color="white"/>
    </div>
      </nav>
   <PhotoBoot />
   <footer className="bg-gray-900 text-white w-full py-4 mt-auto flex flex-col items-center justify-center">
  <p className="text-center mb-2">PhotoBoot &copy; 2024</p>
  <a
    href="https://github.com/khushi0433"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-gray-400 transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.97.11-.76.41-1.26.74-1.55-2.55-.29-5.23-1.27-5.23-5.63 0-1.25.44-2.27 1.17-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.14 1.18a10.92 10.92 0 012.86-.39c.97 0 1.94.13 2.86.39 2.17-1.49 3.13-1.18 3.13-1.18.63 1.59.24 2.76.12 3.05.73.81 1.17 1.83 1.17 3.08 0 4.37-2.68 5.34-5.24 5.62.42.37.79 1.1.79 2.22v3.29c0 .31.21.67.8.56A10.52 10.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
    </svg>
    GitHub
  </a>
</footer>
   </body>
  );
}

export default App;
