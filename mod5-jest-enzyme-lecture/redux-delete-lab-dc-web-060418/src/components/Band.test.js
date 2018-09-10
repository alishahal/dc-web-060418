import React from 'react'
import Band from './Band'

const props={id:1, name:'Imogen Heap'}

describe('Band', ()=>{
  const band = shallow(<Band {...props} />)
  it('displays the band name', ()=>{
    expect(band.find('li').text()).toEqual('Imogen Heap')
  })
})
