import React from 'react';
import { Box } from '@chakra-ui/react';
import { AiOutlineAlignRight, AiOutlineClose } from 'react-icons/ai';

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} cursor='pointer' onClick={toggle}>
      {isOpen ? <AiOutlineClose size={30}/> : <AiOutlineAlignRight size={30} />}
    </Box>
  );
};

export default MenuToggle;
