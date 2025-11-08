import { useState } from 'react'
import './App.css'
import initialBlogPosts from './assets/listOfPost'

function App() {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);

  const [newArticle, setNewArticle] = useState("");

  return (
    <>
      <h1>React Form</h1>
      <div className="container">
        <div className='mt-5'>
          <h2>Inserisci un nuovo articolo</h2>
          <form className="d-flex align-items-center gap-2">
            <input type="text" value={newArticle} onChange={(event) => setNewArticle(event.target.value)} />
            <button className='btn btn-primary'>Aggiungi</button>
          </form>
        </div>
        {/* Sezione LIsta Articoli */}
        <div className='mt-5'>
          <h2>Elenco Articoli:</h2>
          <ul className="list-group">
            {
              blogPosts.map((curBlog) => (
                <li key={curBlog.id} className="list-group-item">{curBlog.titolo}</li>
              ))
            }

          </ul>
        </div>
      </div>
    </>
  )
}

export default App
