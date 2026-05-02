import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Star, GitFork, ExternalLink, Loader2, AlertCircle } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

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
  const response = await fetch('https://api.github.com/users/Alphcast/repos?sort=updated&per_page=6')
  if (!response.ok) throw new Error('Failed to fetch repositories')
  return response.json()
}

const languageColors: Record<string, string> = {
  TypeScript: 'bg-blue-500', JavaScript: 'bg-yellow-500', Python: 'bg-green-500',
  HTML: 'bg-orange-500', CSS: 'bg-pink-500', SCSS: 'bg-purple-500',
  Java: 'bg-red-500', 'C++': 'bg-pink-600', PHP: 'bg-indigo-500', Go: 'bg-cyan-500', Rust: 'bg-orange-600',
}

export function GitHubReposSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { data: repos, isLoading, error } = useQuery({
    queryKey: ['github-repos'],
    queryFn: fetchGitHubRepos,
    staleTime: 1000 * 60 * 30,
  })

  return (
    <section className={`py-14 sm:py-20 md:py-24 lg:py-32 transition-colors duration-300 ${isDark ? 'text-surface-100' : 'text-surface-900'}`}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Open Source</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-6 px-2">
            GitHub<span className="gradient-text"> Repositories</span>
          </h2>
          <p className={`text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4 ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>
            Explore my open-source contributions and personal projects on GitHub.
          </p>
        </motion.div>

        {isLoading && (
          <div className="flex items-center justify-center py-12 sm:py-16">
            <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 animate-spin" />
            <span className={`ml-2 sm:ml-3 text-sm sm:text-base ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>Loading repositories...</span>
          </div>
        )}

        {error && (
          <div className={`flex items-center justify-center py-12 sm:py-16 text-sm sm:text-base ${isDark ? 'text-error' : 'text-red-600'}`}>
            <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            <span className="text-center px-4">Failed to load repositories. Please try again later.</span>
          </div>
        )}

        {repos && repos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`group p-4 sm:p-6 rounded-2xl border transition-all duration-300 block hover:border-primary-500/30 ${
                  isDark ? 'bg-surface-900/50 border-surface-800/50 hover:shadow-lg hover:shadow-primary-500/5' : 'bg-white border-surface-200 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
                    <Github className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${isDark ? 'text-surface-400' : 'text-surface-600'}`} />
                    <h3 className={`text-sm sm:text-lg font-semibold group-hover:text-primary-400 transition-colors truncate ${isDark ? 'text-white' : 'text-surface-900'}`}>{repo.name}</h3>
                  </div>
                  <ExternalLink className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity ${isDark ? 'text-surface-500' : 'text-surface-400'}`} />
                </div>

                <p className={`text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>{repo.description || 'No description available'}</p>

                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span key={topic} className={`px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-[10px] sm:text-xs ${isDark ? 'bg-primary-500/10 text-primary-400' : 'bg-primary-50 text-primary-600'}`}>{topic}</span>
                    ))}
                  </div>
                )}

                <div className={`flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm ${isDark ? 'text-surface-500' : 'text-surface-500'}`}>
                  {repo.language && (
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <span className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${languageColors[repo.language] || 'bg-surface-500'}`} />
                      <span>{repo.language}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1"><Star className="w-3.5 h-3.5 sm:w-4 sm:h-4" /><span>{repo.stargazers_count}</span></div>
                  <div className="flex items-center gap-1"><GitFork className="w-3.5 h-3.5 sm:w-4 sm:h-4" /><span>{repo.forks_count}</span></div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
