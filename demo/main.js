var Player = require('../src/index');


function InstrumentInterface() {
	this.noteOn = function(when, noteNumber, volume) {
		console.log('note ON', when, noteNumber, volume);
	};

	this.noteOff = function(when, noteNumber) {
		console.log('note OFF', when, noteNumber);
	};
}

function Trumpet() {
	InstrumentInterface.call(this);

	var superNoteOn = this.noteOn;

	this.noteOn = function(when, noteNumber, volume) {
		console.info('TRUMPET');
		superNoteOn.call(this, when, noteNumber, volume);
	};
}

function Sax() {
	InstrumentInterface.call(this);

	var superNoteOn = this.noteOn;

	this.noteOn = function(when, noteNumber, volume) {
		console.info('SAX');
		superNoteOn.call(this, when, noteNumber, volume);
	};
}

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
player.buildEvents();
player.gear = [ new Trumpet(), new Sax() ];

// ~~~ Scheduling ~~~ //

var ac = new AudioContext();
var scheduleAheadTime = 0.1;
var scheduleInterval = 0.025;
var scheduleStart = getNow();
var scheduleTimer;
var info = document.getElementById('info');

function getNow() {
	return ac.currentTime;
}

function schedule() {
	var now = getNow();
	info.innerHTML = 'scheduling at ' + now;
}

function play() {
	// setInterval works in ms
	scheduleTimer = setInterval(schedule, scheduleInterval * 1000);
}

function stop() {
	clearInterval(scheduleTimer);
}

document.getElementById('play').addEventListener('click', play);
document.getElementById('stop').addEventListener('click', stop);
