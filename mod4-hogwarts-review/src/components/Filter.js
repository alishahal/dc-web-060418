import React from "react";

const Filter = (props) =>{
  return (
    <div className="filterWrapper">
      <form onChange={props.handleChange}>
        <label>Sort By: </label>
        <select name="sort" >
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <label>Greased Pigs Only?</label>
        <input type="checkbox" value="greased" />
      </form>
    </div>
  );
}

export default Filter;
