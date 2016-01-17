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


            }
        }
    }
};

ground = Chessground(document.getElementById("ground1"), options);


function FinishMoveCallback(move) {
    console.log(PVFromHash(move, 1));


    var from = move & 0xFF;
    var to = (move >> 8) & 0xFF;

    var sfrom = FormatSquare(from);
    var sto = FormatSquare(to);

    var san = PVFromHash(move, 1)

    chess.move({
        from: sfrom,
        to: sto,
        promotion: 'q'
    });

    var fen = chess.fen();

    var options = {
        orientation: 'white',
        fen: fen
    };


    ground.set(options);



};

function timerfunction() {
    var fen = chess.fen();

    console.log(fen);

    InitializeFromFen(fen);

    Search(FinishMoveCallback, 5, null);

    window.setTimeout(timerfunction, 1000);
}

ResetGame();
g_timeout = 980;

InitializeFromFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");

window.setTimeout(timerfunction, 500);