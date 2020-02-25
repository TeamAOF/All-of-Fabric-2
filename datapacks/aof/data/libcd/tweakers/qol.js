print("QOL script loaded!");


var RecipeTweaker = libcd.require("libcd.recipe.RecipeTweaker");
var TweakerUtils = libcd.require("libcd.util.TweakerUtils");



// Chest
/////////////////////////////////////////////////////////////////////////////////////
RecipeTweaker.addShaped([
	    ["#minecraft:logs", "#minecraft:logs", "#minecraft:logs"],
        ["#minecraft:logs", null,              "#minecraft:logs"],
        ["#minecraft:logs", "#minecraft:logs", "#minecraft:logs"]], 
        TweakerUtils.createItemStack("minecraft:chest", 4));



// Crafting Station
/////////////////////////////////////////////////////////////////////////////////////
RecipeTweaker.addShapeless(
	    ["improved-stations:crafting_station"],
        TweakerUtils.createItemStack("minecraft:crafting_table"));

RecipeTweaker.removeRecipe("improved-stations:crafting_station_slab");
RecipeTweaker.addShapeless(
	    ["improved-stations:crafting_station"],
        TweakerUtils.createItemStack("improved-stations:crafting_station_slab"));

RecipeTweaker.addShapeless(
	    ["improved-stations:crafting_station_slab"],
        TweakerUtils.createItemStack("improved-stations:crafting_station"));



// Glass Doors
/////////////////////////////////////////////////////////////////////////////////////
RecipeTweaker.addShapeless(
        ["extradoors:oak_glass_door"],
        TweakerUtils.createItemStack("glassdoor:oak_glassdoor"));

RecipeTweaker.addShapeless(
        ["extradoors:spruce_glass_door"],
        TweakerUtils.createItemStack("glassdoor:spruce_glassdoor"));

RecipeTweaker.addShapeless(
        ["extradoors:birch_glass_door"],
        TweakerUtils.createItemStack("glassdoor:birch_glassdoor"));

RecipeTweaker.addShapeless(
        ["extradoors:acacia_glass_door"],
        TweakerUtils.createItemStack("glassdoor:acacia_glassdoor"));

RecipeTweaker.addShapeless(
        ["extradoors:jungle_glass_door"],
        TweakerUtils.createItemStack("glassdoor:jungle_glassdoor"));

RecipeTweaker.addShapeless(
        ["extradoors:dark_oak_glass_door"],
        TweakerUtils.createItemStack("glassdoor:dark_oak_glassdoor"));

RecipeTweaker.addShapeless(
        ["extradoors:iron_glass_door"],
        TweakerUtils.createItemStack("glassdoor:iron_glassdoor"));

// Revert Back
RecipeTweaker.addShapeless(
        ["glassdoor:oak_glassdoor"],
        TweakerUtils.createItemStack("extradoors:oak_glass_door"));

RecipeTweaker.addShapeless(
        ["glassdoor:spruce_glassdoor"],
        TweakerUtils.createItemStack("extradoors:spruce_glass_door"));

RecipeTweaker.addShapeless(
        ["glassdoor:birch_glassdoor"],
        TweakerUtils.createItemStack("extradoors:birch_glass_door"));

RecipeTweaker.addShapeless(
        ["glassdoor:acacia_glassdoor"],
        TweakerUtils.createItemStack("extradoors:acacia_glass_door"));

RecipeTweaker.addShapeless(
        ["glassdoor:jungle_glassdoor"],
        TweakerUtils.createItemStack("extradoors:jungle_glass_door"));

RecipeTweaker.addShapeless(
        ["glassdoor:dark_oak_glassdoor"],
        TweakerUtils.createItemStack("extradoors:dark_oak_glass_door"));

RecipeTweaker.addShapeless(
        ["glassdoor:iron_glassdoor"],
        TweakerUtils.createItemStack("extradoors:iron_glass_door"));



// Dispenser
/////////////////////////////////////////////////////////////////////////////////////
RecipeTweaker.removeRecipe("minecraft:dispenser");
var dispenserPattern = [
    ' rs',
    'rds',
    ' rs'
]
var dispenserDict = {
    'r': 'minecraft:stick',
    's': 'minecraft:string',
    'd': 'minecraft:dropper'
}
RecipeTweaker.addDictShaped(dispenserPattern, dispenserDict, "minecraft:dispenser")