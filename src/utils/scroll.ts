export const scrollToSelector = (selector: string) => {
  // Adicionando um pequeno atraso para garantir que o DOM esteja pronto
  setTimeout(() => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, 100);
};

export const updateUrlWithoutNavigating = (selector: string) => {
  const newUrl = new URL(window.location.href);
  newUrl.searchParams.set('scrollTo', selector.slice(1));
  window.history.pushState({}, '', newUrl.toString());
};