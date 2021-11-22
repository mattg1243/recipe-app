import React from 'react';

const Form = (props) => (
    <form onSubmit={props.getRecipes} style={{ marginBottom:"2rem" }}>
        <input className="form__input" type="text" name="recipeName"></input>
        <button className="form__button" type="submit">Search</button>
    </form>
)

export default Form;