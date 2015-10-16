/**
 * Created by mohsin on 10/15/2015.
 */

Template.admin.helpers({
    genderOptions : function(){
        return [
            {label: "Male", value: "Male"},
            {label: "Female", value: "Female"}
        ];
    },
    roleOptions : function(){
        return [
            {label: "Captain", value: "Captain"},
            {label: "Vice-Captain", value: "Vice-Captain"},
            {label: "Keeper", value: "Keeper"}
        ];
    }
})