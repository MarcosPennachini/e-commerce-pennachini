import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/index';
import '@fontsource/gloria-hallelujah';
import '@fontsource/poppins';

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgQXUe3rYI2XpkbxN-EmEWQczOA-NK1gU",
  authDomain: "saitamastore-ecommerce.firebaseapp.com",
  projectId: "saitamastore-ecommerce",
  storageBucket: "saitamastore-ecommerce.appspot.com",
  messagingSenderId: "303625908342",
  appId: "1:303625908342:web:681036fb733cbeb48bef57"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
