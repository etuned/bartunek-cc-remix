
import { createStitches } from "@stitches/react";


const stitches = createStitches({
    theme: {
        colors: {
            red: "#ff6d6d",
            steel: "#363645",
            black: "#000",
            white: "#fff",
            grey: "#666",
        },
    },
    media: {
        tabletUp: "(min-width: 768px)",
        desktopUp: "(min-width: 1024px)",
        largeDesktopUp: "(min-width: 1680px)",
    },
});

const { styled, globalCss, getCssText } = stitches;

export const GlobalStyles = globalCss({
    '*': { margin: 0, padding: 0, border: 0, fontSize: '100%', font: 'inherit', verticalAlign: 'baseline' },
    'body': { lineHeight: 1, color: '$steel', fontSize: '2rem' },
    'ol,ul': { listStyle: 'none' },

})

export { styled, getCssText, globalCss };