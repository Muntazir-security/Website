export const smoothScrollToTop = (callback?: () => void) => {
  console.log('Smooth scrolling to top');
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  if (callback) {
    setTimeout(callback, 500);
  }
};

export const smoothScrollToElement = (elementId: string) => {
  console.log(`Smooth scrolling to element: ${elementId}`);
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};