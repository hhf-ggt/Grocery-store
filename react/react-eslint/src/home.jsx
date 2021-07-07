import React, { useEffect, useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = 'home'
  })

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>+</button>
      <button type="button" onClick={() => setCount(count - 1)}>+</button>
    </div>
  )
}

export default Home
