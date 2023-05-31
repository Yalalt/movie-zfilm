import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect, useState } from 'react'

import { fetchDataFromApi } from './utils/api'

function App() {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular')
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <div className='App'>
      App
      <img src={reactLogo} alt='ReactLogo' />
    </div>
  )
}

export default App
