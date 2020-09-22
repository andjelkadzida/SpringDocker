var React = require('react');
const AppStore = require('../stores/AppStore');
AppActions = require('../actions/AppActions');
AppStore = require('../stores/AppStore');


function getAppState() {
    return {

    }
}

var App = React.createClass({
    getInitialState: function(){
        return getAppState();
    },

    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    componentUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    render: function(){
        return(
            <p>
                First application created using Flux!
            </p>
        );
    },
    _onChange: function() {
        this.setState(getAppState());
    }
});

module.exports = App;   