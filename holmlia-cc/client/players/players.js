/**
 * Created by mohsin on 10/15/2015.
 */
Template.players.helpers({
    players : function(){
        return Players.find();
    }
})

Template.player.helpers({
    fullName : function(){
        return this.firstName + " " + this.lastName;
    },
    imageUrl : function(){
        return PlayerProfilePictures.findOne(this.imageId);
    },
    playerProfilePath: function() {
        return Router.routes.playerProfile.path({_id: this._id});
    }
})