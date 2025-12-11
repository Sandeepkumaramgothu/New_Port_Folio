export default function Footer() {
    return (
        <footer className="py-8 border-t border-border bg-background text-center">
            <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Sandeep Kumar. Built with Next.js, Tailwind & Shadcn/UI.
            </p>
        </footer>
    )
}
