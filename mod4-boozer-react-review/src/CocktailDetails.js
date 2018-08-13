import React from 'react'
import { Item, Image } from 'semantic-ui-react'

const CocktailDetails = ({ cocktail }) => {
	console.log(cocktail)
	const { name, description, instructions, proportions } = cocktail
	return (
		<Item.Group>
			<Item>
				<Item.Image size="tiny" src="/images/wireframe/image.png" />
				<Item.Content>
					<Item.Header>{name}</Item.Header>
					<Item.Description>{description}</Item.Description>
					<Item.Description>Ingredients:</Item.Description>
					{proportions.map(prop => {
						return (
							<Item.Meta key={prop.id}>
								{prop.amount} of {prop.ingredient_name}
							</Item.Meta>
						)
					})}
					<Item.Description>Instructions:</Item.Description>
					<Item.Meta>{instructions}</Item.Meta>
				</Item.Content>
			</Item>
		</Item.Group>
	)
}

export default CocktailDetails
