import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        black: {
            "50": "#2B3648",
            "100": "#212936"
        },
        blue: {
            "50": "#2196F3",
            "100": "#1976D2",
        },
    },
    fonts: {
        heading: "Poppins, sans-serif",
        body: "Poppins, sans-serif",
    },
    styles: {
        global: {
            body: {
                bg: 'black.100',
                color:'white'
            },
        },
    },
})