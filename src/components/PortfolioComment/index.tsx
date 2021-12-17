import './_styles.scss'

interface PortfolioCommentProps {
  img: string,
  comment: string,
  name: string,
  relation: string,
  title: string,
  contact?: string
}

export default function PortfolioComment(props:PortfolioCommentProps) {
  const { img, comment, name, relation, title, contact } = props
  return (
    <div className="PortfolioComment">
      <img className="Image" src={`/portfolio/comment-${img}.jpg`} alt={img} />
      <p className="Comment">{comment}</p>
      <div className="Profile">
        <p className="Name">{name}</p>
        <p className="Relation">&#40;{relation}&#41;</p>
        <span className="Title">{title}</span>
        <span className="Contact">{contact}</span>
      </div>
    </div>
  )
}
