import React, {Fragment} from 'react';

const Card = props => {

    return(
        <Fragment>
            <h3>Ello Poppet Card</h3>
            {props.Data.map((element, index) => 
                <div key={index}>
                <h4>{element.name}</h4>
                <p>{element.country}</p>
                <p>{element.searches}</p>
                </div>
            )}
        </Fragment>
    )
}

export default Card;