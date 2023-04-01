import { Raleway, Open_Sans } from "next/font/google";
import { extendTheme } from "@chakra-ui/react";

const _raleway = Raleway({ subsets: ["latin"] });
const _opensans = Open_Sans({ subsets: ["latin"] });

const raleway = _raleway.style.fontFamily;
const opensans = _opensans.style.fontFamily;

export const theme = extendTheme({
  fonts: {
    raleway,
    opensans,
    heading: opensans,
    body: raleway
  },
});
