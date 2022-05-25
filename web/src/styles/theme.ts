import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        darkBlue: {
            "50": "#2B3648",
            "100": "#212936",
        },
        lightBlue: {
            "50": "#2196F3",
            "100": "#1976D2",
        },
    },
    fonts: {
        heading: "Poppins, sans-serif",
        body: "Poppins, sans-serif"
    },
    styles: {
        global: {
            body: {
                bg: 'darkBlue.50',
                color: 'white',
            }
        }
    }
})