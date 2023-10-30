import './css/tailwind.css';
import App from '../../../Jonas-sebera-portfolio/client/src/App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

reportWebVitals();
