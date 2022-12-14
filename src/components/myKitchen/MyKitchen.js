import Recipes from "../recipes/Recipes";
import React, { Component } from 'react';

const initialList = [{
    image: { url: "https://www.fodmapeveryday.com/wp-content/uploads/2017/06/Pho-closeup-copy-855x570.jpg", alt: "pho" },
    title: "Pho",
    description: 'slow-cooked soup',
    isDone: false,
    id: '0'
}, {
    image: { url: 'https://kirbiecravings.com/wp-content/uploads/2020/04/chop-suey-5.jpg', alt: 'pad' },
    title: "Pad Thai",
    description: 'stir-fry dish, mix all ingredients together',
    isDone: false,
    id: '1'
}, {
    image: { url: 'https://glebekitchen.com/wp-content/uploads/2016/11/easypadthaibowltop-1-500x500.jpg', alt: 'chop' },
    title: "Chop Suey",
    description: '5 minute stir fry,add each vegetable in the order in which they cook.',
    isDone: false,
    id: '2'
}
]
export default class MyKitchen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipesList: initialList
        }
    };
    toggleIsDone = (id) => {
        const newRecipesList = this.state.recipesList.map(recipe => {
            if (recipe.id !== id) return recipe
            return {
                // isDone: recipe.isDone ? false : true,
                ...recipe,
                isDone: !recipe.isDone
            }
        })
        const newState = {
            ...this.state,
            recipesList: newRecipesList,
        }
        this.setState(newState)
    }
    render() {
        return (
            <div className="MyKitchen">
                <h1 style={{color:'blue'}}>My Kitchen</h1>
                <Recipes list={this.state.recipesList} toggleIsDone={this.toggleIsDone}></Recipes>

            </div>)
    }
}