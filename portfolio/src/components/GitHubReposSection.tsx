import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Star, GitFork, ExternalLink, Loader2, AlertCircle } from 'lucide-react'

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
  topics: string[]
}

async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const response = await fetch(
    'https://api.github.com/users/Alphcast/repos?sort=updated&per_page=6'
  )
  if (!response.ok) {
    throw new Error('Failed to fetch repositories')
  }
  return response.json()
}

const languageColors: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-500',
  Python: 'bg-green-500',
  HTML: 'bg-orange-500',
  CSS: 'bg-pink-500',
  SCSS: 'bg-purple-500',
  Java: 'bg-red-500',
  'C++': 'bg-pink-600',
  PHP: 'bg-indigo-500',
  Go: 'bg-cyan-500',
  Rust: 'bg-orange-600',
}

export function GitHubReposSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { data: repos, isLoading, error } = useQuery({
    queryKey: ['github-repos'],
    queryFn: fetchGitHubRepos,
    staleTime: 1000 * 60 * 30,
  })

  return (
    <section className="py-20 sm:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Open Source</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            GitHub
            <span className="gradient-text"> Repositories</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            Explore my open-source contributions and personal projects on GitHub.
          </p>
        </motion.div>

        {isLoading && (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-8 h-8 text-primary-400 animate-spin" />
            <span className="ml-3 text-surface-400">Loading repositories...</span>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center py-16 text-error">
            <AlertCircle className="w-6 h-6 mr-2" />
            <span>Failed to load repositories. Please try again later.</span>
          </div>
        )}

        {repos && repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-surface-900/50 border border-surface-800/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5 block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-surface-400" />
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors truncate">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-surface-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="text-surface-400 text-sm mb-4 line-clamp-2 min-h-[40px]">
                  {repo.description || 'No description available'}
                </p>

                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 rounded-full bg-primary-500/10 text-primary-400 text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 text-sm text-surface-500">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <span className={`w-3 h-3 rounded-full ${languageColors[repo.language] || 'bg-surface-500'}`} />
                      <span>{repo.language}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
