// LIBS
var React = require('react');
var classNames = require('classnames');

// SERVICES
var characterApi = require('../services/character-api');

// COMPONENTS
var Table = require('../components/table');
var Input = require('../components/input');
var Button = require('../components/button');

var CharacterView = React.createClass({

    render: function () {
        return (
            <div>
                <section>
                    <Input />
                    <Button> Find </Button>
                </section>
                <section>
                    <Table />
                </section>
            </div>
        )
    }
});

module.exports = CharacterView;