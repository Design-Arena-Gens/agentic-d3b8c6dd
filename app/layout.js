export const metadata = {
  title: 'Jogerő a szabálysértési törvény alapján',
  description: 'Prezentáció a jogerő fogalmáról és szerepéről a szabálysértési eljárásban',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
