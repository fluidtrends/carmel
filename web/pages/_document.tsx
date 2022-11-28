import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-black text-black dark:bg-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MainDocument;