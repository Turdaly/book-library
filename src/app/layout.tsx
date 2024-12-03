import "./globals.css";
import { Providers } from "./redux/provider";
import { store } from "./redux/store";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers store={store}>{children}</Providers>
      </body>
    </html>
  );
}