print("Crimson script loaded!");


var RecipeTweaker = libcd.require("libcd.recipe.RecipeTweaker");
var TweakerUtils = libcd.require("libcd.util.TweakerUtils");



// Chest
/////////////////////////////////////////////////////////////////////////////////////
RecipeTweaker.removeRecipe("crimson:magic_device_crafter");
RecipeTweaker.addShaped([
	    ["techreborn:copper_ingot", "crimson:crimson_essence", "techreborn:copper_ingot"],
        [null,                      "crimson:crimson_log",     null]], 
        TweakerUtils.createItemStack("crimson:magic_device_crafter"));