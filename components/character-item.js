//LIBS
var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

var CharacterItem = React.createClass({
    propTypes: {
        item: React.PropTypes.object
    },

    render: function () {
        var item = this.props.item;
        return (
            <div className="container">
                <img {...this.getImgProps()} />
                <div className="col-md-4">
                    <span {...this.getSpanProps(item.itemLevel)}>{item.name}</span>
                    <span className="item--span">Item level {item.itemLevel}</span>
                    <span className="item--span">Armor {item.armor}</span>
                </div>
            </div>
        )
    },

    getImgProps: function () {
        return {
            className: this.getImgClass(),
            src: this.getUrl(),
            alt: 'This is an item image'
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
            'item--blue': (itemLevel > 450 && itemLevel < 675),
            'item--violet': (itemLevel > 675)
        };

        return classNames(classes);
    },

    getUrl: function () {
        var url = "http://media.blizzard.com/wow/icons/56/" + this.props.item.icon + ".jpg";
        return url;
    }
});

module.exports = CharacterItem;

//url + icon +.jpg