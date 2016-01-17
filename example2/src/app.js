var Chessground = require("chessground");

var options = {
    orientation: 'black',
    fen: '2r3k1/pp2Qpbp/4b1p1/3p4/3n1PP1/2N4P/Pq6/R2K1B1R w -'
};

var ground = Chessground(document.getElementById("ground1"), options);