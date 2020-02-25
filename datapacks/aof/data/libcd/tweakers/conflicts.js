print("Conflict script loaded!");


var RecipeTweaker = libcd.require("libcd.recipe.RecipeTweaker");
var TweakerUtils = libcd.require("libcd.util.TweakerUtils");



//Soul Glass / Soul Dust
RecipeTweaker.removeRecipe("thehallow:soul_glass");
RecipeTweaker.addShaped([
	    ["minecraft:glass", "minecraft:soul_sand"]],
        TweakerUtils.createItemStack("thehallow:soul_glass"));

RecipeTweaker.addShaped([
	    ["minecraft:glass",     "minecraft:soul_sand", "minecraft:glass"],
        ["minecraft:soul_sand", null,                  "minecraft:soul_sand"],
        ["minecraft:glass",     "minecraft:soul_sand", "minecraft:glass"]], 
        TweakerUtils.createItemStack("thehallow:soul_glass", 4));


//Glass Doors
RecipeTweaker.removeRecipe("glassdoor:oak_glassdoor");
RecipeTweaker.removeRecipe("glassdoor:spruce_glassdoor");
RecipeTweaker.removeRecipe("glassdoor:birch_glassdoor");
RecipeTweaker.removeRecipe("glassdoor:acacia_glassdoor");
RecipeTweaker.removeRecipe("glassdoor:jungle_glassdoor");
RecipeTweaker.removeRecipe("glassdoor:dark_oak_glassdoor");
RecipeTweaker.removeRecipe("glassdoor:iron_glassdoor");


//Flesh Block
RecipeTweaker.removeRecipe("thehallow:rotten_flesh_block");
RecipeTweaker.addShaped([
	    ["minecraft:rotten_flesh", "minecraft:rotten_flesh"],
        ["minecraft:rotten_flesh", "minecraft:rotten_flesh"]],
        TweakerUtils.createItemStack("thehallow:rotten_flesh_block"));


//Bamboo
RecipeTweaker.removeRecipe("blockus:bamboo_planks");
RecipeTweaker.addShaped([
	    [null,               "minecraft:bamboo",  null],
        ["minecraft:bamboo", "#minecraft:planks", "minecraft:bamboo"],
        [null,               "minecraft:bamboo",  null]], 
        TweakerUtils.createItemStack("blockus:bamboo_planks", 4));