import { useEffect, useState } from "react";
import type { AppContext, AppProps } from "next/app";
import Cookies from "js-cookie";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { customTheme, darkTheme, lightTheme } from "@/themes";

interface Props extends AppProps {
  theme: string;
}

export default function App({ Component, pageProps, theme }: Props) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "light";
    const selectedTheme =
      cookieTheme === "light"
        ? lightTheme
        : theme === "dark"
        ? darkTheme
        : customTheme;

    setCurrentTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </ThemeProvider>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const { theme } = appContext.ctx.req
    ? (appContext.ctx.req as any).cookies
    : { theme: "light" };

  const validThemes = ["light", "dark", "custom"];

  return {
    theme: validThemes.includes(theme) ? theme : "dark",
  };
};
