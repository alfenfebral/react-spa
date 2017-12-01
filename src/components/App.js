import React from 'react'
import Header from './Header'
import Main from './Main'
import { Container } from 'bloomer'
import 'bulma/css/bulma.css'

const App = () => (
  <div>
    <Header />
    <Container>
      <Main />
    </Container>
  </div>
)

export default App