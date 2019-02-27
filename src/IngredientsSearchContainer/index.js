import React, { Component } from 'react'
import IngredientsSearch from '../IngredientsSearch'
import IngredientsResults from '../IngredientsResults'


class IngredientsSearchContainer extends Component {
	constructor () {
		super()

		this.state ={
			ing_id: '',
			ing_name: '',
			ing_type: '',
		}
	}

	searchIngredients = async (query, e) => {
		e.preventDefault()
		console.log(`search Ingredients being called with query:${query} and e:${e}`);
		try {
			const response = await fetch ('http://localhost:8000/api/v1/ingredients/search', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				credentials: "include",
				body: JSON.stringify({search: query})
			})

			if (!response.ok) {
				throw Error (response.statusText)
			}

			const parsedResponse = await response.json()
			console.log(parsedResponse);

			this.setState({
				ing_id: parsedResponse.id,
				ing_name: parsedResponse.name,
				ing_type: parsedResponse.type,
			})

		} catch (err) {
			console.log(err)
		}
	}

	addIngredient = (ing_id, e) => {
		e.preventDefault()
		console.log(`addIngredient was called ing_id is ${ing_id}, e is ${e}`);
	}


	render() {
		return (
			<div>
				<h1>ingredients search container</h1>
				<IngredientsSearch searchIngredients={this.searchIngredients} />
				{this.state.ing_name ? <IngredientsResults results={this.state} addIngredient={this.addIngredient}/> : null}
			</div>


		)
	}
}

export default IngredientsSearchContainer