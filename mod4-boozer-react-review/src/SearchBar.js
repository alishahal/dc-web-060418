import React from 'react'
import { Input } from 'semantic-ui-react'

const SearchBar = ({ value, handleInputChange }) => {
	return (
		<Input
			onChange={handleInputChange}
			value={value}
			placeholder="Find a cocktail..."
		/>
	)
}

export default SearchBar
