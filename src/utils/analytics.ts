import ReactGA from 'react-ga4';
import { hotjar } from '@hotjar/browser';

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your GA4 measurement ID
  console.log('Google Analytics initialized');
};

// Initialize Hotjar
export const initHotjar = () => {
  hotjar.initialize(0000000, 6); // Replace with your Hotjar ID and version
  console.log('Hotjar initialized');
};

// Track page views
export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  console.log('Page view logged:', window.location.pathname);
};

// Track events
export const logEvent = (category: string, action: string) => {
  ReactGA.event({
    category: category,
    action: action,
  });
  console.log('Event logged:', category, action);
};