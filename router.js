module.exports = (function () {

    // LIBS
    var React = require('react');
    var Router = require('react-router');
    var Route = Router.Route;
    var DefaultRoute = Router.DefaultRoute;

    // VIEWS
    var MainView = require('./views/main-view');
    var HomeView = require('./views/home-view');
    var RealmView = require('./views/realm-view');
    var CharacterView = require('./views/character-view');
    var ChallengeView = require('./views/challenge-view');
    var PvpVIew = require('./views/pvp-view');
    var GuildView = require('./views/guild-view');

    var ModuleRouter = function () {
        this.routes = (
            <Route path="/" handler={MainView}>
                <DefaultRoute name="home" handler={HomeView}/>
                <Route name="realm" path="realm/" handler={RealmView}/>
                <Route name="character" path="character/" handler={CharacterView}/>
                <Route name="character-player" path="character-player/:name" handler={CharacterView}/>
                <Route name="character-player-realm" path="character-player/:name/realm/:realm" handler={CharacterView}/>
                <Route name="challenge" path="challenge/" handler={ChallengeView}/>
                <Route name="pvp" path="pvp/" handler={PvpVIew}/>
                <Route name="guild" path="guild/" handler={GuildView}/>
            </Route>
        );
    };

    ModuleRouter.prototype.run = function (mountElement) {
        Router.run(this.routes, function (Root) {
            React.render(<Root />, mountElement);
        });
    };

    return new ModuleRouter();
})();