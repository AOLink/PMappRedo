import React from 'react'

function ProjectDetails(props) {
    // console.log(props)
    const id = props.match.params.id; 
    return (
      <div className="container section project-details">
          <div className="card-content">
              <span className="card-title">Project Title - {id}</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cum eaque. Soluta, labore placeat enim commodi consequatur sequi fugit dolore quaerat cupiditate. Similique non enim id? Praesentium corrupti excepturi culpa!</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
              <div>Posted by Me</div>
              <div>2nd September, 2am</div>
          </div>
      </div>
    )
}

export default ProjectDetails
