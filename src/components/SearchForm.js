import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  })
  const searcgCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section className="section search">
      <form className="search-form" onChange={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input 
            type="text" 
            id="name" 
            ref={searchValue}
            onChange={searcgCocktail}  
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm