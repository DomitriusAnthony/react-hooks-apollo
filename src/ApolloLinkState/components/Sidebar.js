import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import { updatePageNameMutation } from '../graphql';

class Sidebar extends Component {
    render() {
        return (
            <Mutation mutation={updatePageNameMutation}>
                {updatePageName => (
                    <Fragment>
                        <li onClick={() => updatePageName({ variables: {name: 'React'}})}>React</li>
                        <li onClick={() => updatePageName({ variables: {name: 'Apollo Client'}})}>Apollo Client</li>
                        <li onClick={() => updatePageName({ variables: {name: 'Next.js'}})}>Next.js</li>
                    </Fragment>
                )}
            </Mutation>
        )
    }
};

export default Sidebar;