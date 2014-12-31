

var world = {
	health: 1,
	other: 2
};

function tick(time) {
	if(world.health < 11){
	world.health = world.health + 1 * (time / 1000);
}
else{}

}






function interval( ){
	tick(500);
	console.log(world)
}


/*
console.log(world);

tick(1000); // Advance game by 1 second

console.log(world);
*/

setInterval(interval, 500);