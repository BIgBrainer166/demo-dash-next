import '@/app/ui/global.css'
import { JBMono, inter } from './ui/fonts'
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${JBMono.className} antialiased`}>{children}</body>
		</html>
	)
}
