print("Tweaks script loaded!");


var RecipeTweaker = libcd.require("libcd.recipe.RecipeTweaker");
var TweakerUtils = libcd.require("libcd.util.TweakerUtils");



// Crafting Table
RecipeTweaker.removeRecipe("minecraft:crafting_table");
RecipeTweaker.removeRecipe("fabric_toys:stone_crafting_table");

RecipeTweaker.addShaped([["#minecraft:logs",   "#minecraft:planks"], 
	                     ["#minecraft:planks", "#minecraft:logs"]], 
	                     TweakerUtils.createItemStack("minecraft:crafting_table", 1));

RecipeTweaker.addShaped([["fabric_toys:compressed_cobblestone", "minecraft:cobblestone"], 
	                     ["minecraft:cobblestone",              "fabric_toys:compressed_cobblestone"]], 
	                     TweakerUtils.createItemStack("fabric_toys:stone_crafting_table", 1));


// Furnace
RecipeTweaker.removeRecipe("minecraft:furnace");
RecipeTweaker.removeRecipe("fabric_toys:andesite_furnace");
RecipeTweaker.removeRecipe("fabric_toys:diorite_furnace");
RecipeTweaker.removeRecipe("fabric_toys:granite_furnace");

RecipeTweaker.addShaped([["fabric_toys:compressed_cobblestone", "minecraft:cobblestone", "fabric_toys:compressed_cobblestone"], 
	                     ["minecraft:cobblestone",              "minecraft:campfire",    "minecraft:cobblestone"],
	                     ["fabric_toys:compressed_cobblestone", "minecraft:cobblestone", "fabric_toys:compressed_cobblestone"]], 
	                     TweakerUtils.createItemStack("minecraft:furnace", 1));

RecipeTweaker.addShaped([["fabric_toys:compressed_cobblestone", "minecraft:andesite", "fabric_toys:compressed_cobblestone"], 
	                     ["minecraft:andesite",                 "minecraft:campfire", "minecraft:andesite"],
	                     ["fabric_toys:compressed_cobblestone", "minecraft:andesite", "fabric_toys:compressed_cobblestone"]], 
	                     TweakerUtils.createItemStack("fabric_toys:andesite_furnace", 1));

RecipeTweaker.addShaped([["fabric_toys:compressed_cobblestone", "minecraft:diorite",  "fabric_toys:compressed_cobblestone"], 
	                     ["minecraft:diorite",                  "minecraft:campfire", "minecraft:diorite"],
	                     ["fabric_toys:compressed_cobblestone", "minecraft:diorite",  "fabric_toys:compressed_cobblestone"]], 
	                     TweakerUtils.createItemStack("fabric_toys:diorite_furnace", 1));

RecipeTweaker.addShaped([["fabric_toys:compressed_cobblestone", "minecraft:granite",  "fabric_toys:compressed_cobblestone"], 
	                     ["minecraft:granite",                  "minecraft:campfire", "minecraft:granite"],
	                     ["fabric_toys:compressed_cobblestone", "minecraft:granite",  "fabric_toys:compressed_cobblestone"]], 
	                     TweakerUtils.createItemStack("fabric_toys:granite_furnace", 1));


// Tools
RecipeTweaker.removeRecipe("minecraft:stone_sword");
RecipeTweaker.removeRecipe("minecraft:stone_shovel");
RecipeTweaker.removeRecipe("minecraft:stone_pickaxe");
RecipeTweaker.removeRecipe("minecraft:stone_axe");
RecipeTweaker.removeRecipe("minecraft:stone_hoe");
RecipeTweaker.removeRecipe("minecraft:wooden_sword");
RecipeTweaker.removeRecipe("minecraft:wooden_shovel");
RecipeTweaker.removeRecipe("minecraft:wooden_pickaxe");
RecipeTweaker.removeRecipe("minecraft:wooden_axe");
RecipeTweaker.removeRecipe("minecraft:wooden_hoe");
RecipeTweaker.removeRecipe("minecraft:iron_sword");
RecipeTweaker.removeRecipe("minecraft:iron_shovel");
RecipeTweaker.removeRecipe("minecraft:iron_pickaxe");
RecipeTweaker.removeRecipe("minecraft:iron_axe");
RecipeTweaker.removeRecipe("minecraft:iron_hoe");


// Stone
RecipeTweaker.addShaped([[null, "minecraft:stone", null], 
	                     [null, "minecraft:stone", null],
	                     [null, "minecraft:stick", null]], 
	                     TweakerUtils.createItemStack("minecraft:stone_sword", 1));

RecipeTweaker.addShaped([[null, "minecraft:stone", null], 
	                     [null, "minecraft:stick", null],
	                     [null, "minecraft:stick", null]], 
	                     TweakerUtils.createItemStack("minecraft:stone_shovel", 1));

RecipeTweaker.addShaped([["minecraft:stone", "minecraft:stone", "minecraft:stone"], 
	                     [null,              "minecraft:stick", null],
	                     [null,              "minecraft:stick", null]], 
	                     TweakerUtils.createItemStack("minecraft:stone_pickaxe", 1 ));

RecipeTweaker.addShaped([["minecraft:stone", "minecraft:stone", null], 
	                     ["minecraft:stone", "minecraft:stick", null],
	                     [null,              "minecraft:stick", null]], 
	                     TweakerUtils.createItemStack("minecraft:stone_axe", 1));

RecipeTweaker.addShaped([["minecraft:stone", "minecraft:stone", null], 
	                     [null,              "minecraft:stick", null],
	                     [null,              "minecraft:stick", null]], 
	                     TweakerUtils.createItemStack("minecraft:stone_hoe", 1));


// Iron
RecipeTweaker.addShaped([[null, "techreborn:iron_plate", null], 
	                     [null, "techreborn:iron_plate", null],
	                     [null, "minecraft:stick",       null]], 
	                     TweakerUtils.createItemStack("minecraft:iron_sword", 1));

RecipeTweaker.addShaped([[null, "techreborn:iron_plate", null], 
	                     [null, "minecraft:stick",       null],
	                     [null, "minecraft:stick",       null]], 
	                     TweakerUtils.createItemStack("minecraft:iron_shovel", 1));

RecipeTweaker.addShaped([["techreborn:iron_plate", "techreborn:iron_plate", "techreborn:iron_plate"], 
	                     [null,                    "minecraft:stick",        null],
	                     [null,                    "minecraft:stick",        null]], 
	                     TweakerUtils.createItemStack("minecraft:iron_pickaxe", 1 ));

RecipeTweaker.addShaped([["techreborn:iron_plate", "techreborn:iron_plate", null], 
	                     ["techreborn:iron_plate", "minecraft:stick",       null],
	                     [null,                    "minecraft:stick",       null]], 
	                     TweakerUtils.createItemStack("minecraft:iron_axe", 1));

RecipeTweaker.addShaped([["techreborn:iron_plate", "techreborn:iron_plate", null], 
	                     [null,                    "minecraft:stick",       null],
	                     [null,                    "minecraft:stick",       null]], 
	                     TweakerUtils.createItemStack("minecraft:iron_hoe", 1));


// Gravel 2 Flint
RecipeTweaker.addShaped([["minecraft:gravel",   "minecraft:gravel"], 
	                     ["minecraft:gravel",   null]], 
	                     TweakerUtils.createItemStack("minecraft:flint", 1));


// Sticks
RecipeTweaker.removeRecipe("minecraft:stick");

RecipeTweaker.addShaped([[null, "#minecraft:planks"], 
	                     [null, "#minecraft:planks"]], 
	                     TweakerUtils.createItemStack("minecraft:stick", 2));

RecipeTweaker.addShaped([[null, "#minecraft:logs"], 
	                     [null, "#minecraft:logs"]], 
	                     TweakerUtils.createItemStack("minecraft:stick", 8));


// Stonecutter
RecipeTweaker.removeRecipe("minecraft:stonecutter");
RecipeTweaker.addShaped([[null,              "techreborn:refined_iron_plate", null], 
	                     ["#minecraft:logs", "minecraft:crafting_table",      "#minecraft:logs"],
	                     ["minecraft:stone", "minecraft:stone",               "minecraft:stone"]], 
	                     TweakerUtils.createItemStack("minecraft:stonecutter", 1));


// Piston
RecipeTweaker.removeRecipe("minecraft:piston");
RecipeTweaker.addShaped([["techreborn:wood_plate",  "techreborn:wood_plate",           "techreborn:wood_plate"], 
	                     ["minecraft:cobblestone",  "techreborn:basic_machine_casing", "minecraft:cobblestone"],
	                     ["minecraft:smooth_stone", "minecraft:smooth_stone",          "minecraft:smooth_stone"]], 
	                     TweakerUtils.createItemStack("minecraft:piston", 1));