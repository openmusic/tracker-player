var Player = require('../index');

var player = new Player();

var song = {
	bpm: 125,
	orders: [ 0, 0 ],
	// number of columns per track
	tracks: [ 1, 2 ],
	patterns: [
		{
			rows: 16,
			tracks: [
				// Track 0
				[
					// Lines
					{
						row: 0,
						columns: [
							{ note: 'C-4', instrument: 0, volume: 0.5 }
						]
					}
				],
				// Track 1
				[
					{
						row: 0,
						columns: [
							{ note: 'C-3', instrument: 1 },
							{ note: 'A-3', instrument: 1 }
						]
					}
				]
			]
		}
	]
};

player.loadSong(song);
