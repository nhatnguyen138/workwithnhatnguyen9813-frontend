import './_styles.scss'

export default function TechPreferences() {
  return (
    <div className="Section TechPreferences">
      <div className="SectionWidth">
        <div className="Unselectable Heading">Tech Preferences</div>
        <div className="ContentBox">
          <div className="Row">
            <div className="Image">
              <img className="Unselectable TechImage React" src="/logos/react.png" alt="icon-react" />
            </div>
            <span>React, React Hooks, React Router, PWA, Redux, Jest</span>
          </div>
          <div className="Row">
            <div className="Unselectable  Image">
              <img className="TechImage" src="/logos/html5.png" alt="icon-html5" />
              <img className="TechImage" src="/logos/js.png" alt="icon-js" />
              <img className="TechImage" src="/logos/ts.png" alt="icon-ts" />
            </div>
            <span>HTML5, JavaScript (ES6), jQuery, TypeScript</span>
          </div>
          <div className="Row">
            <div className="Unselectable Image">
              <img className="TechImage" src="/logos/css.png" alt="icon-css" />
              <img className="TechImage" src="/logos/sass.png" alt="icon-sass" />
              <img className="TechImage" src="/logos/bootstrap.png" alt="icon-bootstrap" />
            </div>
            <span>CSS, SASS/LESS, Bootstrap</span>
          </div>
          <div className="Row">
            <div className="Unselectable Image">
              <img className="TechImage" src="/logos/nodejs.png" alt="icon-nodejs" />
            </div>
            <span>NodeJS, Express, Axios, npm, yarn</span>
          </div>
          <div className="Row">
            <div className="Unselectable Image">
              <img className="TechImage" src="/logos/mongodb.png" alt="icon-mongodb" />
              <img className="TechImage" src="/logos/graphql.png" alt="icon-graphql" />
              <img className="TechImage" src="/logos/mysql.png" alt="icon-mysql" />
            </div>
            <span>MongoDB, RESTful APIs, GraphQL, SQL, PostgresSQL</span>
          </div>
          <div className="Row">
            <div className="Unselectable Image">
              <img className="TechImage" src="/logos/git.png" alt="icon-git" />
              <img className="TechImage" src="/logos/github.png" alt="icon-github" />
            </div>
            <span>Version Control, Git, GitHub</span>
          </div>
        </div>
      </div>
    </div>
  )
}
