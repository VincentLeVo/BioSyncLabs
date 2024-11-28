import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - BioSync Labs',
    default: 'BioSync Labs - Innovative Testing Solutions',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/ranade@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The BioSync Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="bg-slate-50 text-gray-950 antialiased">{children}</body>
    </html>
  )
}
