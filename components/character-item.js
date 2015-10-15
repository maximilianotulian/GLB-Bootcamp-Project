//LIBS
var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

var CharacterItem = React.createClass({
    propTypes: {
        item: React.PropTypes.object
    },

    render: function () {

        return this.renderItemInfo()

    },

    renderItemInfo: function () {
        var item;
        var itemLevel;
        var itemName;
        var itemArmor;

        if (!_.isUndefined(this.props.item)) {
            item = this.props.item;

            if (!_.isUndefined(item.itemLevel)) {
                itemLevel = item.itemLevel;
            }
            if (!_.isUndefined(item.name)) {
                itemName = item.name;
            }
            if (!_.isUndefined(item.armor)) {
                itemArmor = item.armor;
            }
        }

        return (
            <div className="container">
                <img {...this.getImgProps()} />
                <div className="col-md-4">
                    <span {...this.getSpanProps(itemLevel)}>{itemName}</span>
                    <span className="item--span"> {itemLevel ? 'Item level ' + itemLevel : ''}</span>
                    <span className="item--span">{itemArmor ? 'Armor ' + itemArmor : ''}</span>
                </div>
            </div>
        )

    },
    getImgProps: function () {
        return {
            className: this.getImgClass(),
            src: this.getUrl(),
            alt: 'item'
        }
    },

    getImgClass: function () {
        var classes = {
            'col-md-1': true,
            'item--image': true
        };

        return classNames(classes);
    },

    getSpanProps: function (itemLevel) {
        return {
            className: this.getSpanClass(itemLevel)
        }
    },

    getSpanClass: function (itemLevel) {

        var classes = {
            'item--span': true,
            'item--green': (itemLevel > 350 && itemLevel < 450),
            'item--blue': (itemLevel > 450 && itemLevel < 660),
            'item--violet': (itemLevel > 660)
        };

        return classNames(classes);
    },

    getUrl: function () {
        var url;
        var item;

        if (!_.isUndefined(this.props.item)) {
            item = this.props.item;
            if (!_.isUndefined(item.icon)) {
                url = "http://media.blizzard.com/wow/icons/56/" + (item.icon || '' ) + ".jpg";
            } else {
                url = "";
            }
        }
        return url;
    }
});

module.exports = CharacterItem;