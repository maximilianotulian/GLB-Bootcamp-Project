// LIBS
var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

// SERVICES
var characterApi = require('../services/character-api');

// COMPONENTS
var Table = require('../components/table');
var Input = require('../components/input');
var Button = require('../components/button');
var CharacterInfo = require('../components/character-info');
var CharacterStats = require('../components/character-stats');
var CharacterItem = require('../components/character-item');
var UnOrderedList = require('../components/unordered-list');
var CharacterPvp = require('../components/character-pvp');

var CharacterView = React.createClass({

    getInitialState: function () {

        return {
            data: [],
            name: '',
            realm: '',
            render: 'initial'
        }
    },

    render: function () {
        return (
            <div >
                <section>
                    <Input {...this.getInputProps()}/>
                    <Button {...this.getButtonProps()}> Find </Button>
                </section>
                {this.renderContent()}
            </div>
        )
    },

    renderContent: function () {
        var content;

        if (this.state.render === 'initial') {
            content = this.getInitialContent();
        } else if (this.state.render === 'loading') {
            content = this.getLoadingContent();
        } else if (this.state.render === 'complete') {
            content = this.getCompleteContent();
        }
        return content;
    },

    renderMainInfo: function () {
        return (
            <div {...this.getDivProps()}>
                <CharacterInfo data={this.state.data}/>
            </div>
        )
    },

    renderStats: function () {
        return (
            <div {...this.getDivProps()}>
                <CharacterStats {...this.getCharacterStatsProps()}/>
            </div>
        )
    },

    renderPvp: function () {
        return (
            <div className="col-md-7 panel-body">
                <CharacterPvp {...this.getCharacterPvpProps()} />
            </div>
        )
    },

    renderItems: function () {
        var items = this.state.data.items;
        var filteredItems = {
            back: items.back,
            chest: items.chest,
            feet: items.feet,
            finger1: items.finger1,
            finger2: items.finger2,
            hands: items.hands,
            head: items.head,
            legs: items.legs,
            mainHand: items.mainHand,
            neck: items.neck,
            shirt: items.shirt,
            shoulder: items.shoulder,
            trinket1: items.trinket1,
            trinket2: items.trinket2,
            waist: items.waist,
            wrist: items.wrist
        };
        var listItems = [];
        var itemIndex = 0;

        _.each(filteredItems, function (item) {
            listItems.push(
                <li key={itemIndex} className="list-group-item">
                    <CharacterItem item={item}/>
                </li>
            );
            itemIndex += 1;
        });

        return (
            <div className="col-md-5 panel-body">
                <h4 className="text-center">Items information</h4>
                <ul >
                    {listItems}
                </ul>
            </div>
        )
    },

    getInitialContent: function () {
        return (
            <section>
                <h4> Insert character name and press find to see more information </h4>
            </section>
        )
    },

    getLoadingContent: function () {
        return (
            <section>
                Loading....
            </section>
        )
    },

    getCompleteContent: function () {
        return (
            <div className="container">
                {this.renderMainInfo()}
                {this.renderStats()}
                <div {...this.getDivProps()}>
                    {this.renderItems()}
                    {this.renderPvp()}
                </div>
            </div>
        );
    },

    getCharacterPvpProps: function () {
        return {
            className: this.getCharacterPvpClass(),
            data: this.state.data.pvp.brackets
        }
    },

    getCharacterPvpClass: function () {
        var classes = {};

        return classNames(classes);
    },

    getButtonProps: function () {
        return {
            onClick: this.handleClick
        }
    },

    getInputProps: function () {
        return {
            value: this.state.name,
            onChange: this.handleInputChange,
            placeholder: 'Name'
        }
    },

    getDivProps: function () {
        return {
            className: this.getDivClass()
        }
    },

    getDivClass: function () {
        var classes = {
            'row': true,
            'panel': true,
            'panel-default': true
        };

        return classNames(classes);
    },

    getCharacterStatsProps: function () {
        return {
            className: this.getCharacterStatsClass(),
            data: this.state.data.stats
        }
    },

    getCharacterStatsClass: function () {
        var classes = {};

        return classNames(classes);
    },

    handleInputChange: function (event) {
        this.setState({
            name: event.target.value,
            render: 'initial',
            data: []
        });
    },

    handleClick: function () {
        characterApi.getCharacterInfo(this.updateState, this.state.name, this.state.realm);
        this.setState({
            name: '' ,
            render:'loading'
        });
    },

    updateState: function (result) {
        this.setState({
            data: result,
            render: 'complete'
        });
    }
});

module.exports = CharacterView;