var React = require('react');
var Glyphicon = require('../components/glyphicon');


var FooterView = React.createClass({
    render: function () {
        return (
            <div>
                <div className="col-md-4">
                    <img src="http://us.battle.net/wow/static/images/logos/blizzard-nav-client.png"/>
                </div>
                <div className="col-md-8">
                    <span>Created by: Maximiliano Tulian </span>
                    <span className="">Contact information: <a href="mailto:maxtulian9@gmail.com">maxtulian93@gmail.com</a></span>
                    <span>Images font:http://us.blizzard.com/en-us/ </span>
                </div>
            </div>
        )
    }
});

module.exports = FooterView;