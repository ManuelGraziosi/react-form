import { useState } from 'react'
import './App.css'
import blogPosts from './assets/listOfPost'

function App() {

  return (
    <>
      <h1>React Form</h1>
      <div className="container">
        <h2>Elenco Articoli:</h2>
        <ul className="list-group">
          {
            blogPosts.map((curBlog) => (
              <li key={curBlog.id} className="list-group-item">{curBlog.titolo}</li>
            ))
          }

        </ul>
      </div>
    </>
  )
}

export default App
