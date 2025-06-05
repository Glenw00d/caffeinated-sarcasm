export const metadata = {
  title: "Caffeinated Sarcasm Co.",
  description: "Bold sarcasm for tired humans ☕",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
