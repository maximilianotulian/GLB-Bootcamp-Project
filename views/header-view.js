// LIBS
React = require('react');
ReactRouter = require('react-router');
Link = ReactRouter.Link;

var HeaderView = React.createClass({
    render: function () {
        return (
            <ul>
                <li>
                    <Link to="home">Home</Link>
                </li>
                <li>
                    <Link to="realm">Realm</Link>
                </li>
                <li>
                    <Link to="character">Character</Link>
                </li>
                <li>
                    <Link to="challenge">Challenge</Link>
                </li>
                <li>
                    <Link to="pvp">PVP</Link>
                </li>
                <li>
                    <Link to="guild">Guild</Link>
                </li>
            </ul>
        )
    }
});

module.exports = HeaderView;