// app/head.js

export default function Head() {
  return (
    <>
      <title>Caffeinated Sarcasm Co. | Funny Quotes & Bold Merch for Tired People</title>
      <meta name="description" content="Caffeinated Sarcasm Co. delivers snarky, coffee-fueled designs on shirts, books, and more. COFFEE. SARCASM. REPEAT." />
      <meta name="keywords" content="funny quotes, sarcastic gifts, coffee lovers, snarky merch, t-shirts, coloring books, Etsy, Redbubble, TeePublic" />
      <meta name="author" content="Caffeinated Sarcasm Co." />
      <meta name="google-site-verification" content="IaexImF9uk3mQ7RtfOnnEw8L6IwbopIlC5nDLQAae44" />

      {/* Open Graph */}
      <meta property="og:title" content="Caffeinated Sarcasm Co." />
      <meta property="og:description" content="Sarcastic quotes and funny merch for coffee-fueled humans." />
      <meta property="og:image" content="/images/angry-coffee-cup.png" />
      <meta property="og:url" content="https://caffeinated-sarcasm.vercel.app/" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      {/* Social profiles for preview and SEO */}
      <meta name="instagram:site" content="https://www.instagram.com/caffeinatedsarcasmco/" />
      <meta name="tiktok:site" content="https://www.tiktok.com/@caffeinated_sarcasm_co" />
      <meta name="pinterest:site" content="https://pin.it/5aKUMLScS" />
      <meta name="youtube:channel" content="https://www.youtube.com/channel/UCbutJWboiMFd60QDP3ykbMA" />

      {/* Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
