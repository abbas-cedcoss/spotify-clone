import React, { useEffect } from 'react'

function Search() {
  
  useEffect(() => {
    console.log('mounted')
  }, [])
  
  return (
    <div>Search</div>
  )
}

export default Search