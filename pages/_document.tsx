import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=League+Spartan&display=swap"
        />
        <link
          href="https://fonts.cdnfonts.com/css/baron-neue"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/fav/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/fav/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/fav/favicon-16x16.png"
        />
        <link rel="manifest" href="/fav/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/fav/safari-pinned-tab.svg"
          color="#5bbad5"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
