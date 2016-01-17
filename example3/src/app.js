console.log('test');

var Chess = require('../../assets/libs/chess.min.js').Chess;

var chess = new Chess();

var Chessground = require("chessground");

var ground = 0;

var options = {
    orientation: 'white',
    movable: {
        free: false, // all moves are valid - board editor
        color: "both", // color that can move. "white" | "black" | "both" | null
        dests: {}, // valid moves. {a2: ["a3", "a4"], b1: ["a3", "c3"]} | null
        dropOff: "revert", // when a piece is dropped outside the board. "revert" | "trash"
        showDests: true, // add the move-dest class to squares
        events: {
            // called after the move has been played
            after: function(orig, dest, metadata) {


                console.log('' + orig + ' ' + dest + ' ' + metadata);
                ground.cancelMove();

            }
        }
    }
};

ground = Chessground(document.getElementById("ground1"), options);

var makeRandomMove = function() {
    var possibleMoves = chess.moves({
        verbose: true
    });

    // exit if the game is over
    if (chess.game_over() === true ||
        chess.in_draw() === true ||
        possibleMoves.length === 0) return;

    var randomIndex = Math.floor(Math.random() * possibleMoves.length);
    var move = possibleMoves[randomIndex];

    var from = move.from;
    var to = move.to;
    chess.move({
        from: from,
        to: to
    });
    console.log('' + from + ':' + to);
    ground.move(from, to);

    window.setTimeout(makeRandomMove, 500);
};


window.setTimeout(makeRandomMove, 500);