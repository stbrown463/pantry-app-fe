import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import IngredientsIndex from '../IngredientsIndex';
import './home.css'



const index = ({ username, ing_list }) => {


    return (
        <div id='homeBody'>
            <h1 id='homeHeader'>{username}'s Pantry</h1>
            <div id='homePageButtons'>
                <Link to={'/ingredients'}><button >Ingredients</button></Link>
                <Link to={'/recipes'}>  <button > Recipe</button> </Link>
                <button >Add Recipe</button>
            </div>
            <IngredientsIndex ing_list={ing_list} />
        </div>
    )
}

export default withRouter(index)
