import React from 'react';
import manageBand from './manageBand'


describe('manageBand', ()=> {
  it('no bands have been added', ()=>{
    let action = {type:'@@INIT'}
    expect(manageBand(undefined, action)).toEqual({"bands": []})
  })
  it('adds a band to bands array', ()=>{
    let action = {type:'ADD_BAND', name:"Griz"}
    expect(manageBand({bands:[]}, action)).toEqual({bands:[{id: 0.1, name:"Griz"}]})
  })
  it('deleteBand deletes a band from the array', ()=>{
    let action = {type:'DELETE_BAND', id:0.1}
    expect(manageBand({bands:[{id: 0.1, name:"Griz"}]}, action)).toEqual({"bands": []})
  })
})
