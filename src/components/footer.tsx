import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border dark:border-border-dark bg-background dark:bg-background-dark py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-foreground">Dey.dev</p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Center: Navigation Links (Optional) */}
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <Button size="icon" variant="ghost" asChild>
            <Link href="https://github.com/Priyangshu1808" target="_blank" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </Link>
          </Button>

          <Button size="icon" variant="ghost" asChild>
            <Link href="https://linkedin.com/in/priyangshu-dey-a0aa4137b" target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </Link>
          </Button>

          <Button size="icon" variant="ghost" asChild>
            <Link href="mailto:kolondey.dey@gmail.com" aria-label="Email">
              <Mail className="w-5 h-5" />
            </Link>
          </Button>

           <Button size="icon" variant="ghost" asChild>
            <Link href="https://instagram.com/priyangshu.dey1808" target="_blank" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </Link>
          </Button>
          
        </div>
      </div>
    </footer>
  )
}
