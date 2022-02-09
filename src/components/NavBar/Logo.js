import React from 'react';
import { Heading, HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import thanos from '../../assets/img/thanos-face.png';
import saitama from '../../assets/img/saitama.png';

const Logo = () => {
  return (
    <Link to='/'>
      <HStack>
        <Heading size='xl' bgGradient='linear(to-l, #fbab7e , #f7ce68)' bgClip='text'>
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
    </Link>
  );
};

export default Logo;
