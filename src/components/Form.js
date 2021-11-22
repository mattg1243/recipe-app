import React from 'react';

const Form = (props) => (
    <form onSubmit={props.getRecipes}>
        <input type="text" name="recipeName"></input>
        <button type="submit">Search</button>
    </form>
)

export default Form;