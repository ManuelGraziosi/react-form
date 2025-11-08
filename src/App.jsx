import { useState } from 'react'
import './App.css'
import initialBlogPosts from './assets/listOfPost'

function App() {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);

  const [newPost, setnewPost] = useState("");

  function addNewPost(event) {
    event.preventDefault();
    console.log("AGGIUNGI");
    const lastPostId = blogPosts[blogPosts.length - 1].id;
    const newPostToAdd = {
      id: lastPostId + 1,
      titolo: newPost,
      contenuto: "Nuova aggiunta, da completare"
    }
    setBlogPosts((prev) => [...prev, newPostToAdd]);
  }

  return (
    <>
      <h1>React Form</h1>
      <div className="container">
        <div className='mt-5'>
          <h2>Inserisci un nuovo articolo</h2>
          <form className="d-flex align-items-center gap-2" onSubmit={addNewPost}>
            <input type="text" className='form-control' id="inputNewPost" value={newPost} onChange={(event) => setnewPost(event.target.value)} />
            <div id="inputNewPost" className="form-text">titolo da aggiungere alla lista</div>
            <button type='submit' className='btn btn-primary'>Aggiungi</button>
          </form>
        </div>
        {/* Sezione LIsta Articoli */}
        <div className='mt-5'>
          <h2>Elenco Articoli:</h2>
          <ul className="list-group">
            {
              blogPosts.map((curPost) => (
                <li key={curPost.id} className="list-group-item">{curPost.titolo}</li>
              ))
            }

          </ul>
        </div>
      </div>
    </>
  )
}

export default App
