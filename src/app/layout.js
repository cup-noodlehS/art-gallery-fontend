import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FASO | GALLERY",
  description: "An art auction website for artists and art enthusiasts.",
  keywords: "art, auction, artists, gallery, art enthusiasts, paintings, sculptures",
  author: "Sheldon Arthur Sagrado",
  viewport: "width=device-width, initial-scale=1.0",
  ogTitle: "FASO | GALLERY",
  ogDescription: "An art auction website for artists and art enthusiasts.",
  // ogUrl: "https://www.faso-gallery.com",
  // ogImage: "/images/og-image.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        {/* <meta property="og:url" content={metadata.ogUrl} />
        <meta property="og:image" content={metadata.ogImage} /> */}
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap`}
        />
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
      </head>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
