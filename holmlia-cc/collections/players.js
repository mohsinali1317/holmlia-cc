/**
 * Created by mohsin on 10/15/2015.
 */

Players = new Mongo.Collection("players");

var PlayerSchema = new SimpleSchema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    role : {
      type : String,
        allowedValues : ['Captain','Vice-Captain','Keeper']
    },
    speciality : {
      type : String
    },
    birthday: {
        type: Date,
        optional: true
    },
    memberSince: {
        type: Date,
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
    },
    imageId: {
        type: String
    }
});

var createThumb = function(fileObj, readStream, writeStream) {
    // Transform the image into a 10x10px thumbnail
    gm(readStream, fileObj.name()).resize('200', '200').stream().pipe(writeStream);
};

var dropboxStore = new FS.Store.Dropbox("playerProfilePictures", {
    key: "01sv4di85w78xd4",
    secret: "wv6c1ak6jc6964a",
    token: "qaE0mHdehJsAAAAAAAAD5JGtjUgbytS_lubFRK2yo1TYGNYHXk-ggR3GeDk1RHFu", // Don’t share your access token with anyone.
    transformWrite: createThumb, //optional
});

PlayerProfilePictures = new FS.Collection("playerProfilePictures", {
    stores: [dropboxStore]
});

Players.attachSchema(PlayerSchema);

