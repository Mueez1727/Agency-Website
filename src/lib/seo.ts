import { seo as defaults } from '../config'

export function setPageMeta(options?: { title?: string; description?: string }) {
  const title = options?.title ?? defaults.title
  const description = options?.description ?? defaults.description

  document.title = title

  const setMeta = (selector: string, content: string, attribute = 'name') => {
    const key = selector.includes('property=') ? 'property' : attribute
    const value = selector.replace(/^(name|property)=/, '')
    let tag = document.head.querySelector(`meta[${key}="${value}"]`)
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute(key, value)
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
  }

  setMeta('name=description', description)
  setMeta('property=og:title', title)
  setMeta('property=og:description', description)
  setMeta('name=twitter:title', title)
  setMeta('name=twitter:description', description)
}
