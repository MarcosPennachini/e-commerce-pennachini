import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme(
    {
        fonts: {
            heading: `Gloria Hallelujah, ${base.fonts?.heading}`,
            body: `Poppins, ${base.fonts?.body}`
        }
    }
);

export default theme;
