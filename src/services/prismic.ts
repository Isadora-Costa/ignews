import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'

export const repositoryName = 'ignews142'
export const endpoint = prismic.getRepositoryEndpoint(repositoryName)

export function getPrismicClient(req?: any, previewData?: any) {
  const client = prismic.createClient(
    endpoint,
    { accessToken: process.env.PRISMIC_ACCESS_TOKEN }
  )

  enableAutoPreviews({ client, req, previewData })

  return client;
}