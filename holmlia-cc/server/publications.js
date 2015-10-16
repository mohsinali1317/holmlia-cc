/**
 * Created by mohsin on 10/15/2015.
 */

Meteor.publish('players', function() {
    return Players.find();
});

Meteor.publish('playerProfilePictures', function() {
    return PlayerProfilePictures.find();
});


PlayerProfilePictures.allow({
    update: function () {
        // add custom authentication code here
        return true;
    },
    insert: function () {
        // add custom authentication code here
        return true;
    },
    download: function(){
        return true;
    }
});

Players.allow({
    update: function () {
        // add custom authentication code here
        return true;
    },
    insert: function () {
        // add custom authentication code here
        return true;
    }
});