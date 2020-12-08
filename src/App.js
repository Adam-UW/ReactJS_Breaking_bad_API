import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLodoing] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      console.log(result.data)
      setItems(result.data)
      setIsLodoing(false)
    }

    fetchItem()
  }, [query])
  return (
    <div className='App'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
