/**
 * Created by mohsin on 10/15/2015.
 */

Router.configure({
    layoutTemplate: 'layout',
    waitOn: function() { [Meteor.subscribe('players'), Meteor.subscribe('playerProfilePictures')]; }
});

Router.configure({
    layoutTemplate:"adminLayout"
});

Router.map(function() {
    this.route('home', {path: '/',layoutTemplate: 'layout'});
    this.route('players', {path: '/players',layoutTemplate: 'layout'});

    this.route('dashboard', {path: '/admin',layoutTemplate: 'adminLayout'});
    this.route('addPlayer', {path: '/admin/addPlayer',layoutTemplate: 'adminLayout'});

});