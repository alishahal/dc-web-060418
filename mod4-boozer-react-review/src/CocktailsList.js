import React from 'react'
import { Menu, List } from 'semantic-ui-react'

const CocktailsList = ({ cocktails, handleLiClick }) => {
	return (
		<List bulleted>
			{cocktails.map(cocktail => {
				return (
					<List.Item
						key={cocktail.id}
						onClick={() => handleLiClick(cocktail.id)}>
						{cocktail.name}
					</List.Item>
				)
			})}
		</List>
	)
}

export default CocktailsList
