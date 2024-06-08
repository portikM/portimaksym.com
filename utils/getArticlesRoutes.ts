import fs from 'fs'
import type { NuxtPage } from '@nuxt/schema'

/**
 * @description Go through the articles directory and create an array of NuxtPage objects for each article
 * @returns Array<NuxtPage> - Array of NuxtPage objects
 */
export function getArticlesRoutes(): Array<NuxtPage> {
  const articleRouteComponent = '~/pages/_article.vue'
  const articleRoutes: Array<NuxtPage> = []

  fs.readdirSync('./content/articles/').forEach(file => {
    if (file !== 'README.md') {
      articleRoutes.push({
        name: file.replace('.md', ''),
        path: `/${file.replace('.md', '')}`,
        file: articleRouteComponent,
      })
    }
  })

  return articleRoutes
}