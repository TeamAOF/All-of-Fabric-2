print("Vanilla script loaded!");





//Chest
RecipeTweaker.addShaped([
        ["#minecraft:logs", "#minecraft:logs", "#minecraft:logs"],
        ["#minecraft:logs", null,              "#minecraft:logs"],
        ["#minecraft:logs", "#minecraft:logs", "#minecraft:logs"]],
    TweakerUtils.createItemStack("minecraft:chest", 4));



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