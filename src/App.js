import React, { useState } from 'react';
// import { Route } from 'react-router';
import Accordian from './components/Accordian';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

export default () => {

  const items = [
    {
      title: 'What is React?',
      content: 'Its a javascript library'
    },
    {
      title: 'Why use React?',
      content: 'To have good reusable code'
    }
  ]

  const options = [
    {
      label: 'this value is red',
      value: 'red'
    },
    {
      label: 'this value is green',
      value: 'green'
    },
    {
      label: 'this value is blue',
      value: 'blue'
    }
  ]

  const [selected, setSelected] = useState(options[0])
  const [showDropdowm, setShowDropdowm] = useState(true)

  return (
    <div>
      <Header />
      <Route path='/'>
      <Accordian items={items}/>
      </Route>
      <Route path='/list'>
      <Search/> 
      </Route>
      <Route path='/dropdown'>
      <Dropdown 
      selected= { selected }
      onSelected={setSelected}
      options={options}
      label='Select Color'/> 
      {/* <button onClick={()=>setShowDropdowm(!showDropdowm)} className='ui button'>Toggle Dropdown</button>
      {showDropdowm ? 
      <Dropdown 
      selected= { selected }
      onSelected={setSelected}
      options={options}
      label='Select Color'/> 
      :
      null
      } */}
      </Route>
      <Route path='/translate'><Translate /></Route>
    </div>
  )
}