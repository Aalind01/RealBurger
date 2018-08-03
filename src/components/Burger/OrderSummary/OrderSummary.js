import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey) => {
            return (
                <li key={igKey}>
                    <span>{igKey} : </span>
                    {props.ingredients[igKey]}
                </li>
            )
        });

    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients </p>
            <ul>
                {ingredientSummary}
                abc
            </ul>
            <p>Continue to Checkout? </p>
        </Aux>
    )
};

export default orderSummary;