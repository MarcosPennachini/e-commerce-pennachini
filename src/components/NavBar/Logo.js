import React from 'react';
import { Box, Heading, HStack, Image } from '@chakra-ui/react';
// import thanos from '../../assets/img/thanos-face.png';
import saitama from '../../assets/img/saitama.png';
import { GrRotateLeft } from 'react-icons/gr';

const Logo = () => {
  return (
    <HStack>
      <Heading size='xl' bgGradient='linear(to-l, #fbab7e, #f7ce68)' bgClip='text'>
        Saitama store
      </Heading>
      <Image
        src={saitama}
        boxSize='40px'
        style={{
          transform: 'rotate(5deg)',
          filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))',
        }}
        alt='Logo'
      />
    </HStack>
  );
};

export default Logo;
