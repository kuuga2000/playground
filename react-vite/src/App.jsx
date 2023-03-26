import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header message="This is Header" />
      <Content />
      <Footer message="This is Footer" />
    </div>
  )
}

export default App
