import React, { Component } from 'react';
// import 'isomorphic-fetch'
import Films from './Films'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
      loadFilms: false,
      people: [],
      loadPeople: false
    }

  }

  loadFilms() {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(json => {
      this.setState({
        loadFilms: true,
        films: json,
      })
    })
    .catch(err => (err))
  }

  loadPeople() {
    fetch('https://ghibliapi.herokuapp.com/people')
    .then(res => res.json())
    .then(json => {
      this.setState({
        loadPeople: true,
        people: json,
      })
    })
    .catch(err => (err))
  }

  render() {

    var { loadFilms, films } = this.state

    if (loadFilms) {
      return (
        <div class="App">
          
          <ul>
            {films.map(film => (
  
              <Films title={film.title}
                description={film.description}
                director={film.director}
                producer={film.producer}
                release_date={film.release_date} />
  
            ))}
          </ul>
  
  
        </div>
      )
    } else {
      return (
        <>
        <button id="Load_Films" onClick={() => {films}} >Load Films</button>
        <button id="Load_people" onClick={() => {people}} >Load People</button>
        </>

      )

    }

  }

}

var { loadPeople, people } = this.state

if (loadPeople) {
  return (
    <div class="App">
      
      <ul>
        {people.map(people => (

          <People name={people.name}
            gender={people.gender}
            age={people.age}/>

        ))}
      </ul>


    </div>
  )
} else {
  return (
    <>
    <button id="Load_Films" onClick={(e) => console.log(e)} >Load Films</button>
    <button id="Load_Films" onClick={(e) => console.log(e)} >Load People</button>
    </>

  )

}




export default App
