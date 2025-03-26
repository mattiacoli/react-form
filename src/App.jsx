import { useState } from 'react'

const titlesList = ["First Post", "Learning React", "Understanding State", "React Hooks", "Building Components"];

function App() {

  const [newTitle, setNewTitle] = useState('');

  const [titles, setTitles] = useState(titlesList)

  function handleForm(e) {
    e.preventDefault()
    console.log(newTitle);

    setTitles([newTitle, ...titles])

    console.log(titles);


    setNewTitle('')

  }

  return (

    <>
      <h1 className='text-center my-3 fw-bolder text-info'>My Blog</h1>

      <div className="container">
        <ul className="list-group list-group-numbered">
          {
            titles.map((title, index) => (
              <li key={index} className="list-group-item fs-4 fw-semibold">{title}</li>
            )
            )}
        </ul>

        <form className="d-flex mt-5" onSubmit={handleForm}>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="" className="form-label fw-bold fs-3">Add New Post Title</label>

              <p>{newTitle}</p>

              <div className="d-flex gap-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}

                />
                <button className='btn btn-primary'>Add</button>
              </div>
            </div>

          </div>
        </form>




      </div>



    </>
  )
}

export default App
