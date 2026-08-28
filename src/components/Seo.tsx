import { useEffect } from 'react'

function setMeta(attr: string, key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Ustawia tytuł, description, canonical i tagi OG dla danej podstrony. */
export function Seo({
  title,
  description,
  path = '/',
}: {
  title: string
  description: string
  path?: string
}) {
  useEffect(() => {
    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)

    const origin = typeof window !== 'undefined' ? window.location.origin : ''
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = `${origin}${path}`
    setMeta('property', 'og:url', `${origin}${path}`)
  }, [title, description, path])

  return null
}

/** Dane strukturalne schema.org — LocalBusiness. */
export function LocalBusinessJsonLd(props: {
  name: string
  legalName: string
  phone: string
  email: string
  street: string
  postal: string
  city: string
  description: string
  image: string
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: props.name,
    legalName: props.legalName,
    description: props.description,
    image: props.image,
    telephone: props.phone,
    email: props.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: props.street,
      postalCode: props.postal,
      addressLocality: props.city,
      addressCountry: 'PL',
    },
    areaServed: 'PL',
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
