import React from "react";
import { connect } from "react-redux";

const Searchbar = props => {
  return (
    <input
      id="search"
      type="text"
      onChange={props.onChange}
      value={props.value}
    />
  );
};

const mapStateToProps = state => ({ value: state.searchTerm });
const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch({ type: "UPDATE_SEARCH_TERM", value: event.target.value })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar);
