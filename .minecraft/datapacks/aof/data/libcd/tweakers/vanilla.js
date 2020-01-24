print("Vanilla script loaded!");


var RecipeTweaker = libcd.require("libcd.recipe.RecipeTweaker");
var TweakerUtils = libcd.require("libcd.util.TweakerUtils");


//Chest
RecipeTweaker.addShaped([
	    ["#minecraft:logs", "#minecraft:logs", "#minecraft:logs"],
        ["#minecraft:logs", null,              "#minecraft:logs"],
        ["#minecraft:logs", "#minecraft:logs", "#minecraft:logs"]], 
        TweakerUtils.createItemStack("minecraft:chest"));



//Dispenser
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