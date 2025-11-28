import "./globals.css";

export const metadata = {
  title: "VuongNguyen: Download TikTok Video Without Watermark",
  description:
    "TikTok video downloader by VuongNguyen – fast, simple and free. Download TikTok videos without watermark on all devices.",

  alternates: {
    canonical: "https://www.vuongnguyen.info",
  },

  icons: {
    icon: "/favicon.ico",
  },

  // Twitter
  twitter: {
    card: "summary",
    title: "VuongNguyen: TikTok Video Downloader Without Watermark",
    description:
      "Free TikTok downloader by VuongNguyen. Support Android, iPhone, PC and Mac.",
    images: ["https://www.vuongnguyen.info/og-image.png"],
    site: "@vuongnguyen",
  },

  // Open Graph (Facebook / Zalo / iMessage)
  openGraph: {
    type: "website",
    url: "https://www.vuongnguyen.info",
    title: "VuongNguyen: Download TikTok Video Without Watermark",
    siteName: "VuongNguyen",
    description:
      "TikTok downloader by VuongNguyen – fast, clean UI, no watermark, no ads.",
    images: [
      {
        url: "https://www.vuongnguyen.info/og-image.png",
        width: 600,
        height: 600,
        type: "image/png",
      },
    ],
    locale: "en_US",
  },

  // Author
  authors: [{ name: "VuongNguyen" }],

  // Extra metas
  // other: {
  //   google: "notranslate",
  //   "msvalidate.01": "4C885882F5B158ECFDAFE8DFCCC14E5E",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />

        {/* Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&family=Source+Sans+Pro:wght@400;600;700;900&display=swap"
        />

        {/* Boxicons */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
