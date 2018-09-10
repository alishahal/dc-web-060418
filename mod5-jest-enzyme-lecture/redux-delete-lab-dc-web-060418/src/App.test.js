import React from 'react';
import App from './App'

describe('App',()=>{
  const app = shallow(<App />)

  it('renders the BandsContainer', () =>{
    expect(app.find('Connect(BandsContainer)').exists()).toBe(true)
  })
})
