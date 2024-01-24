import React, { createContext, useState } from 'react';
import Flag from './components/Flag';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [language, setLanguage] = useState('brazil');

  return (
    <MyContext.Provider value={{ language, setLanguage }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };