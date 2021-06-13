let team = [
	{
		name: "Arsenal",
		points: 99,
		GD: 45,
	},
	{
		name: "Chelsea",
		points: 75,
		GD: 39,
	},
	{
		name: "Manchester United",
		points: 60,
		GD: 29,
	},
	{
		name: "Liverpool",
		points: 88,
		GD: 39,
	},
];

team.sort(function (a, b) {
	return (a.points - b.points) * -1;
});

console.log(team);
