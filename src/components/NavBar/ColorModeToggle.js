import React from 'react';
import { Button } from '@chakra-ui/react';
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeToggle = ({ toggleColorModeIcon, isDark }) => {
  return (
    <Button variant='ghost' colorScheme='red' borderRadius='full' onClick={toggleColorModeIcon}>
      {isDark ? <FaMoon /> : <FaSun />}
    </Button>
  );
};

export default ColorModeToggle;
