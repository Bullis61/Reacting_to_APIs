import React, { PureComponent } from 'react'


const Films = (props) => {
    return (
         <div class="card mb-3">
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.description}</p>
    <p class="card-text"><small class="text-muted">Release date {props.release_date}</small></p>
    <p class="card-text"><small class="text-muted">Directed by {props.director}</small></p>
    <p class="card-text"><small class="text-muted">Produced by {props.producer}</small></p>
  </div>
</div> 

    )
}

export default Films