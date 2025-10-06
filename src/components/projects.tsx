'use client'

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

type Repo = {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  topics?: string[]
  homepage?: string
}

export default function Project() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/priyangshu1808/repos")
        if (!res.ok) throw new Error("Failed to fetch projects.")
        const data = await res.json()
      console.log("data", data)

        setRepos(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const sectionRef = useRef(null)
  const sectionInView = useInView(sectionRef, { threshold: 0.2 }as any)

  if (loading) return <div className="text-center py-10">Loading projects...</div>
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>

  return (
    <section
      id="projects"
      // ref={sectionRef}
      // animate={sectionInView ? 'visible' : 'hidden'}
      // initial="hidden"
      // variants={{
      //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      //   hidden: { opacity: 0, y: 50, transition: { duration: 0.5, ease: "easeInOut" } },
      // }}
      className="py-20 bg-background dark:bg-background-dark"
    >
      
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeInCard delay={0.1}>
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground dark:text-foreground-dark">
          Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Here are some of my projects that I have worked on.
        </p>
        </FadeInCard>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, index) => (
            <FadeInCard key={repo.id} delay={index * 0.1}>
              <Card className="group h-full transition-transform duration-300 ease-in-out hover:scale-[1.025] shadow-md hover:shadow-xl border-border dark:border-border-dark">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground dark:text-foreground-dark">
                      {repo.name}
                    </h3>
                    {repo.homepage && (<Link href={repo.homepage} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>)}
                  </div>

                  <p className="text-muted-foreground mb-4 flex-1">
                    {repo.description ?? "No description provided."}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.language && (
                      <Badge variant="outline" className="text-xs border-muted-foreground text-muted-foreground">
                        {repo.language}
                      </Badge>
                    )}
                    {repo.topics?.slice(0, 3).map((topic) => (
                      <Badge
                        key={topic}
                        variant="outline"
                        className="text-xs border-muted-foreground text-muted-foreground"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline mt-auto"
                  >
                    View Source →
                  </Link>
                </CardContent>
              </Card>
            </FadeInCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// ⬇️ Reusable card fade wrapper
function FadeInCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.15 } as any)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}
