import './globals.css'

export const metadata = {
  title: 'BlueChat',
  description: 'Chat application interface',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
