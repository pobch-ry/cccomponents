import React from 'react'
import ReactDOM from 'react-dom'
import { Card } from './components'

function App() {
  return (
    <div>
      <Card>
        Test Card
        <br />
        Test Card
      </Card>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
