import PeopleList from './components/PeopleList'
import ProductList from './components/ProductList'
import './App.css'

function App() {
  const numberOfRowsToRender = 5;

  return (
    <>
      <h1>FRONTEND PERFORMANCE (REACT)</h1>

      <PeopleList numberOfRowsToRender={numberOfRowsToRender} />
      <ProductList numberOfRowsToRender={numberOfRowsToRender} />
    </>
  )
}

export default App
