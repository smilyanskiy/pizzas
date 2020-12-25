import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const InstallPromotion = () => {
  const [ installPrompt, setInstallPrompt ] = useState({});

  const justDoIt = sessionStorage.getItem('userChoice');

  useEffect(() => {
    if(!justDoIt) {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        setInstallPrompt(e);
      });
    }
  }, [justDoIt]);

  const install = () => {
    installPrompt.prompt();
    installPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    });
  };

  return (
    <Button onClick={() => install()} title="" variant="outline-dark">
      Установить приложение?
    </Button>
  );
};

export default InstallPromotion;