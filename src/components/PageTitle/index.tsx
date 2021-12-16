import './_styles.scss';

interface PageTitleProps {
  title: string,
  subtitle?: string
}

export default function PageTitle(props:PageTitleProps) {
  const { title, subtitle } = props
  return (
    <article className="PageTitle">
      <h1 className="Title">{title}</h1>
      {subtitle && <p className="Subtitle">{subtitle}</p>}
    </article>
  )
}
