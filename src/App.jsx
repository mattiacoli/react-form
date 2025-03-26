import { useState } from 'react'
import posts from './data/posts'

function App() {


  return (
    <>
      <h1 className='text-center my-3'>My Blog</h1>

      <div className="container">
        <ul className="list-group list-group-numbered">
          {
            posts.map(post => (
              <li key={post.id} className="list-group-item fs-4 fw-semibold">{post.title}</li>
            ))
          }

        </ul>
      </div>



    </>
  )
}

export default App
