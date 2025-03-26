import { useState } from 'react'

const titlesList = ["First Post", "Learning React", "Understanding State", "React Hooks", "Building Components"];

function App() {

  const [newTitle, setNewTitle] = useState('');

  const [titles, setTitles] = useState(titlesList);

  const [error, setError] = useState(null)

  const [editIndex, setEditIndex] = useState(null)

  function handleDelete(index) {
    setTitles(titles.filter((_, i) => i !== index));
  }

  function handleEdit(index) {
    setEditIndex(index)
    setNewTitle(titles[index])

  }




  function handleForm(e) {

    e.preventDefault()

    console.log(newTitle);

    if (newTitle.length <= 4) {
      setError('Error! Task must be at leat 5 character long')
    } else {
      setError(null)

      setTitles([newTitle, ...titles])

      console.log(titles);

      setNewTitle('')
    }


  }

  return (

    <>
      <h1 className='text-center my-3 fw-bolder text-info'>My Blog</h1>


      <div className="container">
        {error !== null ? (<div className='alert alert-danger'>{error}</div>) : ''}
        <ul className="list-group">
          {
            titles.map((title, index) => (
              <li key={index} className="list-group-item fs-4 fw-semibold d-flex justify-content-between">
                {title}

                <div className="actions">

                  <button type="button"
                    class="btn btn-warning mx-3"
                    onClick={() => handleEdit(index)}
                  >Edit</button>

                  <button type="button"
                    class="btn btn-danger"
                    onClick={() => handleDelete(index)}>Delete</button>
                </div>


              </li>

            )
            )}
        </ul>

        <form className="d-flex mt-5" onSubmit={handleForm}>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="" className="form-label fw-bold fs-3">Add New Post Title</label>



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
