import React from 'react';
import { createRoot } from 'react-dom/client';
import CVBuilder from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CVBuilder />);