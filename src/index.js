import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { client } from './ApolloLinkState/apollo';
import './index.css';
import App from './ApolloLinkState/App';

// ReactDOM.render(<App />, document.getElementById('root'));


const WrappedApp = (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

ReactDOM.render(
    WrappedApp, document.getElementById('root')
);
