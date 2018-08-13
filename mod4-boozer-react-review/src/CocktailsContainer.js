import React from 'react'
import CocktailsList from './CocktailsList'
import CocktailDetails from './CocktailDetails'
import CocktailForm from './CocktailForm'
import SearchBar from './SearchBar'

import { Grid, Segment } from 'semantic-ui-react'

class CocktailsContainer extends React.Component {
	state = {
		allCocktails: [],
		searchTerm: '',
		selectedCocktail: null
	}

	handleLiClick = cocktailId => {
		fetch(`http://localhost:3000/api/v1/cocktails/${cocktailId}`)
			.then(resp => resp.json())
			.then(json => this.setState({ selectedCocktail: json }))
	}
	handleInputChange = e => {
		this.setState({ searchTerm: e.target.value })
	}

	filterCocktails = () => {
		return this.state.allCocktails.filter(cocktail => {
			return cocktail.name
				.toLowerCase()
				.includes(this.state.searchTerm.toLowerCase())
		})
	}
	componentDidMount() {
		fetch('http://localhost:3000/api/v1/cocktails')
			.then(resp => resp.json())
			.then(json => this.setState({ allCocktails: json }))
	}
	render() {
		return (
			<Grid columns={2} divided>
				<Grid.Row stretch>
					<Grid.Column width={4}>
						<Segment>
							<SearchBar
								handleInputChange={this.handleInputChange}
								value={this.state.searchTerm}
							/>
						</Segment>
						<Segment>
							<CocktailsList
								handleLiClick={this.handleLiClick}
								cocktails={this.filterCocktails()}
							/>
						</Segment>
					</Grid.Column>
					<Grid.Column width={12}>
						<Segment>
							{this.state.selectedCocktail ? (
								<CocktailDetails cocktail={this.state.selectedCocktail} />
							) : null}
						</Segment>
						<Segment>
							<CocktailForm />
						</Segment>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

export default CocktailsContainer

//
