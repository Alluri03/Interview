import Providers from "./providers";

export const metadata = { title: "Next 15 Interview" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, Arial, sans-serif" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
