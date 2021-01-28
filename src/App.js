
import React, {useState} from 'react'
import FormField from './components/FormField'
import Header from './components/Header'
import Container from "@material-ui/core/Container";
import Option from './components/Option'
function App(){


  const state = {
    option:['TEST','TEST2'],
  }

  return(
  <div>
    <Container maxWidth='md'>
    <Header/>
    <Option option={state.option} />
    <FormField option={state.option}/>
    </Container>
  </div>

  )
}
export default App;
