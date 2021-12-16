import { Helmet } from 'react-helmet'
import Logo from './logo192.png'

interface MetaTagsProps {
  section?: string,
  description: string,
  image: string
}

const SiteTitle = "Work with @nhatnguyen9813"
const SiteUrl = "workwithnhatnguyen9813.net"

export default function MetaTags(props:MetaTagsProps) {
  const { section, description, image } = props
  let title = section || ""
  section!=="" ? title+=` | ${SiteTitle}` : title=`${SiteTitle}`
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href={Logo} />
      <link rel="apple-touch-icon" href={Logo} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" viewport-fit="cover" />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" itemProp="image" content={image} />
      <meta property="og:url" content={SiteUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" itemProp="image" content={image} />
      <meta property="twitter:url" content={SiteUrl} />
    </Helmet>
  )
}
