import { extendTheme } from "@chakra-ui/react";

const mytheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});
export default mytheme;
