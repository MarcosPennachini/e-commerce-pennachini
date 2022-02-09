import {
  Box,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

const SkeletonCards = () => {
  return (
    <SimpleGrid minChildWidth='300px' spacing={10}>
      <Box padding='6' boxShadow='sm' >
        <SkeletonCircle size='200' />
        <SkeletonText my='4' />
        <Stack>
          <Skeleton height='20px' />
          <Skeleton height='15px' />
        </Stack>
      </Box>
      <Box padding='6' boxShadow='sm' >
        <SkeletonCircle size='200' />
        <SkeletonText my='4' />
        <Stack>
          <Skeleton height='20px' />
          <Skeleton height='15px' />
        </Stack>
      </Box>
      <Box padding='6' boxShadow='sm' >
        <SkeletonCircle size='200' />
        <SkeletonText my='4' />
        <Stack>
          <Skeleton height='20px' />
          <Skeleton height='15px' />
        </Stack>
      </Box>
      <Box padding='6' boxShadow='sm' >
        <SkeletonCircle size='200' />
        <SkeletonText my='4' />
        <Stack>
          <Skeleton height='20px' />
          <Skeleton height='15px' />
        </Stack>
      </Box>
      <Box padding='6' boxShadow='sm' >
        <SkeletonCircle size='200' />
        <SkeletonText my='4' />
        <Stack>
          <Skeleton height='20px' />
          <Skeleton height='15px' />
        </Stack>
      </Box>
      <Box padding='6' boxShadow='sm' >
        <SkeletonCircle size='200' />
        <SkeletonText my='4' />
        <Stack>
          <Skeleton height='20px' />
          <Skeleton height='15px' />
        </Stack>
      </Box>
      <Box padding='6' boxShadow='sm' >
        <SkeletonCircle size='200' />
        <SkeletonText my='4' />
        <Stack>
          <Skeleton height='20px' />
          <Skeleton height='15px' />
        </Stack>
      </Box>
      <Box padding='6' boxShadow='sm' >
        <SkeletonCircle size='200' />
        <SkeletonText my='4' />
        <Stack>
          <Skeleton height='20px' />
          <Skeleton height='15px' />
        </Stack>
      </Box>
    </SimpleGrid>
  );
};

export default SkeletonCards;
