import React, { Fragment } from 'react';
import Card from './Card';


class ListContainer extends React.Component {

    state = {
        Data: []
    }

    componentDidMount() {
        fetch("http://localhost:5000/api/players")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    Data: response
                })
            })
            .catch(err => console.error(err))
    }


    render() {
        console.log(this.state)
        return (
            <Fragment>
                <h1 data-testid="List-Header">List Container</h1>               
                <Card Data={this.state.Data} />
            </Fragment>
        )
    }
}

export default ListContainer;