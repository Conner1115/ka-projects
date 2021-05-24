var keys = [];
var blocks = [];
var friction = 10;
var grav = 0.05;
var maxGrav = 15;
var blockSize = 50;
var signIndex = 0;
var scene = "game";
var cam = {
  x: 0,
  y: 0,
}
var particles = [];
var level = 0;
var clicked = false;
var alchemyMenu = false;
var ingots = 0;
var coins = 0;
var stones = 0;
var buttons = [];
var enemies = [];
var blockSelected = false;
var levels = [
  {
    m: [
      "1@        111                                     ",
      "1          d            111                       ",
      "1 s       sD            1b1                       ",
      "1111≥s ^ 1111≥          1b1                       ",
      "2    11111 1 1≥ s    s S1b1 s                     ",
      "2          1  1111c11122222222                    ",
      "2p         1                 2                    ",
      " 222s      1b                2                    ",
      "    222    1b                2                    ",
      "       22221222222222222222  2                    ",
      "                             2  2wwwww2≥          ",
      "                            22  2wwwww21≥     s i ",
      "    s                        2  2wwwww211≥    M111",
      "    2ll2ll22222222222222222222  2wwwww2111≥s sM  M",
      "     2lll2                   2^^22www22   1c11M  M",
      "  22  222                    MMMMMMMMMM       M  M",
      "                             M  …  …          M  M",
      "2                            d  :  :          d  M",
      "2                            D  ;  ;    ^     D  M",
      "22c         22  22  22  22  MMcMMMMMMMMMMMMMMMMMMM",
      "    22  22"
    ],
    signs: [
      "Welcome to Fullmetal Alchemist!",
      "Press the DOWN arrow to open doors",
      "Avoid Spikes",
      "Checkpoints save your progress",
      "Use the DOWN arrow to activate switches.",
      "Jump!!",
      "Enter the Portal to move on.",
      "DOWN to activate a bomb.",
      "Avoid Lava",
      "Click Iron Blocks to alchemize them.",
      "Make a bomb.  Ingots come later.\npress R to restart the level.",

    ]
  },
  {
    m: [
      "1@                      2",
      "1                       2",
      "1 s    ^^    ^^    ^^   2",
      "111112222222222222222   2",
      "2                 1     2",
      "2                 1     2",
      "2                 1b    2",
      "2                 1b    2",
      "2   MMMMMMMMMMMMMMMMMMMMm",
      "2            …  …  …  …  ",
      "2            :  :  :  :  ",
      "2            :  :  :  :  ",
      "2            :  :  :  :  ",
      "2            ;  ;  ;  ; p",
      "mMMMMMMMMMMMMMMMMMMMMMMMM"
    ],
    signs: [
      "Liore ->"
    ]
  },
  {
    m: [
      "2                       2",
      "2p                      2",
      "22222222222222222222   22",
      "                   2    2",
      "                   22   2",
      "                   2    2",
      "   2222222222222   2   22",
      "       222     2   2    2",
      "2       d      2   22   2",
      "22      D      2   2    2",
      "22222222222    2       22",
      "@             22      22 ",
      "             222     22  ",
      "  s         2222    22   ",
      "222222222222222222222    "
    ],
    signs: [
      "Temple of the sun god ->"
    ],
  },
  {
    m: [
      "2                       2",
      "2p  ^^ ^^ ^^ ^^         2",
      "222222222222222         2",
      "2       1111  22        2",
      "2       1111   22       2",
      "2       1111    22      2",
      "2222   Sbbb1     22    22",
      "@     22bbb1          222",
      "     22 1s11 ^^      2222",
      "222222  1…122222222222222"
    ],
    signs: [
      "Fooled Ya!!"
    ]
  },
  {
    m: [
      "2222222222222222222222222",
      "2     …           …     2",
      "2     :           :     2",
      "2@    :           :     2",
      "2     :           :     2",
      "2     :           :     2",
      "2     :           :     2",
      "2     :           :     2",
      "2     ;  b     b  ;     2",
      "2222222222222222222222222"
    ],
    fight: true
  },
  {
    m: [
      "2        22222      2         ",
      "2             2     2         ",
      "2    22        2    2         ",
      "2    …         …2   2      22 ",
      "2    :   22    : 2  2    22…  ",
      "2    :   …     :  2 … 222  :  ",
      "2    : ^ :     :  2 : 2    ;  ",
      "2    : 2 :     :  2 : 2    2 2",
      "2    ;2… :     :  2s;b2    2 2",
      "2    2 : :     :  22222    2 2",
      "2   2  : :     :      …    2 2",
      "2ww2   : :     :      :    2 2",
      "2ww2   : :     ;      :    2 2",
      "2ww2   : :    2222    :    2 2",
      "2ww2   : :        2   :    2 2",
      "2ww2   : :        2   :    2p2",
      "2ww2   : :         2  :    222",
      "2ww2   : :         2  :       ",
      "2ww2   : :          2 :       ",
      "2wwd   : :         …2 ;       ",
      "2wwD   : ;   2     : 222222111",
      "222222 :22  22     :       bb2",
      "2 …  … :     …     :         2",
      "2 :  : :     :     ;        S2",
      "2 ;  ; :     :   2222222222222",
      "222222 :     :  22222222222222",
      "2@   2 :     : 222            ",
      "2    d :     ;2222            ",
      "2    D ;     22222            ",
      "222222222222222222222222222222"
    ],
    signs: [
      "Stand on bombs to jump higher",
    ],
    restart: true,
  },
  {
    m: [
      "@   B                        y",
      "  s V                        y",
      "yyyyxyJJJyNyyyNyyyNyyyNyyy   y",
      "y    y   y   ¬   ¬   ¬   ¬   y",
      "y    y^^^y                   y",
      "y    xzzzx                   y",
      "y            zzzzzzzzzzzzzzJJy",
      "y yL         y            y  y",
      "y xxL      ^ y            y  y",
      "y yyyxyxyxyxyy            y  y",
      "y                         y  y",
      "y                         y  y",
      "y      yy                 y  y",
      "y     yyyy               py  y",
      "yJJyyyyyyyyyyJJyyJJyyJJyyyy^^y"
    ],
    signs: [
      "Fifth Research Institute\nDo Not Enter"
    ],
    restart: true,
  },
  {
    m: [
      " pxxxxxxxxxxxx                ",
      "    x        y                ",
      "    x        x                ",
      "    x        y  yxxNc  NJJJJJN",
      "    x        x     y   y     y",
      " b  x NL     yL    y  ^y     y",
      " NN x yyL     yL   y   y     y",
      "    x yyyL     yN  y^  y     y",
      "      yyyyL        y   y^^^^^y",
      "      yyyyyyyL     y  ^y     y",
      "b    Ky      yL   Ky   y     y",
      "yNyNyy        yNNyyy^  y     y",
      "@  B                   y     y",
      "   V    ^  ^          yy     y",
      "NzxzzxxzzJJzzNxxNxxNyxxyp    y"
    ],

  },
  {
    m: [
      "yyyyyyyyyyyyyyy",
      "y     @       y",
      "y             y",
      "y             y",
      "yJNJNJNJNJNJNJy",
      "y y y y ywy    ",
      "y y y y ywy    ",
      "y y y y ywy  yy",
      "y y y y ywy   y",
      "y^y y y ywyy  y",
      "yyy y y ywy   y",
      "y y y y ywy  yy",
      "y y y y ywy   y",
      "y y y y ywyy  y",
      "y y yyy ywy   y",
      "y y y   ywy  yy",
      "y y y   ywy   y",
      "y   y b ywyy  y",
      "y   yyyyywy   y",
      "y   y   ywy  yy",
      "y y y   ywy   y",
      "y y y   ywyy  y",
      "y y y   ywy   y",
      "y y y ^ ywy  yy",
      "y y y y ywy   y",
      "y y y y ywyy  y",
      "yly y y ywyyyy ",
      "yly y y ywy    ",
      "yly y y^ywy  p ",
      "yyy yyyyyyyyyyy"
    ],
    restart: true,
  },
  {
    m: [
      "    ^",
      "@   y   yyy  yyJJyyyyyxyyyyyyyyyyxyyyyyyyyyyyyyyyy",
      "    y         y  y ¬   y   ¬   y    ¬  y   ¬     y",
      "yyyJy      y  y  y    yyy     yyy      y         y",
      "y¬  y         y  y ^                   y         y",
      "y   y        yy  yyyy     yyy     yyy  y         y",
      "yJyNy         y  y ¬       ¬       ¬y  y         y",
      "y  ¬y   Kyyyyyy  y    yyy     yyy   yy y         x",
      "y   y  Kxy       y     ¬   ^   ¬  ^  y yL   yyy  y",
      "yNyJy  yyy      Kyyyy     yyy     yyyy yyL  ¬y   y",
      "y   y    y     Kyy ¬       ¬   ^   ¬ y yyy   y   y",
      "y   y    y  Kyyyxy    yyy     yyy    y  ¬   Ky   y",
      "yJyNyy   y  yyyyyy                   y     Kyy   y",
      "y  ¬ ¬  Ky          KyJJJNJJJNJJJNyyyyyyyyJyyy   x",
      "y      KyyL        Kyy   y   y   y   y   y   y   y",
      "yNyyxxyyyxyL      Kyxylllylllylllylllylllyllly   y",
      "y         yyyyyyyyyyyyyyyyyyyyxyyyyyyyyxyyyyyyyyJy",
      "y               ç             ç                  y",
      "y                                                y",
      "y yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyycyyyyyyy",
      "y          ç                       ç             y",
      "y                                                y",
      "y                                                y",
      "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy y",
      "y                    ç                 ç         y",
      "y                                                y",
      "y yyyyyyyyyyyycyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
      "y                                                y",
      "y                                  çççç          y",
      "y                                               py",
      "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
    ],
  },
  {
    m: [
      " @Syyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
      "yyyybbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      "22SSSSbSSbSSSSSSSSSSSSbbbbSSSSSbSSSbSSbbSSSbSSSSSS",
      "222222 22 2222  222222    22222w222 22ww222 222222",
      "     2 22 2  2  2    2    2   2w2 2 22ww2 2 2     ",
      "     2 22 2  2  2    2    2   2w2 2 22ww2 2 2     ",
      "     2 22l2  2  2    2    2   2w2 2 22ww2 2 2     ",
      "     2 22l2  2  2    2    2   2w2 2 22ww2 2l2     ",
      "     2^22l2  2^^2    2  p 2   2w2 2^22ww2 2l2     ",
      "     222222  2222    222222   222 2222222 222     "
    ],
    restart: true,
  },
  {
    m:[
      " @       ç                       y    ç          y",
      "                                 y          S ^  y",
      "yyyyyyyyyyyyyL        KyyyycyyyyyyyyyyyyyyyySyyyyy",
      "y            yL  ç   Ky                    y     y",
      "y      ç      yL    Ky                     y     y",
      "y              yyNNyy    Kyyyyyyyyyyyyy    yc    y",
      "y   yyyyyyyL            Ky             yL        y",
      "y          yL          Ky               yL       y",
      "y           yyyyyyyyyyyy                 yyyyyyyyy",
      "yyyyyyyyy   y              Kyyyyyyyyyy   y       y",
      "y           y             Ky         y   y       y",
      "y                        Ky          y           y",
      "y              Kyyyyyyyyyy           y           y",
      "y  yyyyL      Ky                     y       c   y",
      "y      yL    Kyy                     y       y   y",
      "y       yyyyyy y                     yyyyyyyyy   y",
      "y              y                  Ky         y   y",
      "yyyyyL    ç    b       KyyyyL    Kyy         y   y",
      "y    yL        y      Ky    yL  Kyyy         y   y",
      "y     yL       y     Ky      yyyyyyy         y   y",
      "y      yyyyyyyyyyycyyyy  p    yyyyyyyyyyyy   y   y",
      "y      y               yyyL              y   y   y",
      "y  yy  y                  yL             y   y   y",
      "y   y  y                   yL            y   y   y",
      "yy  y  yy  yyyyyyyyyyyL     yL           y   y   y",
      "y   y  y   y          yL     yL          y   y   y",
      "y  yy  y  yy           yL     yL        yy   y   y",
      "y   y  y   y            yL     yL       yy   y   y",
      "yy  y  yy  y             yL     yL     yyy   y   y",
      "y   y  y   y              yL     yL    yyy   y   y",
      "y  yy  y  yy               yL         yyyy   y   y",
      "y   y  y   y                yL    ç   yyyy   y   y",
      "yy  y  yy  y                 yL      yyyyy   y   y",
      "y   y  y   y                  yL     yyyyy   y   y",
      "y  yy  y  yy                   yyyyyyyyyyy   y   y",
      "y   y  y                                 y   y   y",
      "yy  y  yy                                y   y   y",
      "y   y   yL                               y   y   y",
      "y  yy    yL                              y   y   y",
      "y   y     y                              y   y   y",
      "yy  y                                    y   y   y",
      "y   yL        y  ç        ç        ç     y   y   y",
      "y  y yL      yy                          y   y   y",
      "y     yL    yyy                          y   y   y",
      "yy     yycyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy   y   y",
      "yyy                                              y",
      "yyyy                ç       ç                    y",
      "yyyyy                                            y",
      "yyyyyy                                           y",
      "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyycyyyyyyyy"
      ],
  },
  {
    m:[
      "yyyyyyxyyyyyyxyyyyyyyxyyyyyyxy",
      "@ y     y     y     y        O",
      "  B  ç  B  ç  B  ç  B   ç    O",
      "  V     V     V     V        O",
      "NNyyyyyyyNyyyyyyNyyyyyyyN    O",
      "y    y     y     y    y      O",
      "y    y ç   y ç   y ç  y  ç   O",
      "y    B     B     B    B      O",
      "yp   V     V     V    V      O",
      "yNyxyyyyyNyxyyyyNyyxyyyyNyyyyx"
      ],
      restart: true,
  },
  {
    m:[
      "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
      "O                            O",
      "O                            O",
      "O                           OO",
      "O                           OO",
      "Op                         OOO",
      "OOOOOOOOOOOOOOOOOOOOOOOOO  OOO",
      "  @ B                     OOOO",
      "    V                     OOOO",
      "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"
      ],
  },
  {
    m:[
      "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
      "y ¬ ¬y                       y",
      "y    y                       y",
      "y    y                       y",
      "y    y                       y",
      "y@   b                       y",
      "y    b                       y",
      "y    b  çççççççççççççççççç   y",
      "y s bbb                     py",
      "yyyy2yyyyyyyyyyyyyyyyyyyyyyyyy"
      ],
      signs: [
        "Exit Ahead"
      ]
  },
  {
    m:[
      "                                    0            0",
      " @                      <00000>     0            0",
      "                       <0000000>    0            0",
      "      ^     ^     ^   <000000000   S0            0",
      "00000000000000000000000000000000  0000c0000000   0",
      "0                          0   0^^0              0",
      "0                          0   0000             <0",
      "0      00 0 0 0 00         i                   <00",
      "0p     0 ^ ^ ^ ^  00>      0                  <000",
      "00000000000000000000000000000000000000000000000000"
      ],
  },
  {
    m:[
      " @                                                ",
      "                                                 p",
      "                                               <00",
      "0000>                                         <000",
      "00000>                                        0000",
      "000000>                                       0000",
      "0000000                                     0    0",
      "0000000                                     0 ç  0",
      "0000000                                    00    0",
      "0000000  0>                             <000000000",
      "0000000  00>                           <0000000000",
      "0000000  000>                         <00000000000",
      "0000000  0000>                       <000000000000",
      "0000000  00000>                     <0000000000000",
      "0000000  000000                     00000000000000",
      "0000000  000000                     00000000000000",
      "0000000  000000                  0  00000000000000",
      "0000000  000000  0>             <0  00000000000000",
      "0000000  000000  00>           <00  00000000000000",
      "0000000  000000  000>         <000  00000000000000",
      "0000000  000000  0000>       <0000  00000000000000",
      "0000000  000000  00000wwwwwww00000  00000000000000",
      "0000000  000000  000000wwwww000000  00000000000000",
      "0000000  000000  000000wwwww000000  00000000000000",
      "0000000  000000  00000000000000000  00000000000000"
      ],
  },
  {
    m:[
      "                              ",
      "                              ",
      "                              ",
      "                              ",
      "                              ",
      "                              ",
      "                          ^  p",
      "                       ^  2222",
      "                    ^  2222222",
      "                 ^  2222222222",
      " @            ^  2222222222222",
      "           ^  2222222222222222",
      "        ^  2222222222222222222",
      "        2222222222222222222222",
      "000002222222222222222222222222"
      ],
  },
  {
    m:[//add seperators
      "2        2      2      2     J",
      "2        2      2      2     J",
      "2        2      2      2     J",
      "2   222JJ2   2JJ2   2JJ2   2JJ",
      "2  22  JJ2  22JJ2  22JJ2  22JJ",
      "2   2  JJ2   2JJ2   2JJ2   2JJ",
      "22  2  JJ22  2JJ22  2JJ22  2JJ",
      "2   2  JJ2   2JJ2   2JJ2   2JJ",
      "2  22 2JJ2  22JJ2  22JJ2  22JJ",
      "2   2 2JJ2   2JJ2   2JJ2   2JJ",
      "22  2 2JJ22  2JJ22  2JJ22  2JJ",
      "2   2 2JJ2   2JJ2   2JJ2   2JJ",
      "2  22 2JJ2  22JJ2  22JJ2  22JJ",
      "2   2 2JJ2   2JJ2   2JJ2   2JJ",
      "22@ 2 2^^22  2JJ22  2JJ22  2JJ",
      "2   2        2JJ    2JJ    2JJ",
      "2  22       22JJ   22JJ   22pJ",
      "222222222222222222222222222222"
      ],
  },
  {
    m:[
      "J                           @2",
      "J                            2",
      "J  222222222222222222222222222",
      "J                            2",
      "J                            2",
      "J22222222222222222222222222  2",
      "J                            2",
      "J                            2",
      "J  222222222222222222222222222",
      "J                            2",
      "J                            2",
      "J22222222222222222222222222  2",
      "J                            2",
      "Jp   s                       2",
      "JJ2222222222222222222222222222"
      ],
      signs: [
        "<-- Devil's Nest"
      ]
  },
  {
    m:[
      "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
      "y@   B     ç   ç    y                            y",
      "y  s V             by                            y",
      "yyyyyyyyyyyyyyyyyyyyy                            y",
      "y                2                               y",
      "y                2                               y",
      "y                2yyy   KyL   KyL   KyL   KyL    y",
      "y   NyyyyyyL       y    yyy   yyy   yyy   yyy    y",
      "y          yL      y     y     y     y     y     y",
      "y           yL     y     y     y     y     y     y",
      "y            yL    yJJJJJyJJJJJyJJJJJyJJJJJy     y",
      "yyyyyyyyyL    yL                                 y",
      "y        yL    yL                                y",
      "y         yL    yL                               y",
      "y          yL    yyJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJy",
      "y    NL     yL    y                              y",
      "y     yL     y    y                              y",
      "y      yL         B                              y",
      "y       yL        V ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^y",
      "yyyN     yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
      "y                 y           y        y         y",
      "y ç           ç   B        ç  B   ç    B         y",
      "y                 V           V        V         y",
      "yyyyyyyyyyyyyyyyyyyyyyyycyyyyyyyyyyyyyyyyyyyyN   y",
      "y                       y                        y",
      "y            ç       ç  y      ç  ç              y",
      "y         ç             y   ç        ç           y",
      "y                 ç     B                        y",
      "yp  KyyyL  KyyyL        V                   b    y",
      "yyyyyyyyyyyyyyyyyyyyyyyyyycyyyyyyyyyyyyyyyyyyNJJJy"
      ],
      signs: [
        "beware of Chimeras"
      ]
  },
  {
    m:[
    "M                                      M",
    "M                                    @ M",
    "M                                      M",
    "M                                      M",
    "M                                      M",
    "M                                      M",
    "M                                      M",
    "M                                      M",
    "M                                   MMMM",
    "M                                    MMM",
    "M                                    MMM",
    "M                                    MMM",
    "M                                    MMM",
    "M  …      …     …      …     …      …MMM",
    "M  :      :     :      :     :      :MMM",
    "M  : MM   :     :      :     :      :MMM",
    "M  :MMMM  :     :      :     :    M :MMM",
    "M  MMMMM  :     :      :     :  M M :MMM",
    "M^MMMMMMM ;     ;   ^  ;     ;  M^MMMMMM",
    "MMMMMMMMMMMMSSSSSSSSSSSSSSSSMMMMMMMMMMMM"
    ],
    fight: true
  },
  {
    m:[
      "                                       1",
      " @                                     1",
      "                                       1",
      "                                       1",
      "1111≥        ≤111111≥        ≤111111≥  1",
      "1   1≥      ≤1      1≥      ≤1      11 1",
      "1    1≥ ^^ ≤1        1≥ ^^ ≤1          1",
      "1     111111          111111           1",
      "1             ≤1111≥           ≤111≥   1",
      "1 11≥        ≤1    1≥         ≤1   1≥  1",
      "1   1111111111      11111111111      111",
      "1                                      1",
      "1              ≤11≥             ≤11≥   1",
      "1111111111111111  111111111111111  111 1",
      "1                                      1",
      "1                                      1",
      "1  1111111111111111111111111111111111111",
      "1                                      1",
      "1                                     p1",
      "1111111111111111111111111111111111111111"
      ],
  },
  {
    m:[
      "1                                      1",
      "1 @                                    1",
      "1                                      1",
      "1                                      1",
      "1                                      1",
      "1                                      1",
      "1                                      1",
      "1                                      1",
      "1                                      1",
      "1                                      1",
      "1                                      1",
      "1                                      1",
      "1                                      1",
      "1                                      1",
      "1                                      1",
      "1                                      1",
      "1                                      1",
      "1                                      1",
      "1     p                                1",
      "1111111111111111111111111111111111111111"
      ],
  },
  {
    m:[
      "2      bJ                222222222222222",
      "2 @    bJ                   V          2",
      "2      bJ                   C  ç       2",
      "2   s  bJ  ^    ^   ^       V          2",
      "2222222222222222222222222222222222222  2",
      "2                                      2",
      "2                                      2",
      "2                                      2",
      "2 222      222      222      222      22",
      "2    2    2   2    2   2    2   2    2 2",
      "2     2  2     2  2     2  2     2  2  2",
      "2     2  2     2  2     2  2     2  2  2",
      "2     2  2     2  2     2  2     2  2  2",
      "2   2 2  2   2 2  2   2 2  2   2 2  2  2",
      "2   2 2^^2   2 2^^2   2 2^^2   2 2^^2  2",
      "2   2  22    2  22    2  22    2  22   2",
      "2  22       22       22       22   ç   2",
      "2  22       22       22       22       2",
      "2  22       22       22       22      p2",
      "2222222222222222222222222222222222222222"
      ],
      signs: ["same controls, just a different body."]
  },
  {
    m:[
      "2 @                                    2",
      "2                                      2",
      "2                                      2",
      "2222JJ22222222JJ222222JJ222222JJ2222JJ22",
      "2         V       2       2       V    2",
      "2         B       2       2       C    2",
      "2         V       2       2       V    2",
      "2JJ222222222222JJ2222222JJ22222JJ2222222",
      "2     V       2       2       2        2",
      "2     C       2       2       2        2",
      "2     V       2       2       2        2",
      "2JJ222222222JJ22JJJ2222JJJ22JJ2222222222",
      "2        2        J       J            2",
      "2        2        J       J            2",
      "22       2       SJ      SJ            2",
      "222222222222222222222222222222JJJJJJJJJ2",
      "2    2       2        2      2         2",
      "2    2       2        2      2         2",
      "2    2       2        2      2        p2",
      "2JJ222222JJ222222JJ222222JJ22222JJ222222"
      ],
  },
  {
    m:[
      "1            1   1     1   1           1",
      "1            1   1  @  1   1           1",
      "1           111  1     1  111          1",
      "1           111  1  i  1  111          1",
      "1           111  1111111  111          1",
      "1          11111         11111         1",
      "1          11111         11111         1",
      "1          11111         11111         1",
      "1 111111111111111111111111111111111111 1",
      "1                                      1",
      "1                                      1",
      "1                                      1",
      "1                   i                  1",
      "1111111111111111111111111111111111111111",
      "                                        ",
      "                                        ",
      "                                    ç   ",
      "                                        ",
      "p                                       ",
      "JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ",
      "JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ"
      ],
      restart: true
  },
  {
    m:[
      "                   KyyL                 ",
      "                  Ky  yL                ",
      "                 Ky    yL               ",
      "                Ky      yL              ",
      "               Ky        yL             ",
      "              Ky          yL            ",
      "             Ky            yL           ",
      "            Ky     KyyL     yL          ",
      "       @   Ky     Ky  yL     yL         ",
      "          Ky     Ky    yL     yL        ",
      "         Ky     Ky      yL     yL       ",
      "       sKy     Ky        yL     yL      ",
      "       yy     Ky          yL     yL     ",
      "      Ky     Ky            yL     yL    ",
      "     Ky     Ky              yL     yL   ",
      "    Ky     Ky                yL     yy  ",
      "   Ky     Ky                  yL        ",
      "  Ky     Ky                    yL       ",
      "pKy  s  Ky                      yL     y",
      "yyyyyyyyy                        yyyyyyy"
      ],
      signs:["up the mountain -->","go back.  I tricked you lol"]
  },
  {
    m:[
      "                                                                                                              @                                       ",
      "                                                                                                                                                      ",
      "p                                                                                                               s                                    s",
      "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
      ],
      signs: [
        "Long Walk -->",
        "You didn't learn from last time?\n<-- Go back"
      ],
  },
  {
    m:[
      "                              ",
      "                              ",
      "                     @        ",
      "                              ",
      "                       s     p",
      "    00000000000000000000     0",
      "    0                         ",
      "    0                         ",
      "p  s0                         ",
      "00000                         "
      ],
      signs: [
        "Intro to Invisible Blocks",
        "I'm sorry, it's just so fun to trick you lol.",
      ]
  },
  {
    m:[
      "              @               ",
      "              s               ",
      " …  …  …  …  000  J  J  J  J p",
      " :  :  :  :   0   J  J  J  J  ",
      " :  :  :  :   0   J  J  J  J  ",
      " :  :  :  :   0   J  J  J  J  ",
      " :  :  :  :   0   J  J  J  J  ",
      " :  :  :  :   0   b  b  b  b  ",
      " :  :  :s :   0   J  Js J  J  ",
      "000000000000000000000000000000"
      ],
      signs: [
        "Memory test",
        "Bruh, how couldn't you remember\nthat you'd fall right through these??\nR to restart",
        "Bruh, you're that bad at\nparkour after you've\ncome so far?  R to restart."
      ]
  },
  {
    m:[
      "0000000000",
      "0   Vçççç0",
      "0  @Vçççç0",
      "0   Bçççç0",
      "0  sV   p0",
      "0 00000000",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0        0",
      "0  sp    0",
      "0  00    0"
      ],
      signs: [
        "15 chimeras vs. falling down a bottomless pit",
        "good choice",
      ],
      restart: true,
  },
  {
    m:[
      " @                           y",
      "                             y",
      "   s   ^                     y",
      "yyyyyyyyyyL    KyyyL   Kyyy  y",
      "y     ¬   yL  Ky ¬ yL Ky ¬y  y",
      "y          yyyy     yyy      y",
      "y                            y",
      "y  yyyyyL                    y",
      "y  y  ¬ yL                   y",
      "y  y     yyyyyyyyyyyyyyyyyyyyy",
      "y                            y",
      "y                            y",
      "y                            y",
      "yyyyyyyyyyyyyyyyyyyyyyyyyy   y",
      "y       y  ¬     ¬     ¬     y",
      "y       y   ç    ç           y",
      "y       V                    y",
      "y       C                    y",
      "yp      V                    y",
      "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
      ],
      signs: [
        "Welcome to the fifth labratory!"
      ]
  },
  {
    m:[
      "y                            y",
      "y@                           y",
      "y                            y",
      "y                            y",
      "yyyy                         y",
      "y                            y",
      "y                            y",
      "y                            y",
      "y                            y",
      "y                            y",
      "y                            y",
      "y                            y",
      "y                            y",
      "y                            y",
      "y                            y",
      "y                            y",
      "y                            y",
      "y                            y",
      "y                            y",
      "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
      ],
      fight: true
  },
  {
    m:[
      " @   ","     ",
      "     "," s   ",
      "00   ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "     ","     ",
      "   s ",
      "22222"
      ],
      signs:[
        "Fall down.",
        "Yay you won.",
      ]
  },
  {m:[" @","","000"]},
];
var blockTypes = {
  "0": "b0", //dirt
  "<": "bl", //slant left
  ">": "br", //slant right
  "s": "sign",
  "S": "switch1",
  "^": "spike",
  "1": "sand",
  "≤": "sl",
  "≥": "sr",
  "c": "checkpoint1",
  "b": "bomb",
  "i": "iron",
  "2": "brick",
  "I": "ice",
  ":": "pMid",
  "…": "pTop",
  ";": "pBot",
  "m": "mar",
  "M": "mar2",
  "¯": "marl",
  "˘": "marr",
  "ø": "dop",
  "d": "d1",
  "D": "d2",
  "∂": "d3",
  x: "f1",
  y: "f2",
  z: "f5",
  J: "f4",
  K: "f6",
  L: "f7",
  N: "f3",
  O: "pls",
  B: "fd1",
  V: "fd2",
  C: "fd3",
  G: "fdo",
  "¬": "light"
};
var bg;
var bg2;
var palette = { "☙": "rgb(225,200,125)", "❧": "rgb(225,200,75)", "0": "rgb(0,0,0)", "1": "rgb(25,25,25)", "2": "rgb(50,50,50)", "3": "rgb(75,75,75)", "4": "rgb(100,100,100)", "5": "rgb(125,125,125)", "6": "rgb(150,150,150)", "7": "rgb(175,175,175)", "8": "rgb(200,200,200)", "9": "rgb(225,225,225)", " ": "rgba(0,0,0,0)", "⇲": "rgb(255,255,255)", "a": "rgb(255,0,0)", "b": "rgb(225,0,0)", "c": "rgb(200,0,0)", "d": "rgb(175,0,0)", "e": "rgb(150,0,0)", "f": "rgb(125,0,0)", "g": "rgb(100,0,0)", "h": "rgb(75,0,0)", "i": "rgb(50,0,0)", "j": "rgb(25,0,0)", "ɲ": "rgb(255,225,200)", "➘": "rgb(225,200,175)", "⇘": "rgb(200,175,150)", "⬂": "rgb(175,150,125)", "⬊": "rgb(150,125,100)", "→": "rgb(255,150,0)", "⇒": "rgb(225,125,0)", "⟹": "rgb(200,100,0)", "⇨": "rgb(175,75,0)", "⇾": "rgb(150,50,0)", "➾": "rgb(125,25,0)", "¡": "rgb(255,200,0)", "™": "rgb(225,175,0)", "£": "rgb(200,150,0)", "¢": "rgb(175,125,0)", "∞": "rgb(150,100,0)", "§": "rgb(125,75,0)", "¶": "rgb(100,50,0)", "•": "rgb(75,25,0)", "ª": "rgb(50,25,0)", "º": "rgb(75,50,0)", "‹": "rgb(100,75,0)", "€": "rgb(125,100,0)", "›": "rgb(150,125,0)", "#": "rgb(255,255,0)", "$": "rgb(225,225,0)", "%": "rgb(200,200,0)", "^": "rgb(175,175,0)", "&": "rgb(150,150,0)", "*": "rgb(125,125,0)", "(": "rgb(100,100,0)", ")": "rgb(75,75,0)", "-": "rgb(50,50,0)", "_": "rgb(25,25,0)", "←": "rgb(150,255,0)", "⇐": "rgb(125,225,0)", "⟸": "rgb(100,200,0)", "⇦": "rgb(75,175,0)", "⇽": "rgb(50,150,0)", "⇠": "rgb(25,125,0)", "k": "rgb(0,255,0)", "l": "rgb(0,225,0)", "m": "rgb(0,200,0)", "n": "rgb(0,175,0)", "o": "rgb(0,150,0)", "p": "rgb(0,125,0)", "q": "rgb(0,100,0)", "r": "rgb(0,75,0)", "s": "rgb(0,50,0)", "t": "rgb(0,25,0)", "↑": "rgb(0,255,150)", "⇑": "rgb(0,225,125)", "⇡": "rgb(0,200,100)", "৲": "rgb(0,175,75)", "⬆︎": "rgb(0,150,50)", "⇧": "rgb(0,125,25)", "+": "rgb(0,255,255)", "=": "rgb(0,225,225)", "Q": "rgb(0,200,200)", "W": "rgb(0,175,175)", "E": "rgb(0,150,150)", "R": "rgb(0,125,125)", "T": "rgb(0,100,100)", "Y": "rgb(0,75,75)", "U": "rgb(0,50,50)", "I": "rgb(0,25,25)", "ī": "rgba(0,150,255,0.75)", "ĭ": "rgba(0,150,255,0.5)", "ï": "rgba(0,150,255,0.25)", "↓": "rgb(0,150,255)", "⇓": "rgb(0,125,225)", "⇩": "rgb(0,100,200)", "⇣": "rgb(0,75,175)", "☟": "rgb(0,50,150)", "⬇︎": "rgb(0,25,125)", "u": "rgb(0,0,255)", "v": "rgb(0,0,225)", "w": "rgb(0,0,200)", "x": "rgb(0,0,175)", "y": "rgb(0,0,150)", "z": "rgb(0,0,125)", "`": "rgb(0,0,100)", "~": "rgb(0,0,75)", "!": "rgb(0,0,50)", "@": "rgb(0,0,25)", "ƌ": "rgb(150,0,255)", "⇔": "rgb(125,0,225)", "⟺": "rgb(100,0,200)", "⬄": "rgb(75,0,175)", "⇿": "rgb(50,0,150)", "⬌": "rgb(25,0,125)", "O": "rgb(255,0,255)", "P": "rgb(225,0,225)", "A": "rgb(200,0,200)", "S": "rgb(175,0,175)", "D": "rgb(150,0,150)", "F": "rgb(125,0,125)", "G": "rgb(100,0,100)", "H": "rgb(75,0,75)", "J": "rgb(50,0,50)", "K": "rgb(25,0,25)", "৳": "rgb(255,0,150)", "⇕": "rgb(225,0,125)", "⇳": "rgb(200,0,100)", "⬍": "rgb(175,0,75)", "⥌": "rgb(150,0,50)", "⥍": "rgb(125,0,25)", "L": "rgb(255,75,0)", "Z": "rgb(225,100,0)", "X": "rgb(200,125,0)", "C": "rgb(175,150,0)", "V": "rgb(150,175,0)", "B": "rgb(125,200,0)", "N": "rgb(100,225,0)", "M": "rgb(75,255,0)", "[": "rgb(0,255,75)", "]": "rgb(0,225,100)", "ᚸ": "rgb(0,200,125)", "✡︎": "rgb(0,175,150)", "'": "rgb(0,150,175)", ",": "rgb(0,125,200)", ".": "rgb(0,100,225)", "/": "rgb(0,75,255)", "{": "rgb(75,0,255)", "}": "rgb(100,0,225)", "|": "rgb(125,0,200)", ":": "rgb(150,0,175)", "ᚢ": "rgb(175,0,150)", "℃": "rgb(200,0,125)", "℉": "rgb(225,0,100)", "?": "rgb(255,0,75)", "ȡ": "rgba(150,0,255,0.8)", "Ȣ": "rgba(150,0,255,0.7)", "ⱴ": "rgba(150,0,255,0.6)", "Ɂ": "rgba(150,0,255,0.5)", "⁊": "rgba(150,0,255,0.4)", "⸘": "rgba(150,0,255,0.3)", "‽": "rgba(150,0,255,0.2)", "⤿": "rgba(255,150,0,0.8)", "⤾": "rgba(255,150,0,0.6)", "⟳": "rgba(255,150,0,0.4)", "↻": "rgba(255,150,0,0.2)" };

var art = {
  //characters
  //edward
  body1: "      1122     ;    113442299  ;   113334429   ;   112303429   ;   112233329   ;    11223129   ;    1111119    ;    0111119    ;    0111119    ;    0111119    ;    0011119    ;     011119    ;     011119    ;     011119    ;     01119     ;     01119     ;     01111     ;     01111     ;     01111     ;     01111     ;     01311     ;     03031     ;     01311     ;      0111     ;       01      ",
  cape1: "         cee;        c  e;       c   e;      ceeee0;     cc     ;     cc     ;     cc     ;     ccee   ;     ccee   ;     ccee   ;     ccee   ;     ccee   ;     cceee  ;      ceee  ;      ccee  ;      ccee  ;      ccee  ;      ccee  ;      ccee  ;      ccee  ;      ccee  ;      ccee  ;      ccee  ;      ccee  ;      ccee  ;     ccceee ;     ccccee ;     ccccee ;     ccccee ;     ccccee ;     ccccee ;     ccccee ;    cccccee ;    cccccee ;    ccccce  ;    cccce   ;   cceee    ;   ce       ;  ce        ;            ",
  cape2: "         cee;        c  e;       c   e;      ceeee0;      c     ;      c     ;      c     ;      cee   ;      cee   ;      cee   ;      cee   ;      cee   ;      ceee  ;     cceee  ;     cccee  ;     cccee  ;     cccee  ;     cccee  ;     cccee  ;     cccee  ;     cccee  ;     cccee  ;     cccee  ;     cccee  ;     cccee  ;      cceee ;      cccee ;      cccee ;      cccee ;      cccee ;      cccee ;      cccee ;      cccee ;     ccccee ;     cccce  ;     ccce   ;     cee    ;     ce     ;    ce      ;   ce       ",
  head1: "          ;   ™™™™   ;  ™™£™™™  ;  ™£⇘£™ɲ  ;  ™£ɲ£™⇲  ;  £⇘ɲ➘£ɲ  ; ™¢➘ɲɲ➘ɲ  ; ™ ➘ɲɲɲ   ; ¢ ➘➘➘    ;™¢        ;™         ;¢         ;          ",
  arm1: "  34  ; 3344 ; 2333 ; 2233 ; 233  ; 345  ; 345  ; 345  ; 345  ; 345  ;2245  ; 222  ; 322  ; 345  ; 345  ; 345  ; 345  ; 455  ;  45  ;   5  ; 4 5  ; 445  ",
  arm2: "  34  ; 3334 ; 2333 ; 2333 ; 223  ; 345  ; 345  ; 345  ; 345  ; 345  ;2245  ; 222  ; 322  ; 345  ; 345  ; 345  ; 345  ; 456  ; 456  ; 456  ; 456  ; 456  ; 456  ; 456  ; 456  ; 456  ;  4   ",
  arm3: "  34         ; 3344        ; 2333     3  ; 2233     33 ; 233     332 ; 345     332 ; 345    542  ; 345   543   ; 345  543    ; 345 543     ; 243543      ; 22243       ;  223        ",
  arm4: "  12  ; 1122 ; 1112 ; 1122 ; 112  ; 112  ; 112  ; 011  ; 011  ; 011  ; 011  ; 011  ; 011  ; 0111 ; 0111 ; 0111 ; 0111 ; 0111 ; 0011 ;  ⇲⇲  ; ⇲⇲⇲  ; 99⇲  ",
  arm5: "  12         ; 1112        ; 1112     ⇲  ; 1111     ⇲⇲ ; 011     ⇲⇲9 ; 011     ⇲9  ; 011    2111 ; 011   21111 ; 011  21111  ; 011 21110   ; 01111100    ; 001110      ;  0000       ",
  leg1: "0001   ;00001  ;00001  ;00001  ;11001  ; 1001  ; 1001  ; 1001  ; 1001  ; 1001  ; 1001  ; 1000  ; 1000  ; 1000  ; 100   ; 100   ; 100   ;9909   ; 191   ; 000   ; 000   ; 000000; 000000; 000000;       ",
  leg2: "01            ;0111          ;000111        ;10000011      ; 111000001    ;   11101000   ;     101110   ;       1100   ;        100   ;        000   ;        000   ;        909   ;        090   ;        100   ;        110000;        111000;        111110",

  //alphonse
  head2: "              7;             53;       577  43 ;     55548743  ;    554444443  ;   5444443⇲0   ;  5543344443   ;  4443234004   ;  4434443444   ; 44433333004   ; 3333   33344  ;           33  ",
  body2: "        34     43        ;       3345787040        ;   3330345787503030444566;   3333045787543304445556;   2333303000000044445344;    233334444444244453344;    23333322344422223334 ;    22333200233422223334 ;    2233320023332222233  ;    2233332233332222233  ;    223333333333222223   ;     23333333333322222   ;     2233333333332222    ;     2233333333332222    ;     223444455533222     ;     224∞∞∞∞∞∞∞53222     ;     223∞∞∞∞∞∞∞3522      ;      2∞3333333∞522      ;      23§§∞∞∞∞∞3523      ;      2§3333333∞433      ;      22§§§§§§§4333      ;      222222444333       ;      223333333333       ;       23333333333       ;       2233233333        ;       2232023333        ;       222000233         ;        2320233          ;        2232333          ;         22333           ",
  aarm1: "    7   ;7  66  7; 634446 ; 33¶¶44 ;23¶33¶44;2233¶334; 222•33 ; 122231 ; 211112 ; 222223 ; 23334  ; 23334  ; 23334  ;223334  ;113334  ;112334  ; 11222  ;  1222  ;  3334  ;  3334  ;  33344 ;  23334 ;  23334 ;  22334 ;  22333 ;  22233 ;    11  ;  2122  ;  2122  ;  222   ",
  aleg1: "  3334    ; 233344   ; 233334   ; 233334   ; 233334   ; 233334   ; 233334   ; 233344   ; 23334    ; 23334    ; 23334    ; 23334    ; 22334    ;  2334    ;  11112   ;  22222   ;  22222   ;  1122    ; 23111    ; 23334    ; 23334    ; 23334    ; 23334    ; 22334    ;  2334    ;  2332    ;  2223344 ;  23333344;  23333334;  22223333",
  aleg2: " 44444               ;43333444             ;3333333444           ;333333333444         ;22333333333444       ; 222233333333332     ;    2223333333122    ;      22223311111    ;         22111111    ;          111114     ;           23334     ;           23334     ;           23334     ;           22334     ;            2234     ;            2234     ;            2234     ;            1231444  ;            21133334 ;            22233334 ;            22222334 ",
  aa1: "  899999999    ; 89       89   ; 89       89   ; 89       89   ;  89       89  ;  89       89  ;  89       89  ;   89       89 ;   89       89 ;   89       89 ;  89         89;  89         89;  89         89; 89         89 ; 89         89 ; 89        89  ;89         89  ;89          89 ; 89         89 ; 89          89",
  aa2: "  899999999    ; 89       89   ; 89       89   ; 89       89   ;  89       89  ;  89       89  ;   89      89  ;   89      89  ;  89      89   ;  89      89   ; 89      89    ; 89      89    ; 89      89    ;  89      89   ;   89      89  ;    89      89 ;    89      89 ;   89      89  ;  899     899  ; 89       9    ",
  aa3: "  899999999    ; 89       89   ; 89       89   ; 89       89   ;89       89    ;89       89    ;9       89     ;9       89     ;89       89    ;89       89    ; 89       89   ; 89       89   ; 89       89   ;  89       89  ;  89       89  ;  89       89  ;  89       89  ; 89       89   ;89       89    ;9       89     ",

  //greed
  body3: "         000111          ;       000000011         ;      00000000011        ;      000000000011       ;      000000000001       ;      000003300001       ;      000003300000       ;      100000000000       ;      100000000000       ;      110000000000       ;       1000000000        ;       1000000000        ;       1000000000        ;       1000000000        ;       1000000000        ;       1000000000        ;       1000000000        ;       1100000000        ;        100000000        ;        10000000         ;        10000000         ;        10000000         ;        10000000         ;        10000000         ;        10000000         ;        11003000         ;         1000000         ;         110000          ;          1100           ;                         ",
  garm1: " 1111  ;111111 ;11gg11 ;11gg11 ;011g11 ;001g1  ; 01g1  ; 01g1  ; 01g1  ; 01g1  ; 01g1  ; 01g0  ; 01g0  ; 01g0  ; 00g0  ; 01g1  ; 01g1  ; 01g1  ; 01g1  ; 01g1  ; 01g1  ;11gg1  ;01gg1  ;011111 ; 1 1 0 ; 1 1  0; 1  0 0; 0  0  ;0  0   ;       ",
  garm2: " 1111  ;111111 ;11gg11 ;11gg11 ;011g11 ;001g1  ; 01g1  ; 01g1  ; 01g1  ; 01g1  ; 01g1  ; 01g0  ; 01g0  ; 00g0  ; 00g0  ; 01g1  ; 01g1  ; 01g1  ; 01g1  ; 01g1  ; 01g1  ;10gg1  ;10gg1  ;10111  ;1111   ;       ;       ;       ;       ;       ",
  gleg1: "         ;  111    ; 11111   ; 11111   ; 11111   ; 01111   ; 01111   ; 01111   ; 01111   ; 01111   ; 01111   ; 01101   ; 01101   ; 01001   ;  0001   ;  0011   ;  0011   ; 01111   ; 01111   ; 01111   ; 01110   ; 01110   ; 01110   ; 01110   ; 01110   ; 01110   ; 0010111 ; 00111111; 00111111; 00000000",
  gleg2: "                ;  111           ; 111111         ; 11111111       ; 1111100011     ;  1110000011    ;    100000001   ;      0000001   ;        00001   ;         0001   ;         0001   ;         0001   ;         0001   ;         0001   ;         0001   ;         0001   ;         0001   ;         0001   ;         0001   ;         000011 ;         0000001;         0000000;          000000",
  ghead1: "   0011   ;  000011  ; 00000011 ; 00hh00db ; 00hh0000 ; 10h00000 ; 10h00009 ; 110h0009 ;  10h009  ;  10h00   ",

  //lust
  body4: "       ɲɲɲɲ         ;      ɲɲɲɲɲɲɲ       ;     ɲɲɲɲɲɲɲd       ;    ➘ɲɲɲɲɲɲɲɲd      ;    1➘ɲɲɲɲɲɲɲɲ      ;    01➘➘➘➘➘➘➘➘1     ;    011100000001    ;    000000000001    ;    000000000000    ;    000000000000    ;    10000000000     ;    1000000000      ;    1000000000      ;    1100000000      ;     100000000      ;     110000000      ;      10000000      ;      10000000      ;      10000000      ;      1000000       ;      1000000       ;      1000000       ;      1000000       ;      1000000       ;      1000000       ;      1000000       ;      1000000       ;       00000        ;       00000        ;        000         ",
  half1: "      11100011      ;      11000011      ;      110000111     ;     1100000111     ;     1100000111     ;    11100000011     ;    111000000111    ;    110000000111    ;    110000000111    ;   1110000000011    ;   11000000000111   ;   11000000000011   ;  1110000000000111  ;  1110000000000111  ;  1110000000000111  ;  11100000000000111 ; 111100000000000111 ; 111000000000000111 ; 111000000000000111 ;1111000000000000011 ;11110000000000000111;11110000000000000111;11100000000000000001;11100000000000000010;11100000000000000000; 110000000000000000 ; 110000000000000000 ;  1000000000000000  ;   0000000000000    ;                    ",
  lleg1: "         ;  111    ; 11111   ; 11111   ; 11111   ; 01111   ; 01111   ; 01111   ; 01111   ; 01111   ;  1111   ;  1101   ;  1101   ;  1001   ;  0001   ;   011   ;  0011   ;  1111   ;  1111   ;  1111   ;  0110   ;  0110   ;  0110   ;  0110   ;  0010   ; 00010   ; 000000  ; 0000000 ; 00 00000; 0   0000",
  lleg2: "               ;  111          ; 11111         ; 11111         ; 111111        ;  111111       ;   111111      ;    111111     ;     111111    ;      11111    ;       1111    ;       1111    ;       1111    ;       1111    ;       1111    ;       1111    ;       1111    ;       1111    ;       1111    ;        111    ;        111    ;        111    ;        111    ;        1111   ;        11111  ;        1  111 ;        1   111;               ;               ;               ",
  larm1: "  ɲɲ   ; ɲɲɲɲ  ; ɲggɲ  ; ɲggɲ  ; ɲɲgɲ  ; ɲɲgɲ  ; ɲɲgɲ  ; 01g1  ; 01g1  ; 01g1  ; 01g1  ; 01g0  ;  1g0  ;  1g0  ;  0g0  ;  1g1  ;  1g1  ;  1g1  ;  1g1  ;  1g1  ;  1g1  ;  1g1  ;  1g1  ; 111g  ; 111g  ; 1111  ;       ;       ;       ;       ",
  larm2: "  ɲɲ   ; ɲɲɲɲ  ; ɲggɲ  ; ɲggɲ  ; ɲɲgɲ  ; ɲɲgɲ  ; ɲɲgɲ  ; 01g1  ; 01g1  ; 01g1  ; 01g1  ; 00g0  ;  0g0  ;  0g0  ;  0g0  ;  1g1  ;  1g1  ;  1g1  ;  1g1  ;  1g1  ;  1g1  ;  1g1  ; 01g1  ; 0gg1  ; 0gg1  ;00000  ;00000  ;0 0 0  ;0 0 0  ;0 0 0  ;0 0 0  ;0 0 0  ;0 0 0  ;0 0 0  ;0 0 0  ;0 0 0  ;0 0 0  ;0 0 0  ;0 0 0  ;0 0 0  ",
  lhead1: "  11111   ; 11000110 ; 100➘➘➘0 0;000➘ɲɲɲ➘ 0;000➘ɲɲɲS0 ;000➘ɲɲɲɲ  ;0000ɲɲɲɲ  ;0000 ɲɲɲ  ;0000      ; 000      ; 0000     ;  000     ;   000    ;   000    ;   00     ;  000     ; 000      ;0000      ;000       ; 000      ;  00      ;   00     ",

  //gluttony
  body5: "                         ;                         ;         0001111         ;        000001111        ;       00000001111       ;      000000000111       ;      000000000011       ;     0000000⇲000011      ;     00000000000001      ;     00000000000001      ;     000000000000011     ;     0000000000000011    ;     0000000000000001    ;     00000000000000011   ;     000000000000000000  ;     000000000000000000  ;     000000000000000000  ;    00000000000000000000 ;    00000000000000000000 ;   100000000000000000000 ;   100000000000000000000 ;   100000000000000000000 ;   110000000000000000000 ;    1000000000000000000  ;    1100000000000000000  ;     11111100000000000   ;      111111⇲11100000    ;        11111111111      ;          11111          ;                         ",
  glarm1: "            ;            ;  000111    ; 00000011   ; 00000001   ; 000gg001   ; 000gg000   ; 0000g000   ; 1100g000   ;  100g00    ;  100g00    ;  100g00    ;  100g00    ;  ⬊⬊g⬊⬊⬊    ;  ⬊⬊g⬊⬂⬂    ;  ⬊⬊g⬂⬂⬂    ;  ⬊⬊g⬂⬂⬂    ;  ⬊⬊g⬂⬂⬂    ;  ⬊⬊g⬂⬂⬂    ;  ⬊⬊g⬂⬂⬂    ;  ⬊⬊g⬂⬂⬂    ;  ⬊⬊g⬂⬂⬂    ;  ⬊⬂g⬂⬂⬂    ;  ⬊⬂g⬂⬂⬂    ;  ⬊⬂g⬂⬂⬂    ;  ⬂⬂g⬂⬂⬂    ;  ⬂⬂g⬂⬂⬂    ;  ⬂⬂g⬂⬂⬂    ;  ⬂⬂g⬂⬂⬂    ;  ⬊⬊g⬂⬊⬊    ;   ⬊g⬂⬊     ;  ⬊⬊g⬂⬂⬂⬂   ;  ⬂⬂gg⬂⬂⬊⬂  ;  ⬂⬂gg⬂⬂⬊⬂  ;  ⬂⬂⬂⬂⬂⬊⬂   ;  ⬂⬂⬂⬊⬊⬊    ;            ;            ;            ",
  glleg1: "    0011    ;   000011   ;  00000011  ;  00000001  ;  00000000  ;  10000000  ;  10000000  ;  11000000  ;   110000   ;    10000   ;    10000   ;    10000   ;    10000   ;    10000   ;    10000   ;    10000   ;    10000   ;    10000   ;    10000   ;    100000  ;    10000000;    11000000;     1111111;            ;            ",
  glhead1: "            ;    ⬂⬂⬂⬂⬂   ;   ⬂⬂⬂⬂⬂⬂⬂  ;   ⬂⬊⬂⬂⬂⬂⬂⬂ ;  ⬂⬊⬂⬂⬂⬂⬂⇲⬂ ;  ⬂⬊⬂⬂⬂⬂⬂⬂⬂⬂;  ⬂⬂⬊⬊⬂⬂⬂⬂⬂⬂;  ⬂⬂⬂⬂⬂⬂⬂⬂⬂⬂;  ⬂⬂⬂⬂⬂⬊⬊⬊⬊ ;   ⬂⬂⬂⬂⬂⬂⬂⬂ ;   ⬂⬂⬂⬂⬂⬂⬂  ;    ⬂⬂⬂⬂    ",

  //scar
  shead1: "    9999  ;   999999 ;  99666999;   666⇘⇘⇘ ;   ⬂⬂⇘⇘d⇲ ;   ⬂⇘⇘⇘⇘⇘⇘;   ⬂⇘⇘⇘⇘⇘⇘;    ⬊⬂⇘⇘⇘ ;    ⬂⬊⬂⬂⇘ ;    ⬂⬂⬊⬂⬂ ;    ⬂⬂⬂   ",
  body6: "       ☙☙☙☙☙☙       ;      ☙™™™™™☙☙      ;     ☙™™™™™™™☙      ;     ™™☙☙☙☙☙™™☙     ;     ™❧☙☙11☙☙™™     ;     ❧❧☙☙11☙☙☙™     ;     ❧❧☙☙☙☙☙☙☙☙     ;     ❧❧❧☙☙☙☙☙☙☙     ;     ❧❧❧☙☙☙☙☙☙☙     ;      ❧❧☙☙☙☙☙☙☙     ;      ❧❧☙☙☙☙☙☙☙     ;      ❧❧☙☙☙☙☙☙☙     ;      ❧❧☙☙☙☙☙☙☙     ;      ❧❧☙☙☙☙☙☙☙     ;      ❧❧☙☙☙☙☙☙☙     ;      ❧❧❧☙☙☙☙☙      ;      ❧❧❧☙☙☙☙☙      ;       ❧❧☙☙☙☙☙      ;       ❧❧☙☙☙☙☙      ;       ❧❧☙☙☙☙☙      ;       ❧❧☙☙☙☙☙      ;       ❧❧☙☙☙☙☙      ;       ❧❧☙☙☙☙☙      ;       ❧❧☙☙☙☙☙      ;       ❧❧☙☙☙☙☙      ;       ❧❧☙☙☙☙       ;       ❧❧☙☙☙☙       ;       ❧❧☙☙☙☙       ;       ❧❧❧❧❧❧       ;        ❧❧❧❧        ",
  sarm1: "  ™❧❧  ; ™☙☙❧❧ ; ™☙☙❧❧ ; ™☙☙❧❧ ; ™☙☙❧❧ ; ™☙☙❧❧ ; ™☙☙❧❧ ; ™☙☙❧❧ ; ™☙☙❧❧ ; ™☙☙❧❧ ; ™☙☙☙❧ ; ™☙☙☙❧ ; ™☙☙☙❧ ; ™☙☙☙❧ ; ™☙☙❧  ; ™☙❧❧❧ ; ™❧❧☙❧ ; ™☙☙☙❧ ; ™☙☙☙❧ ; ™☙☙☙❧ ; ™☙☙☙❧ ; £™™™™ ; £™™™™ ; ™☙☙☙❧ ; £™™™™ ; £™™™™ ;  ⬂⇘⇘  ;   ⬂⇘⇘ ;  ⇘ ⬂⇘ ;  ⬂⬂⇘⇘ ",
  sarm2: "  ™❧❧  ; ™❧❧❧❧ ; ™☙❧❧❧ ; ™☙☙❧❧ ; ™☙☙❧❧ ; ™☙☙❧❧ ; ™☙☙❧❧ ; ™☙☙❧❧ ; ™☙☙❧❧ ; ™☙☙❧❧ ; ™☙☙❧❧ ; ™☙☙❧❧ ; ™☙☙❧❧ ; ™☙☙❧❧ ; ™⬊☙❧  ; ™2❧❧❧ ; ™2❧☙❧ ; ™⬂☙2❧ ; ™2☙2❧ ; ™⬂☙⬂❧ ; ™☙22❧ ; £™⬂⬂™ ; £™22  ; ™☙⬂⬂  ; £⬊⬂2  ; £22⬂  ;  ⬂⇘⇘  ;  ⬂⇘⇘  ;  ⬂⇘⇘⇘ ;  ⬂⇘⬂ ⇘; ⬂⬂⇘⇘ ⇘; ⬂ ⇘ ⇘ ; ⬂ ⇘ ⇘ ; ⬂ ⇘ ⇘ ",
  sleg1: "  223     ; 22233    ; 22223    ; 22223    ; 22223    ; 22223    ; 22223    ; 12223    ; 12223    ; 12223    ; 12222    ; 12222    ; 12222    ; 12222    ; 12222    ; 12222    ; 12222    ; 12222    ; 12222    ; 12222    ; 112222   ; 112222   ; 112222   ; 112222   ; 111222   ; 111122   ;  0000    ;  000000  ;  0000000 ;  0000000 ",

  //chimera
  chead1: "                    ;           7     77 ;         777   7777 ;       77776  77766 ;      777766677666  ;     777776777655777;     777665777577666;     777655755776644;    7755557577766433;    55d555557777543 ;   55d5555777755543 ;  15555555755555443 ; 1655 5555555555433 ; 4⇲ ⇲ 555555444443  ;     5554444443333  ;  3⇲444433333333    ;  3333333           ;                    ;                    ;                    ",
  chbody: "                                             ;   55555555555555qqqqqqqqqq                  ;  5555555555555555qqqqqqqqqq                 ; 55555555555555555qqqqqqqqqqq                ; 55555555555555555qqqqqqqqqqqq               ; 4455555555555555qqqqqqqqqqqqqp              ; 4455555555555555qqqqqqqqqqqrqqq             ; 4445555555555555rqqqqqqqqqqrqqqq            ; 3445555555555554rrrrrqqqqqrrqqqqq           ; 334455555555544rr  rrrrrrrrrrqqqqq          ; 333444444444443      rrrrrr rrrqqqq         ;  33333444343                  rrqqqq        ;   333333333                    rrqqqq       ;                                 rrqqqq      ;                                   rqqqqqq   ;                                    rqqqqqq  ;                                     rrrrqqqq;                                         rrrr;                                             ;                                             ;                                             ;                                             ",
  chleg1: "  333  ; 33333 ; 33333 ; 23333 ; 23333 ; 2333  ;  233  ;  223  ;   233 ;   233 ;   233 ;   223 ;    23 ;    23 ;    23 ;    23 ;    23 ;  2222 ; 3333  ; ⇲332  ",
  chleg2: "  qqq  ; qqqqq ; qqqqq ; rqqqq ; rqqqq ; rqqq  ;  rqq  ;  rrq  ;   rqq ;   rqq ;   rqq ;   rrq ;    rq ;    rq ;    rq ;    rq ;    rq ;  rrrr ; qqqq  ; ⇲qqr  ",

  //chimera 2
  chead2: "                    ;                3  3;               32 31;              332 31;             3323312;           333333312;          3333333122;         33a33333133;       ⇽⇽⇽ae33333333;  0⇽⇠⇽⇽⇠⇽ae333⇽⇽⇽⇽33; 003⇽⇠⇽⇽⇠⇽⇽33⇽⇠⇽⇽333; 2223333333333⇽⇠3333; 2222222222333⇽⇽⇽222;  111111123333322221;         1332222211 ;        3322211111  ;       222221       ;   33332221         ;    22211           ;                    ",
  chbody2: "  3344444                    4444          ; 33344444444444 3  3   444444444444        ;3333333444444444444444444444444444444      ;33333333333344444444444433334444444444     ;333333333333333333333333333333333344444    ;3333333333333333333333333333333333333344   ;22333333333333333333333333333333333333344  ;223333333333333333333333333333333333332244 ;222333333333333333222222223333333333322 234;222333333333333333222222222223333333322  24; 22333333333322222222     2222233333222  23; 2223333333322222222         22222222    23; 2222222222222222222          22222      23;  222222222222222221                    223;  222222222222 2211                     32 ;     2222222211111                     332 ;       222221                          332 ;   33332221                            332 ;    22211                             3322 ;                                      3322 ;                                      3322 ;                                      3322 ;                                      2332 ;                                       2233;                                         22",
  chleg3: "  444  ; 43333 ; 43333 ; 433332; 433332; 433332; 433322;  3332 ;  3332 ;  3332 ;  3332 ;   32  ;   32  ;   32  ;   32  ;   32  ;   32  ;   32  ;   32  ;   32  ;  332  ;  332  ; 3332  ; 3332  ; ⇲32   ",

  //salatio



  //buttons
  bb: "     2222222222     ;   22444444444422   ;  2333333333133442  ; 133333331133333342 ; 133333313333133342 ;12333333233133333342;12333333313333333342;12333333121133333342;12333331222213333342;12333312222221333342;12333322222222333342;12333322222222333342;12333322222222333342;12333332222223333342;12333333222233333342; 123333333333333332 ; 123333333333333332 ;  1223333333333331  ;   11222222222211   ;     1111111111     ",
  bselected: "     ⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲     ;   ⇲⇲          ⇲⇲   ;  ⇲              ⇲  ; ⇲                ⇲ ; ⇲                ⇲ ;⇲                  ⇲;⇲                  ⇲;⇲                  ⇲;⇲                  ⇲;⇲                  ⇲;⇲                  ⇲;⇲                  ⇲;⇲                  ⇲;⇲                  ⇲;⇲                  ⇲; ⇲                ⇲ ; ⇲                ⇲ ;  ⇲              ⇲  ;   ⇲⇲          ⇲⇲   ;     ⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲     ",
  ingotb: "     2222222222     ;   22444444444422   ;  2333333333333442  ; 133333333333333342 ; 133333333333333342 ;12333333333333333342;12333322222222223342;12333244444444242342;12332222222222444242;12332444444442442342;12324444444444242342;12324444444444223342;12322222222222233342;12333333333333333342;12333333333333333342; 123333333333333332 ; 123333333333333332 ;  1223333333333331  ;   11222222222211   ;     1111111111     ",
  freezeb: "     2222222222     ;   22444444444422   ;  2333333113333442  ; 133333312213333342 ; 133333122221333342 ;12333333222233333342;12333333322333333342;12331333322333313342;12312133122133121342;12122211222211222142;12222222222222222242;12322233222233222342;12332333322333323342;12333333322333333342;12333333122133333342; 123333122221333332 ; 123333322223333332 ;  1223333223333331  ;   11222222222211   ;     1111111111     ",
  closeb: "   dddd   ;  dbbbbd  ; fccccbcd ;fdc⇲cc⇲bbd;fdcc⇲⇲ccbd;fdcc⇲⇲ccbd;fdd⇲cc⇲cbd; fddccccd ;  fddddf  ;   ffff   ",
  closes: "   ⇲⇲⇲⇲   ;  ⇲bbbb⇲  ; ⇲ccccbc⇲ ;⇲dc⇲cc⇲bb⇲;⇲dcc⇲⇲ccb⇲;⇲dcc⇲⇲ccb⇲;⇲dd⇲cc⇲cb⇲; ⇲ddcccc⇲ ;  ⇲dddd⇲  ;   ⇲⇲⇲⇲   ",

  //bases
  buttonBase: "     2222222222     ;   22444444444422   ;  2333333333333442  ; 133333333333333342 ; 133333333333333342 ;12333333333333333342;12333333333333333342;12333333333333333342;12333333333333333342;12333333333333333342;12333333333333333342;12333333333333333342;12333333333333333342;12333333333333333342;12333333333333333342; 123333333333333332 ; 123333333333333332 ;  1223333333333331  ;   11222222222211   ;     1111111111     ",
  matrixbase: "3333344444444444444444444;3333333344444444444444444;33333333⇲⇲⇲⇲⇲⇲⇲⇲⇲44444444;333333⇲⇲333444444⇲⇲444444;33333⇲3333333333344⇲44444;3333⇲33333333333333⇲⇲4444;333⇲33333333333333334⇲444;233⇲33333333333333334⇲444;23⇲3333333333333333334⇲44;23⇲3333333333333333334⇲44;23⇲3333333333333333333⇲44;22⇲3333333333333333333⇲44;22⇲3333333333333333333⇲44;22⇲3333333333333333333⇲44;22⇲3333333333333333333⇲44;22⇲2333333333333333333⇲34;22⇲2333333333333333333⇲34;222⇲33333333333333333⇲334;222⇲23333333333333333⇲334;2222⇲333333333333333⇲3333;22222⇲2233333333333⇲33333;222222⇲⇲222333333⇲⇲333333;22222222⇲⇲⇲⇲⇲⇲⇲⇲⇲33333333;2222222222222333333333333;2222222222222222333333333",



  //blocks
  light: "      233      ;      234      ;      234      ;     22344     ;     23344     ;   2233345⇲5   ;  223333345⇲4  ; 2222333334444 ;⟳2222333333444⟳;⟳⤾⤿222233333⤿⤿⟳;↻⟳⤾⤿⤿22222⤿⤿⤾⤾↻; ↻⟳⤾⤾⤿⤿⤿⤿⤿⤾⤾⟳⟳↻;  ↻⟳⟳⤾⤾⤾⤾⤾⟳⟳↻↻ ;   ↻↻↻⟳⟳⟳⟳↻↻   ;     ↻↻↻↻↻     ",
  fdo: "223333333333333;0¡¡000¡¡000¡¡00;¡¡000¡¡000¡¡000;¡000¡¡000¡¡000¡;000¡¡000¡¡000¡¡;00¡¡000¡¡000¡¡0;223333333333333;223333333333333;223333333333333;223333333333333;223333333333333;223333333333333;223333333333333;223333333333333;223333333333333",
  fd1: "   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ; 33321101123   ; 33321101123   ; 3 321101123   ; 3 321101123   ",
  fd2: "   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ",
  fd3: "   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ; 33321101123   ; 33321101123   ; 3 321101123   ; 3 321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ;   321101123   ",
  pls: "⬍⬍⬍⬍⬍⬍⬍⬍⬍⬍⬍⬍⬍⬍⬍;⬍⇕⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳⇕⬍;⬍⇳⇕⇕⇕⇕⇕⇕⇕⇕⇕⇕⇕⇕⬍;⬍⇳⇕৳৳৳৳৳৳৳৳৳⇕⇕⬍;⬍⇳⇕৳৳৳৳৳৳৳৳৳⇕⇕⬍;⬍⇳⇕৳৳৳৳৳৳৳৳৳⇕⇳⬍;⇳⇳⇕৳৳৳৳৳৳৳৳৳⇕⇳⬍;⇳⇳⇕৳৳৳৳৳৳৳৳৳⇕⇳⬍;⬍⇳⇕৳৳৳৳৳৳৳৳৳⇕⇳⬍;⬍⇳⇕৳৳৳৳৳৳৳৳৳⇕⇳⬍;⬍⇳⇕৳৳৳৳৳৳৳৳৳⇕⇳⬍;⬍⇳⇕৳৳৳৳৳৳৳৳৳⇕⇳⬍;⬍⇳⇕⇕⇕⇕⇕⇕⇕⇕⇕⇕⇕⇳⬍;⬍⇕⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳⇳⇕⬍;⬍⬍⬍⬍⬍⬍⬍⬍⬍⇳⇳⇳⇳⬍⬍",
  f7: "4              ;44             ;144            ;1144           ;22q44          ;222144         ;2221244        ;22212244       ;222122244      ;12211q2244     ;11211r22244    ;qr1111r11144   ;r222233122244  ;1222223112r244 ;112222211122244",
  f6: "              4;             44;            442;           4411;          44233;         441223;        4421222;       44221222;      44r221222;     4422221222;    44222221222;   441r111rq111;  442331222r233; 442223112r2223;442222211122222",
  f5: "233333333333332;333333333333333;222222222222222;11rq111rq111111;22q12q22r331233;2221r22q2231223;2221222r2221222;22212222q221222;22212222r221222;12211q222221222;11211r222221222;qr1111r111rq111;r2222331222r233;1222223112r2223;112222211122222",
  f4: "1012211122qq233;110110001220023;111001110102r02;11rq011r1011111;22q10122r101233;2210122q2101221;1100121r2101220;00110101q210110;112110101221001;122110210121112;11210r221011200;qr1101r1100q011;r11000312110133;100111011210123;111222111121012",
  f3: "⇧৲↑↑⇲⇲⇲⇲⇲⇲⇲↑↑৲⇧;3⇧৲৲↑↑↑↑↑↑↑৲৲⇧3;33⇧⇧৲৲৲৲৲৲৲⇧⇧33;11rqrrrrqrr1111;22q12q22r331233;2221r22q2231223;2221222r2221222;22212222q221222;22212222r221222;12211q222221222;11211r222221222;qr1111r111rq111;r2222331222r233;1222223112r2223;112222211122222",
  f2: "222223q122qq233;12222231122rq23;112222211122r22;11rq111rq111111;22q12q22r331233;2221r22q2231223;2221222r2221222;22212222q221222;22212222r221222;12211q222221222;11211r222221222;qr1111r111rq111;r2222331222r233;1222223112r2223;112222211122222",
  f1: "222223q122qq233;12222231122rq23;112222211122r22;11rq111rq111111;22q222222222233;22⇡⇡⇡⇡⇡⇡⇡⇡⇡⇡⇡23;2o↑↑↑↑↑↑↑↑↑↑↑⇡2;1⇡⇡⇲⇲⇲⇲⇲⇲⇲⇲⇲⇡⇡1;2⇡↑↑↑↑↑↑↑↑↑↑↑⇡2;12⇡⇡⇡⇡⇡⇡⇡⇡⇡⇡⇡22;112222222222222;qr11111111rq111;r2222331222r233;1222223112r2223;112222211122222",
  dop: "  §∞∞∞∞∞∞∞∞∞∞  ;  §∞∞∞∞∞∞∞∞∞∞  ;  §∞∞∞∞∞∞∞∞∞∞  ;  §∞∞∞∞∞∞∞∞∞∞  ;  §∞∞∞∞∞∞∞∞∞∞  ;  §∞∞∞∞∞∞∞∞∞∞  ;  §∞∞∞∞∞∞∞∞∞∞  ;  §∞∞∞∞∞∞∞∞∞∞  ;  §∞∞∞∞∞∞∞∞∞∞  ;  §∞∞∞∞∞∞∞∞∞∞  ;  §∞∞∞∞∞∞∞∞∞∞  ;  §∞∞∞∞∞∞∞∞∞∞  ;  §∞∞∞∞∞∞∞∞∞∞  ;  §∞∞∞∞∞∞∞∞∞∞  ;  §∞∞∞∞∞∞∞∞∞∞  ",
  d1: "     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;  333§∞∞∞∞     ;  3  §∞∞∞∞     ",
  d2: "     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ",
  d3: "     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;  333§∞∞∞∞     ;  3  §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ;     §∞∞∞∞     ",
  marr: "8              ;98             ;997            ;9997           ;89979          ;889898         ;8898988        ;88989888       ;889898888      ;8898988888     ;89989999999    ;999778888777   ;9979999999997  ;98999888889998 ;899988888889998",
  marl: "              8;             79;            799;           7999;          97998;         897988;        8898988;       88898988;      888898988;     8888898988;    99999998998;   778888777999;  7999999999799; 89998888899989;899988888889998",
  mar2: "899988888889998;989998888899979;997999999999799;999788888887999;899799999997998;889898888897988;889898888898988;889898888898988;889898888898988;889898888898988;899899999998998;999778888777999;997999999999799;989998888899989;899988888889998",
  mar: "888999999999888;889999888999988;899888878888998;998877767778899;998776666677899;998766666667899;988766666667889;987666666666789;988766666667889;998766666667899;998776666677899;998877767778899;899888878888998;889999888999988;888999999999888",
  pMid: "    8787979    ;    8787979    ;    8787979    ;    8787979    ;    8787979    ;    8787979    ;    8787979    ;    8787979    ;    8687979    ;    8687979    ;    8687979    ;    8686979    ;    8686979    ;    8686979    ;    8686979    ",
  pBot: "    8687979    ;    8687979    ;    8687979    ;    8687979    ;    8687979    ;    8687979    ;    8687979    ;    8687979    ;    8687979    ;   868979979   ;   868979979   ;   889999999   ;  88899999999  ;  88999999999  ; 8889999999999 ",
  pTop: " 9999999999999 ;968899979999869;98 897979798 89;98  8797979  99; 98 9797979 89 ;    9797979    ;    8797979    ;    8797979    ;    8697979    ;    8687979    ;    8687979    ;    8686979    ;    8686979    ;    8686979    ;    8686979    ",
  brick: "233334423333344;233333423333334;233333323333333;222222222222222;344233333442344;334233333342334;333233333332333;222222222222222;333344233333442;333334233333342;333333233333332;222222222222222;344233334423344;334233333423334;222222222222222",
  ice: "+++++++++++++++;+WWW=======WWW+;+W===ĭĭĭĭĭ===W+;+W=ĭĭĭĭĭĭĭĭĭ=W+;+==ĭĭĭĭĭĭĭĭĭ==+;+=ĭĭĭĭĭĭĭĭĭĭĭ=+;+=ĭĭĭĭĭĭĭĭĭĭĭ=+;+=ĭĭĭĭĭĭĭĭĭĭĭ=+;+=ĭĭĭĭĭĭĭĭĭĭĭ=+;+=ĭĭĭĭĭĭĭĭĭĭĭ=+;+==ĭĭĭĭĭĭĭĭĭ==+;+W=ĭĭĭĭĭĭĭĭĭ=W+;+W===ĭĭĭĭĭ===W+;+WWW=======WWW+;+++++++++++++++",
  ironSelected: "⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲;⇲8888889999999⇲;⇲7777777888888⇲;⇲8888888899999⇲;⇲7777777778888⇲;⇲8888888888999⇲;⇲7777777777788⇲;⇲7888888888889⇲;⇲6677777777777⇲;⇲7778888888888⇲;⇲6666777777777⇲;⇲7777788888888⇲;⇲6666667777777⇲;⇲7777777888888⇲;⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲",
  iron: "555555666666666;588888899999996;577777778888886;588888888999996;577777777788886;588888888889996;477777777777886;478888888888896;466777777777776;477788888888885;466667777777775;477777888888885;466666677777775;477777778888885;444444444555555",
  mine: "333⇲⇲444444444444444⇲⇲444;33333⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲44444;33333333⇲⇲⇲⇲⇲⇲⇲⇲⇲44444444;333333⇲⇲333⇲3⇲444⇲⇲444444;33333⇲3333⇲333⇲3344⇲44444;3333⇲33333⇲333⇲3333⇲⇲4444;333⇲33333⇲33⇲33⇲33334⇲444;233⇲⇲3333⇲33⇲33⇲3333⇲⇲444;23⇲3⇲333⇲33⇲3⇲33⇲333⇲4⇲44;23⇲33⇲33⇲33⇲3⇲33⇲33⇲33⇲44;23⇲33⇲3⇲33⇲333⇲33⇲3⇲33⇲44;22⇲333⇲⇲33⇲333⇲33⇲⇲333⇲44;22⇲⇲⇲3⇲3⇲⇲33333⇲⇲3⇲3⇲⇲⇲44;22⇲333⇲⇲33⇲333⇲33⇲⇲333⇲44;22⇲33⇲3⇲33⇲333⇲33⇲3⇲33⇲44;22⇲23⇲33⇲33⇲3⇲33⇲33⇲33⇲34;22⇲2⇲333⇲33⇲3⇲33⇲333⇲3⇲34;222⇲⇲3333⇲33⇲33⇲3333⇲⇲334;222⇲23333⇲33⇲33⇲33333⇲334;2222⇲33333⇲333⇲33333⇲3333;22222⇲2233⇲333⇲3333⇲33333;222222⇲⇲222⇲3⇲333⇲⇲333333;22222222⇲⇲⇲⇲⇲⇲⇲⇲⇲33333333;2222222222222333333333333;2222222222222222333333333",
  bomb: "3333344444444444444444444;333⇲⇲333444444444444⇲⇲⇲⇲4;3333⇲333⇲⇲⇲⇲⇲⇲⇲⇲⇲4444⇲444;3⇲3⇲33⇲⇲3334⇲4444⇲⇲444⇲44;3⇲⇲33⇲333⇲⇲⇲3333344⇲44⇲44;3333⇲333⇲3333333333⇲⇲4444;333⇲3333⇲3333⇲⇲⇲33334⇲444;233⇲333⇲3333⇲333⇲⇲334⇲444;23⇲3333⇲333⇲3⇲3333⇲⇲34⇲44;23⇲333⇲33⇲3⇲33⇲⇲3333⇲4⇲44;23⇲333⇲33⇲3⇲33333333⇲3⇲44;22⇲333⇲3⇲333⇲3⇲⇲⇲333⇲3⇲44;22⇲⇲333⇲333⇲⇲⇲333⇲333⇲⇲44;22⇲3⇲333⇲⇲⇲3⇲333⇲3⇲333⇲44;22⇲3⇲33333333⇲3⇲33⇲333⇲44;22⇲2⇲3333⇲⇲33⇲3⇲33⇲333⇲34;22⇲23⇲⇲3333⇲3⇲333⇲3333⇲34;222⇲333⇲⇲333⇲3333⇲333⇲334;222⇲23333⇲⇲⇲3333⇲3333⇲334;2222⇲33333333333⇲333⇲3333;22⇲22⇲2233333⇲⇲⇲333⇲333⇲3;2⇲2222⇲⇲2223⇲3333⇲⇲33⇲3⇲3;22⇲2⇲222⇲⇲⇲⇲⇲⇲⇲⇲⇲333⇲3⇲33;2⇲2⇲2222222223333333⇲3333;2222222222222222333333333",
  switch2: "3,,3,⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲,4,,4;,⇲⇲,,⇲,,⇲⇲,,,,,⇲⇲,,⇲,,⇲⇲,;,⇲,33,,,⇲⇲⇲⇲⇲⇲⇲⇲⇲,,,44,⇲,;,⇲,33,⇲⇲,,,,⇲,,,,⇲⇲,44,⇲,;3,33,⇲,,,3,⇲,⇲,3,,,⇲,44,4;333,⇲,,,⇲,,⇲,⇲,,⇲,,⇲⇲,444;33,⇲,,⇲⇲,,⇲,,,⇲,,⇲⇲,,⇲,44;23,⇲,,,⇲,,⇲,⇲,⇲,,⇲,,,⇲,44;2,⇲,⇲⇲,,,⇲,⇲,⇲,⇲,,,⇲⇲,⇲,4;2,⇲,,,⇲⇲,⇲,⇲,⇲,⇲,⇲⇲,,,⇲,4;2,⇲,,,,,⇲,3,3,3,⇲,,,,,⇲,4;2,⇲,⇲⇲,,⇲,3,⇲,3,⇲,,⇲⇲,⇲,4;2,⇲,⇲,,⇲,33,⇲,33,⇲,,⇲,⇲,4;2,⇲,⇲,,⇲,,3⇲,⇲3,,⇲,,⇲,⇲,4;2,⇲,,,⇲,,⇲,,3,,⇲,,⇲,,,⇲,4;2,⇲,3,⇲,⇲,3333,,⇲,⇲,3,⇲,4;2,⇲,,⇲,,⇲⇲⇲,3,⇲⇲⇲,,⇲,,⇲,4;22,⇲,⇲,,,,,,,,,,,,,⇲,⇲,34;22,⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲,34;222,⇲,,,,,,,⇲,,,,,,,⇲,333;2,22,⇲,,,⇲⇲,⇲,⇲⇲,,,⇲,33,3;,⇲,22,⇲⇲,,,,⇲,,,,⇲⇲,33,⇲,;,⇲,222,,⇲⇲⇲⇲⇲⇲⇲⇲⇲,,333,⇲,;,⇲⇲,2222,,,,,,,,,3333,⇲⇲,;2,,2222222222222333333,,3",
  switch1: "33333⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲44444;3⇲⇲33⇲33⇲⇲44444⇲⇲44⇲44⇲⇲4;3⇲333333⇲⇲⇲⇲⇲⇲⇲⇲⇲444444⇲4;3⇲3333⇲⇲3334⇲4444⇲⇲4444⇲4;33333⇲33333⇲3⇲33344⇲44444;3333⇲333⇲33⇲3⇲33⇲33⇲⇲4444;333⇲33⇲⇲33⇲333⇲33⇲⇲34⇲444;233⇲333⇲33⇲3⇲3⇲33⇲334⇲444;23⇲3⇲⇲333⇲3⇲3⇲3⇲333⇲⇲4⇲44;23⇲333⇲⇲3⇲3⇲3⇲3⇲3⇲⇲334⇲44;23⇲33333⇲3333333⇲33333⇲44;22⇲3⇲⇲33⇲333⇲333⇲33⇲⇲3⇲44;22⇲3⇲33⇲3333⇲3333⇲33⇲3⇲44;22⇲3⇲33⇲333⇲3⇲333⇲33⇲3⇲44;22⇲333⇲33⇲33333⇲33⇲333⇲44;22⇲233⇲3⇲3333333⇲3⇲333⇲34;22⇲23⇲33⇲⇲⇲333⇲⇲⇲33⇲33⇲34;222⇲3⇲3333333333333⇲3⇲334;222⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲334;2222⇲3333333⇲3333333⇲3333;22222⇲223⇲⇲3⇲3⇲⇲333⇲33333;2⇲2222⇲⇲2223⇲3333⇲⇲3333⇲3;2⇲222222⇲⇲⇲⇲⇲⇲⇲⇲⇲333333⇲3;2⇲⇲2222222222333333333⇲⇲3;2222222222222222333333333",
  checkpoint2: "3,⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲,4;3,⇲,,,,,,,,,⇲,,,,,,,,,⇲,4;3,,33,,,⇲⇲⇲⇲⇲⇲⇲⇲⇲,,444,,4;,⇲⇲,3,⇲⇲,,,,,,,,,⇲⇲,4,⇲⇲,;3,⇲,,⇲,,,⇲⇲⇲⇲,333,,⇲,,⇲,4;,⇲,,⇲,3,⇲,,,,⇲,333,⇲⇲,,⇲,;3,,⇲,3,⇲,3333,⇲33,⇲,,⇲,,4;23,⇲,,⇲,3333,⇲,3,⇲,3,⇲,44;2,⇲,33,3333,⇲,3,⇲,333,⇲,4;2,⇲,3333333,⇲,,⇲,3333,⇲,4;2,,,333333,⇲,⇲⇲,33333,⇲,4;2,,,,,,,,,⇲,3,⇲,,,,,,,⇲,4;2,,⇲⇲⇲⇲⇲⇲⇲,333,⇲⇲⇲⇲⇲⇲⇲⇲,4;2,⇲,,,,,,,⇲,3,⇲,,,,,,,⇲,4;2,⇲,33333,⇲⇲,⇲,333333,⇲,4;2,⇲,3333,⇲,,⇲,3333333,⇲,4;2,⇲,333,⇲,3,⇲,3333333,⇲,4;22,⇲,3,⇲,3,⇲,3333,33,⇲,34;22,⇲,,⇲,3,⇲,3333,⇲,3,⇲,34;2,2,⇲⇲,333,⇲,,,,⇲,3,⇲,,,3;,⇲,2,⇲,,333,⇲⇲⇲⇲,,,⇲,,⇲⇲,;2,⇲,2,⇲⇲,,,,,,,,,⇲⇲,,⇲,⇲,;,⇲,⇲,2,,⇲⇲⇲⇲⇲⇲⇲⇲⇲,,33,,⇲,;,⇲⇲,⇲,22,,,,,,,,,33333,⇲,;2,,2,222222222223333333,3",
  checkpoint1: "33⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲⇲44;33⇲333334444⇲444444444⇲44;33333333⇲⇲⇲⇲⇲⇲⇲⇲⇲44444444;3⇲⇲333⇲⇲333443444⇲⇲444⇲⇲4;33⇲33⇲333⇲⇲⇲⇲333344⇲44⇲44;3⇲33⇲333⇲3333⇲33333⇲⇲44⇲4;333⇲333⇲333333⇲333⇲34⇲444;233⇲33⇲333333⇲333⇲334⇲444;23⇲333333333⇲333⇲33334⇲44;23⇲333333333⇲33⇲333334⇲44;23⇲33333333⇲3⇲⇲3333333⇲44;22⇲3333333⇲333⇲3333333⇲44;22⇲⇲⇲⇲⇲⇲⇲⇲33333⇲⇲⇲⇲⇲⇲⇲⇲44;22⇲3333333⇲333⇲3333333⇲44;22⇲3333333⇲⇲3⇲33333333⇲44;22⇲233333⇲33⇲333333333⇲34;22⇲23333⇲333⇲333333333⇲34;222⇲333⇲333⇲333333333⇲334;222⇲23⇲333⇲333333⇲333⇲334;2222⇲⇲33333⇲3333⇲333⇲3333;2⇲222⇲223333⇲⇲⇲⇲333⇲33⇲⇲3;22⇲222⇲⇲222333333⇲⇲33⇲3⇲3;2⇲2⇲2222⇲⇲⇲⇲⇲⇲⇲⇲⇲333333⇲3;2⇲⇲2⇲222222223333333333⇲3;2222222222222222333333333",
  lava2: "⤾⟳⤿⟳⤾⟳⤿⟳⟳⤾;⟳⟳⤾⟳⟳⤿⤾⟳⤿⟳;⤿⤾⟳⤿⟳⤿⟳⟳⤾⟳;⟳⟳⤾⟳⤾⟳⤾⟳⟳⤿;⤾⟳⤿⤿⟳⤿⟳⤾⤾⟳;⟳⤿⟳⟳⤾⟳⤿⟳⟳⤿;⤾⟳⤾⟳⤿⟳⤾⤿⟳⤾;⟳⤿⟳⤿⟳⤾⟳⟳⤾⟳;⟳⤿⟳⤾⟳⟳⤿⟳⤿⟳;⤾⟳⤾⟳⤿⤾⟳⤾⟳⤾",
  lava1: "⤿⤾⤿⟳⤿⤿⤾⤿⟳⤿;⤾⤿⤾⤿⤾⟳⤿⤾⤿⤾;⤿⟳⤿⟳⤿⟳⤾⟳⤿⤿;⟳⤾⤿⟳⤾⤿⤿⤿⟳⤾;⤿⟳⤾⤿⟳⤿⟳⤾⤿⟳;⤾⤿⤿⤾⤿⤾⤿⟳⤾⤿;⤿⤾⟳⤿⤾⤿⤾⤿⤿⟳;⟳⤿⤿⤾⤿⟳⤿⤾⤿⤾;⟳⤿⟳⤾⤿⤾⟳⤿⤾⤿;⤿⤾⤿⤿⟳⤾⤿⟳⤿⤾",
  sr: "£         ;™£        ;¢™£       ;££¢£      ;¢™£™™     ;£¢™££™    ;™£¢™¢£™   ;£¢£¢£¢£™  ;™£™£™£™£™ ;¢£¢£¢¢£¢£¢",
  sl: "         ™;        ¢£;       £™£;      £¢£™;     ¢¢£™£;    £™£™¢¢;   ™¢£¢££™;  £¢£¢£™¢£; £™£™£™£™™;¢£¢£¢¢£¢£¢",
  sand: "£¢£™££¢££™;™£™£¢™£™¢£;¢™£™££™£™£;££¢£™¢£¢£™;¢™£™¢¢¢£™£;£¢™££™£™¢¢;™£¢™¢£¢££™;£¢£¢£¢£™¢£;™£™£™£™£™™;¢£¢£¢¢£¢£¢",
  water2: "ĭïĭīĭïīĭïĭ;ĭīĭĭīĭĭïĭī;īĭïĭïīïīĭĭ;ĭīĭīīĭĭīïī;ïĭīĭĭïïĭīĭ;ĭīĭīïīĭīĭï;ĭïĭïĭĭīïĭī;īĭīĭīïĭĭīĭ;ĭïĭīĭĭĭīïĭ;ĭīĭïĭīïĭĭī",
  water: "īĭīĭīīīïīï;ïīïīïīĭīïĭ;īĭīĭīĭīĭīī;ïīïīïīïīĭï;īĭīĭīĭīïīī;ïīĭīïīĭïīï;īĭïīĭïīīĭī;ïīīïĭīĭïīï;īïĭīīĭïīĭī;ïĭīĭïĭīïīï",
  spike: "     2    ;    22    ;   2233   ;   2333   ;  223334  ;  223334  ; 22233344 ; 22333444 ;2223334444;2222344444",
  p3: "  3333333333344444  ; 33¡¡33¡3¡3¡3¡¡4444 ;33¡#33¡#33¡#3#33¡444;33333333333333333¡¡4;3¡¡33¡¡¡¡¡¡¡¡¡¡33#44;2#33¡###¡#$#$$##3334;2#¡3¡¡⇲###⇲$#⇲¡#3¡¡4;2333¡##$¡$#¡$#$#33#4;2¡¡3¡$⇲##¡¡##⇲$#3334;23#3¡##¡$#$#$#⇲$3¡33;2233¡#$$¡⇲$¡$$#¡3#¡3;22#3¡$¡⇲#$#$⇲¡##3#33;2233¡#$#¡⇲¡#$#⇲$3333;2¡¡3¡⇲¡####$¡¡##3¡¡3;2#33¡$#⇲#¡⇲#¡#⇲¡33#3;2233¡$¡#¡$##$#$#3¡33;2¡23¡#¡$##¡$#$$¡3333;2#¡3¡⇲¡#⇲#$#⇲¡$#3¡¡3;22#23333333333333#33; 222222233333333333 ",
  p2: "  3333333333344444  ; 33¡¡33¡3¡3¡3¡¡4444 ;33¡#33¡#33¡#3#33¡444;33333333333333333¡¡4;3¡¡33¡¡¡¡¡¡¡¡¡¡33#44;2#33¡##$$##$#¡##3334;2#¡3¡™#¡⇲$#¡#$$#3¡¡4;2333¡$$#$#⇲$$$#™33#4;2¡¡3¡⇲#™#¡##⇲¡$#3334;23#3¡$¡#$#¡$$##$3¡33;2233¡##$⇲™$¡##¡#3#¡3;22#3¡#$##¡$#$$#$3#33;2233¡$⇲¡#$#$⇲¡™$3333;2¡¡3¡™$#$⇲$¡#$⇲#3¡¡3;2#33¡#⇲$#$#$$#¡#33#3;2233¡$#¡#¡#™###$3¡33;2¡23¡#$⇲#$$⇲#¡#™3333;2#¡3¡#¡#™#$#$###3¡¡3;22#23333333333333#33; 222222233333333333 ",
  p1: "  3333333333344444  ; 33¡¡33¡3¡3¡3¡¡4444 ;33¡#33¡#33¡#3#33¡444;33333333333333333¡¡4;3¡¡33¡¡¡¡¡¡¡¡¡¡33#44;2#33¡####$$##¡#¡3334;2#¡3¡#¡#⇲¡™¡####3¡¡4;2333¡#$¡##¡##¡¡#33#4;2¡¡3¡™¡#™¡#$⇲#¡#3334;23#3¡##¡##¡#$¡##3¡33;2233¡$⇲$#¡#¡™#$#3#¡3;22#3¡™¡###$#¡#$¡3#33;2233¡##¡#¡#¡##⇲$3333;2¡¡3¡™¡#$¡##¡#¡#3¡¡3;2#33¡#⇲#$⇲$¡###™33#3;2233¡#$¡$¡##™™$#3¡33;2¡23¡¡#⇲¡#$#¡¡⇲#3333;2#¡3¡#¡###¡#™#$#3¡¡3;22#23333333333333#33; 222222233333333333 ",
  b0: "n⇠q⇠oq⇠oq⇠;⇠q⇠q⇠⇠qq⇠q;q¶⇠∞§q⇠o§⇠;¶3¶⇠¶§¶q¶§;∞∞§¶§¶§∞§¶;§§∞3§¶3¶¶∞;¶∞¶¶§¶§¶§§;•§3∞¶§¶∞∞¶;∞¶§¶•¶¶§3§;•∞•§3••¶§•",
  b1: "∞§¶∞§¶∞¶¶§;§¶¶3¶∞§3∞¶;¶§∞¶∞¶¶∞§∞;¶3¶§∞§¶q¶§;∞∞§¶§3§∞§¶;§§∞3§¶3¶¶∞;¶∞¶¶§¶§¶§§;•§3∞¶§¶∞∞¶;∞¶§¶•¶¶§3§;•∞•§3••¶§•",
  bl: "         ⇠;        ⇠q;       o⇽⇠;      ⇽q¶⇽;     q⇠∞§¶;    ⇽⇠q¶¶∞;   q⇠¶§¶§§;  ⇠q⇠§¶∞∞¶; ⇽⇠¶q¶¶§3§;⇽q•§3••¶§•",
  br: "n         ;⇠q        ;q⇽⇠       ;¶3⇽⇠      ;∞∞⇠⇽⇽     ;§§q3⇠q    ;¶∞¶¶q⇠⇽   ;•§3∞q§⇠⇽  ;∞¶§¶•¶¶⇠q ;•∞•§3•q¶⇠⇽",
  sign: "          ;∞∞∞∞∞¢¢¢¢¢;∞•∞••∞•••¢;§∞∞∞∞∞∞∞¢¢;§••∞•••∞•¢;§§∞∞∞∞∞∞∞∞;§§§§§∞∞∞∞∞;    ¶¶    ;    ∞∞    ;    ∞∞    ",

  //particles, misc
  redspark: " aaaaaa     ;a⇲⇲⇲⇲⇲⇲aaaa ; aaaaa⇲⇲⇲⇲⇲a;      aaaaa ",
  aspark: " ĭĭĭĭĭĭ     ;ĭ⇲⇲⇲⇲⇲⇲ĭĭĭĭ ; ĭĭĭĭĭ⇲⇲⇲⇲⇲ĭ;      ĭĭĭĭĭ ",
  smoke: " 3 3;3 3 ; 3 3;3 3 ",
  flame: " ⤾ ⤾;⤾ ⤾ ; ⤾ ⤾;⤾ ⤾ ",
  ingot: "            ;      3333  ;     366633 ;    36663563;   255636663;  255535563 ; 222335552  ;355666252   ;25556622    ;2222333     ",
  pstone: "   bbbb   ;  ccccbb  ; dcccc⇲bb ; dccccc⇲b ; dccccccb ; dccccccb ; dccccccb ; ddcccccb ;  ddcccc  ;   dddd   ",
  coin: "               ;               ;    ™™™™™™™    ;   ™%%%$$##™   ;  ™%%%$$##⇲#™  ;  ™%%$$##⇲##™  ;  ™%$$##⇲##$™  ;  ™$$##⇲##$$™  ;  ™$##⇲##$$%™  ;  ™##⇲##$$%%™  ;  ™#⇲##$$%%%™  ;   ™##$$%%%™   ;    ™™™™™™™    ;               ;               ",




};

var sprites = {};
var spriteVars = {
  cimgs: ["cape1", "cape2"],
  cape: 0,
  aa: 0,
  aimgs: ["aa1", "aa2", "aa3"],
};


function txt(t, x, y) {
  var str = t.split('');
  var output = [];
  for (var i in str) {
    output.push(glyphs[str[i]]);
  }
  text(output.join(''), x, y);
}

function collideRectRect(x, y, w, h, x2, y2, w2, h2) {
  return x + w > x2 && y + h > y2 && x2 + w2 > x && y2 + h2 > y;
}

function Particle(t, x, y) {
  this.x = x;
  this.y = y;
  this.t = t;
  this.r = Math.random() * 360;
  this.speed = Math.random() * 10;
  this.s = Math.random() * 3;
  this.time = Math.random() * 100;
  this.dead = false;
  if (this.t == "powerMatrix") {
    this.time = 1;
  }
  if (this.t == "smoke" || this.t == "flame") {
    this.s = Math.random() * 15;
  }
}
Particle.prototype.run = function () {
  if (this.t == "aspark") {
    imageMode(CORNER);
    this.time--;
    push();
    translate(this.x, this.y);
    scale(random(0.5, 3), random(0.5, 3));
    rotate(random(0, 360));
    image(sprites.aspark, 0, 0);
    pop();

    if (this.time <= 0) {
      this.dead = true;
    }
  }
  if (this.t == "aspark2") {
    imageMode(CORNER);
    this.time--;
    push();
    translate(this.x, this.y);
    scale(random(0.5, 3), random(0.5, 3));
    rotate(random(0, 360));
    image(sprites.redspark, 0, 0);
    pop();

    if (this.time <= 0) {
      this.dead = true;
    }
  }
  if (this.t == "powerMatrix") {
    push();
    imageMode(CENTER);
    translate(this.x + blockSize / 2, this.y + blockSize / 2);
    rotate(this.time);
    strokeWeight(7);
    stroke(0, 150, 255, 255 - this.time);
    line(250, 0, -250, 0);
    strokeWeight(3);
    stroke(255, 255 - this.time);
    line(250, 0, -250, 0);
    rotate(42.5);
    strokeWeight(7);
    stroke(0, 150, 255, 255 - this.time);
    line(250, 0, -250, 0);
    strokeWeight(3);
    stroke(255, 255 - this.time);
    line(250, 0, -250, 0);
    rotate(-85);
    strokeWeight(7);
    stroke(0, 150, 255, 255 - this.time);
    line(250, 0, -250, 0);
    strokeWeight(3);
    stroke(255, 255 - this.time);
    line(250, 0, -250, 0);
    rotate(42.5);
    textSize(100);
    stroke(0, 150, 255, 255 - this.time);
    strokeWeight(7.5);
    textFont("Wingdings");
    fill(255, 255 - this.time);
    textAlign(CENTER, CENTER);
    text("a", 0, -100);
    text("b", 0, 100);
    stroke(0, 150, 255, 255 - this.time);
    noFill();
    strokeWeight(7);
    ellipse(0, -100, 150, 150);
    ellipse(0, 100, 150, 150);
    stroke(255, 255 - this.time);
    strokeWeight(3);
    ellipse(0, -100, 150, 150);
    ellipse(0, 100, 150, 150);
    pop();
    noFill();
    stroke(0, 150, 255, 255 - this.time);
    strokeWeight(7);
    arc(this.x + blockSize / 2, this.y + blockSize / 2, 500, 500, 0, this.time);
    arc(this.x + blockSize / 2, this.y + blockSize / 2, 500, 500, 180, this.time + 180);
    stroke(255, 255 - this.time);
    strokeWeight(3);
    arc(this.x + blockSize / 2, this.y + blockSize / 2, 500, 500, 0, this.time);
    arc(this.x + blockSize / 2, this.y + blockSize / 2, 500, 500, 180, this.time + 180);
    noStroke();
    this.time += 2.5;
    if (this.time > 255 && !this.dead) {
      for (var i = 0; i < blocks.length; i++) {
        var b = blocks[i];
        if (dist(b.x, b.y, this.x, this.y) <= 250 && !b.activated) {
          b.onActivate();
          b.activated = true;
        }
      }
      this.dead = true;
    }
  }
  if (this.t == "smoke") {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.r)
    image(sprites.smoke, 0, 0, this.s, this.s);
    pop();
    this.x += cos(this.r) * this.s;
    this.y += sin(this.r) * this.s;
    this.s -= 0.5;
    if (this.s <= 0) {
      this.dead = true;
    }
  }
  if (this.t == "flame") {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.r)
    image(sprites.flame, 0, 0, this.s, this.s);
    pop();
    this.x += cos(this.r) * this.s;
    this.y += sin(this.r) * this.s;
    this.s -= 0.5;
    if (this.s <= 0) {
      this.dead = true;
    }
  }
};

function updateBlock(b) {
  b.c = true;
  b.text = "";
  b.cType = "rect";
  b.imgs = false;
  b.ar = Infinity;
  b.cov = true;
  b.a = 0;
  b.stepAc = false;
  b.activated = false;
  b.onActivate = function () { };
  b.conf = 0;
  b.special = false;
  b.dead = false;
  b.alch = false;
  b.falling = false;
  switch (b.t) {
    case "¯":
    case "<":
    case "≤":
    case "K":
      b.cType = "tril";
      break;
    case "L":
    case ">":
    case "˘":
    case "≥":
      b.cType = "trir";
      break;
    case "s":
    case "^":
      b.special = true;
      b.c = false;
      break;
    case "2":
      b.special = true;
      break;

    case "w":
      b.c = false;
      b.cType = "liq";
      b.imgs = ["water", "water2"];
      b.ar = 25;
      b.special = true;
      break;
    case "l":
      b.c = false;
      b.cType = "liq";
      b.imgs = ["lava1", "lava2"];
      b.ar = 17.5;
      b.special = true;
      break;
    case "p":
      b.c = false;
      b.imgs = ["p1", "p2", "p3"];
      b.ar = 20;
      b.special = true;
      break;

    case "c":
      b.special = true;
      b.stepAc = "step";
      b.onActivate = function () {
        for (var i = 0; i < 10; i++) {
          particles.push(new Particle("aspark", this.x + blockSize / 2, this.y + blockSize / 2));
        }
        player.spawn = [this.x, this.y];
      };
      break;
    case "S":
      b.special = true;
      b.stepAc = "press";
      b.onActivate = function () {
        for (var i = 0; i < 10; i++) {
          particles.push(new Particle("aspark", this.x + blockSize / 2, this.y + blockSize / 2));
        }
        particles.push(new Particle("powerMatrix", this.x, this.y));





      };
      break;
    case "d":
    case "D":
    case "∂":
    case "B":
    case "V":
    case "C":
      b.special = true;
      b.stepAc = "press";
      b.onActivate = function () {

        if (this.t == "B" || this.t == "C" || this.t == "V") {
          this.t = "G";
        } else {
          this.t = "ø";
        }
        this.c = false;
      }
      break;
    case "b":
      b.special = true;
      b.stepAc = "press";
      b.conf = 50;
      b.onActivate = function () {
        for (var i = 0; i < 10; i++) {
          particles.push(new Particle("aspark", this.x + blockSize / 2, this.y + blockSize / 2));
        }
        setTimeout(() => {
          if (!this.dead) {
            for (var n = 0; n < 50; n++) {
              particles.push(new Particle("smoke", this.x + blockSize / 2, this.y + blockSize / 2));
              particles.push(new Particle("flame", this.x + blockSize / 2, this.y + blockSize / 2));
            }
            var d = dist(this.x + blockSize / 2, this.y + blockSize / 2, player.x + player.w / 2, player.y + player.h / 2);
            var r = atan2((player.y + player.h / 2) - (this.y + blockSize / 2), (player.x + player.w / 2) - (this.x + blockSize / 2));
            if (d <= 100) {
              player.health -= 25;
              player.xVel = cos(r) * 20;
              player.yVel = sin(r) * 20;
            }
            for (var B = 0; B < blocks.length; B++) {
              var bb = blocks[B];
              if (dist(bb.x + blockSize / 2, bb.y + blockSize / 2, this.x + blockSize / 2, this.y + blockSize / 2) <= 100) {
                if (!bb.special) {
                  bb.dead = true;
                } else if (bb.special && !bb.activated) {
                  bb.onActivate();
                  bb.activated = true;
                }
              }
            }
            this.dead = true;
          }
        }, 2000)
      };
      break;

    case "ø":
    case "i":
      b.alch = true;
      b.buttons = ["ingotb", "bb"];
      b.element = "iron";
      b.sl = "ironSelected";
      b.special = true;
      break;
    case ";":
    case ":":
    case "…":
    case "¬":
      b.c = false;
      b.special = true;
      break;
    case "m":
    case "M":
      b.special = true;
      break;
    case "J":
      b.special = true;
      b.stepAc = "step";
      b.onActivate = function () {
        for (var i = 0; i < 50; i++) {
          particles.push(new Particle("smoke", this.x + this.w / 2, this.y + this.h / 2));
        }
        b.falling = true;



      }
      break;
  }
}

function playerRig(t, x, y, rot, state) {
  push();
  translate(x, y);
  switch (t) {
    case "ed": {
      translate(-10, 0);
      if (state[0] == ("right")) {
        push();
        translate(25, 15);
        rotate(rot.head);
        image(sprites.head1 || 0, -10, -15);
        pop();

        push();
        translate(25, 60);
        rotate(rot.legL);
        image(sprites.leg1, -5, -10);
        pop();

        push();
        translate(25, 25);
        rotate(rot.armL);
        if (state.includes("matrix")) {
          image(sprites.arm5, -5, -5);
        } else {
          image(sprites.arm4, -5, -5);
        }
        pop();

        push();
        translate(25, 30);
        rotate(rot.cape);
        image(sprites[spriteVars.cimgs[spriteVars.cape]], -20, -12.5);
        if (frameCount % 60 === 0) {
          spriteVars.cape++;
          if (spriteVars.cape > spriteVars.cimgs.length - 1) {
            spriteVars.cape = 0;
          }
        }
        pop();


        image(sprites.body1, 10, 17);

        push();
        translate(25, 60);
        rotate(rot.legR);
        if (state.includes("jumping")) {
          image(sprites.leg2, -5, -10);
        } else {
          image(sprites.leg1, -5, -10);
        }
        pop();

        push();
        translate(25, 25);
        rotate(rot.armR);
        if (state.includes("matrix")) {
          image(sprites.arm3, -5, -5);
        } else if (state.includes("combat")) {
          image(sprites.arm2, -5, -5);
        } else {
          image(sprites.arm1, -5, -5);
        }
        pop();
      }

      if (state[0] == ("left")) {
        scale(-1, 1);
        translate(-50, 0);
        push();
        translate(25, 15);
        rotate(rot.head);
        image(sprites.head1 || 0, -10, -15);
        pop();



        push();
        translate(25, 30);
        rotate(rot.cape);
        image(sprites[spriteVars.cimgs[spriteVars.cape]], -20, -12.5);
        if (frameCount % 60 === 0) {
          spriteVars.cape++;
          if (spriteVars.cape > spriteVars.cimgs.length - 1) {
            spriteVars.cape = 0;
          }
        }
        pop();


        push();
        translate(25, 60);
        rotate(rot.legR);
        if (state.includes("jumping")) {
          image(sprites.leg2, -5, -10);
        } else {
          image(sprites.leg1, -5, -10);
        }
        pop();

        push();
        translate(25, 25);
        rotate(rot.armR);
        if (state.includes("matrix")) {
          image(sprites.arm3, -5, -5);
        } else if (state.includes("combat")) {
          image(sprites.arm2, -5, -5);
        } else {
          image(sprites.arm1, -5, -5);
        }
        pop();

        image(sprites.body1, 10, 17);

        push();
        translate(25, 60);
        rotate(rot.legL);
        image(sprites.leg1, -5, -10);
        pop();

        push();
        translate(25, 25);
        rotate(rot.armL);
        if (state.includes("matrix")) {
          image(sprites.arm5, -5, -5);
        } else {
          image(sprites.arm4, -5, -5);
        }
        pop();


      }


    } break;
    case "al": {
      if (state[0] == "left") {
        scale(-1, 1);
        translate(-50, 0);
      }
      push();
      translate(22.5, 72.5);
      rotate(rot.legL);
      image(sprites.aleg1, -10, -10, 25, 65);
      pop();

      push();
      translate(22.5, 35);
      rotate(rot.armL);
      image(sprites.aarm1, -10, -10, 22.5, 62.5);
      pop();

      push();
      translate(25, 25);
      rotate(rot.head)
      image(sprites.head2, -15, -25);
      pop();

      push();
      translate(10, 60);
      image(sprites[spriteVars.aimgs[spriteVars.aa]], 0, 0);
      if (frameCount % 40 === 0) {
        spriteVars.aa++;
        if (spriteVars.aa > spriteVars.aimgs.length - 1) {
          spriteVars.aa = 0;
        }
      }
      pop();

      image(sprites.body2, 0, 20);

      push();
      translate(22.5, 72.5);
      rotate(rot.legR);
      if (state.includes("jumping")) {
        image(sprites.aleg2, -10, -10, 45, 60);
      } else {
        image(sprites.aleg1, -10, -10, 25, 65);
      }
      pop();

      push();
      translate(22.5, 35);
      rotate(rot.armR);
      image(sprites.aarm1, -10, -10, 22.5, 62.5);
      pop();

      fill(255);
      //ellipse(22.5,35,5,5);
      //ellipse(22.5,72.5,5,5);
    } break;
    case "greed": {
      if (state[0] == "left") {
        scale(-1, 1);
        translate(-50, 0);
      }
      push();
      translate(22.5, 72.5);
      rotate(rot.legL);
      image(sprites.gleg1, -10, -10, 25, 65);
      pop();

      push();
      translate(22.5, 35);
      rotate(rot.armL);
      image(sprites.garm1, -10, -10, 22.5, 62.5);
      pop();

      push();
      translate(25, 20);
      rotate(rot.head);
      image(sprites.ghead1, -10, -20);
      pop();

      image(sprites.body3, 0, 20);

      push();
      translate(22.5, 72.5);
      rotate(rot.legR);
      if (state.includes("jumping")) {
        image(sprites.gleg2, -10, -10, 45, 60);
      } else {
        image(sprites.gleg1, -10, -10, 25, 65);
      }
      pop();

      push();
      translate(22.5, 35);
      rotate(rot.armR);
      image(sprites.garm1, -10, -10, 22.5, 62.5);
      pop();

      fill(255);
      //ellipse(22.5,35,5,5);
      //ellipse(22.5,72.5,5,5);
    } break;
    case "lust": {
      if (state[0] == "left") {
        scale(-1, 1);
        translate(-50, 0);
      }
      push();
      translate(20, 70);
      rotate(rot.legL);
      image(sprites.lleg1, -10, -10, 20, 70);
      pop();

      push();
      translate(20, 32.5);
      rotate(rot.armL);
      image(sprites.larm1, -7, -7);
      ellipse(0, 0, 5, 5);
      pop();

      push();
      translate(25, 20);
      rotate(rot.head);
      image(sprites.lhead1, -15, -15);
      pop();

      image(sprites.body4, 0, 20);

      push();
      translate(20, 70);
      rotate(rot.legR);
      if (state.includes("jumping")) {
        image(sprites.lleg2, -10, -10, 20, 70);
      } else {
        image(sprites.lleg1, -10, -10, 20, 70);
      }
      ellipse(0, 0, 5, 5);
      pop();

      push();
      translate(0, 60);
      image(sprites.half1, 0, 0);
      pop();

      push();
      translate(20, 32.5);
      rotate(rot.armR);
      if (state.includes("extended")) {
        image(sprites.larm2, -7, -7);
      } else {
        image(sprites.larm1, -7, -7);
      }
      pop();

      fill(255);
      //ellipse(22.5,35,5,5);
      //ellipse(22.5,72.5,5,5);
    } break;
    case "gluttony": {
      if (state[0] == "left") {
        scale(-1, 1);
        translate(-50, 0);
      }
      push();
      translate(20, 70);
      rotate(rot.legL);
      image(sprites.glleg1, -12.5, -10, 30, 50);
      pop();

      push();
      translate(22.5, 35);
      rotate(rot.armL);
      image(sprites.glarm1, -10, -10);
      pop();

      push();
      translate(25, 20);
      rotate(rot.head);
      image(sprites.glhead1, -15, -15);
      pop();

      image(sprites.body5, 0, 20);

      push();
      translate(20, 70);
      rotate(rot.legR);
      image(sprites.glleg1, -12.5, -10, 30, 50);
      pop();

      push();
      translate(22.5, 35);
      rotate(rot.armR);
      image(sprites.glarm1, -10, -10);
      pop();

      fill(255);
      //ellipse(22.5,35,5,5);
      //ellipse(22.5,72.5,5,5);
    } break;
    case "scar": {
      translate(-10, 0);
      if (state[0] == ("right")) {
        push();
        translate(30, 15);
        rotate(rot.head);
        image(sprites.shead1, -10, -15);
        pop();

        push();
        translate(30, 70);
        rotate(rot.legL);
        image(sprites.sleg1, -7, -7);
        pop();

        push();
        translate(30, 27.5);
        rotate(rot.armL);
        image(sprites.sarm1, -10, -5, 14, 55);
        pop();

        image(sprites.body6, 10, 17);

        push();
        translate(30, 70);
        rotate(rot.legR);
        if (state.includes("jumping")) {
          image(sprites.gleg2, -7, -7);
        } else {
          image(sprites.gleg1, -7, -7);
        }
        pop();

        push();
        translate(30, 27.5);
        rotate(rot.armR);
        image(sprites.sarm2, -10, -5, 14, 55);
        pop();
      }

      if (state[0] == ("left")) {
        scale(-1, 1);
        translate(-50, 0);
        push();
        translate(30, 15);
        rotate(rot.head);
        image(sprites.shead1, -10, -15);
        pop();

        push();
        translate(30, 70);
        rotate(rot.legL);
        image(sprites.sleg1, -7, -7);
        pop();

        push();
        translate(30, 27.5);
        rotate(rot.armR);
        image(sprites.sarm2, -10, -5, 14, 55);
        pop();

        image(sprites.body6, 10, 17);

        push();
        translate(30, 70);
        rotate(rot.legR);
        if (state.includes("jumping")) {
          image(sprites.gleg2, -7, -7);
        } else {
          image(sprites.gleg1, -7, -7);
        }
        pop();

        push();
        translate(30, 27.5);
        rotate(rot.armL);
        image(sprites.sarm1, -10, -5, 14, 55);
        pop();


      }
    } break;
    case "ch1": {

      if (state.includes("left")) {
        translate(25, 0);
      }
      if (state.includes("right")) {
        scale(-1, 1);
        translate(-125, 0);
      }

      push();
      translate(10, 20);
      rotate(-rot.leg1);
      image(sprites.chleg1, -10, -7, 20, 60);
      pop();

      push();
      translate(70, 20);
      rotate(-rot.leg2);
      image(sprites.chleg2, -10, -7, 20, 60);
      pop();

      image(sprites.chbody, 0, 0, 120, 60);

      image(sprites.chead1, -25, -10);

      push();
      translate(10, 20);
      rotate(rot.leg1);
      image(sprites.chleg1, -10, -7, 20, 60);
      pop();

      push();
      translate(70, 20);
      rotate(rot.leg2);
      image(sprites.chleg2, -10, -7, 20, 60);
      pop();
    } break;
    case "ch2": {

      if (state.includes("left")) {
        translate(25, 0);
      }
      if (state.includes("right")) {
        scale(-1, 1);
        translate(-125, 0);
      }

      push();
      translate(10, 20);
      rotate(-rot.leg1);
      image(sprites.chleg3, -10, -7, 20, 60);
      pop();

      push();
      translate(70, 20);
      rotate(-rot.leg2);
      image(sprites.chleg3, -10, -7, 20, 60);
      pop();

      image(sprites.chead2, -37.5, -15, 35, 35);

      image(sprites.chbody2, -5, 0, 100, 50);



      push();
      translate(10, 20);
      rotate(rot.leg1);
      image(sprites.chleg3, -10, -7, 20, 60);
      pop();

      push();
      translate(70, 20);
      rotate(rot.leg2);
      image(sprites.chleg3, -10, -7, 20, 60);
      pop();
    } break;

  }
  pop();
}

function rem(arr, e) {
  arr.splice(arr.indexOf(e), 1);
}

function runBtn(btn) {
  if (btn == "ingotb") {
    ingots++;
    blocks[blockSelected].dead = true;
  }
  if (btn == "bb") {
    for (var i = 0; i < 20; i++) {
      particles.push(new Particle("aspark", blocks[blockSelected].x + blockSize / 2, blocks[blockSelected].y + blockSize / 2))
    }
    blocks[blockSelected].t = "b";
    updateBlock(blocks[blockSelected]);
  }
  blockSelected = false;
}

var player = {
  spawn: [0, 0],
  died: false,
  x: 0,
  y: 50,
  w: 30,
  h: 100,
  xVel: 0,
  yVel: 0,
  yAcc: 0,
  xAcc: 0,
  speed: 5,
  jumpForce: 10,
  health: 100,
  maxHealth: 100,
  canMove: true,
  inLiquid: false,
  type: "ed",
  rot: {
    armR: 0,
    armL: 0,
    legR: 0,
    legL: 0,
    cape: 0,
    head: 0,
  },
  attacking: false,
  state: ["right", "default"],
  elements: ["water", "iron"],
  draw: function () {
    if (this.type == "ed") {
      this.damage = 15;
      this.w = 30;
      this.h = 100;
      playerRig(this.type, this.x, this.y, this.rot, this.state);
      if (keys["z"]) {
        if (this.state[1] !== "combat") {
          this.state[1] = "combat";
        } else {
          this.state[1] = "default";
        }
        for (var i = 0; i < 10; i++) {
          particles.push(new Particle("aspark", this.x + this.w / 2, this.y + this.h / 2 + 15))
        }
        keys["z"] = false;
      }
      if (this.state.includes("combat")) {
        if (keys[" "] && abs(this.rot.armR) < 5) {
          this.attacking = true;
          this.rot.armR = -360;
        }

        if (!keys[" "]) {
          this.attacking = false;
        }
      }
    } else if (this.type == "al") {
      this.damage = 20;
      this.w = 50;
      this.h = 125;
      this.speed = 4;
      this.jumpForce = 12;
      playerRig(this.type, this.x, this.y, this.rot, this.state);
      if (keys[" "] && abs(this.rot.armR) < 5) {
        this.rot.armR = -360;
        this.attacking = true;
      }

      if (!keys[" "]) {
        this.attacking = false;
      }
    } else if (this.type == "scar") {
      this.damage = 50;
      this.w = 50;
      this.h = 125;
      this.speed = 5;
      this.jumpForce = 12;
      playerRig(this.type, this.x, this.y, this.rot, this.state);
      if (keys[" "]) {
        if (frameCount % 100 > 75) {
          this.rot.armR = -90;
          this.attacking = true;
          if (frameCount % 15 === 0) {
            if (this.state.includes("left")) {
              particles.push(new Particle("aspark2", this.x - 45, this.y + 35));
            }
            if (this.state.includes("right")) {
              particles.push(new Particle("aspark2", this.x + 75, this.y + 40));
            }
          }
        } else {
          this.attacking = false;
        }
      }

      if (!keys[" "]) {
        this.attacking = false;
      }
    }


    if (alchemyMenu) {
      image(sprites[buttons[0]], player.x + player.w / 2 - 50, player.y - 35, 30, 30);
      image(sprites[buttons[1]], player.x + player.w / 2 + 20, player.y - 35, 30, 30);
      image(sprites["closeb"], player.x + player.w / 2 - 15, player.y - 35, 30, 30);
      var mx = mouseX - cam.x + player.w / 2;
      var my = mouseY - cam.y + player.h / 2;
      if (dist(player.x + player.w - 25, player.y - 20, mx, my) < 15) {
        image(sprites["closes"], player.x + player.w / 2 - 15, player.y - 35, 30, 30);
        cursor("pointer");
        if (clicked) {
          alchemyMenu = false;
          blockSelected = false;
        }
      }
      if (dist(player.x + player.w / 2 - 35, player.y - 20, mx, my) < 15) {
        image(sprites["bselected"], player.x + player.w / 2 - 50, player.y - 35, 30, 30);
        cursor("pointer");
        if (clicked) {
          runBtn(buttons[0]);
          alchemyMenu = false;
        }
      }
      if (dist(player.x + player.w / 2 + 35, player.y - 20, mx, my) < 15) {
        image(sprites["bselected"], player.x + player.w / 2 + 20, player.y - 35, 30, 30);
        cursor("pointer");
        if (clicked) {
          runBtn(buttons[1]);
          alchemyMenu = false;
        }
      }


    }
    if (this.health < this.maxHealth) {
      fill(255, 0, 0);
      noStroke();
      rect(this.x, this.y - 15, this.w, 5);
      fill(0, 255, 0);
      rect(this.x, this.y - 15, this.health / this.maxHealth * this.w, 5);
    }
    if (this.health <= 0) {
      this.died = true;
      this.health = this.maxHealth;
    }
    this.inLiquid = false;
    for (var i = 0; i < blocks.length; i++) {
      var b = blocks[i];

      if (b.hit && b.cType == "liq") {
        this.inLiquid = true;
      }
    }

  },
  moveX: function () {
    this.x += this.xVel;
    this.xVel += this.xAcc;
    if (this.xVel > this.speed) {
      this.xVel = this.speed;
    }
    if (this.xVel < -this.speed) {
      this.xVel = -this.speed;
    }
    if (keys["ArrowLeft"] || keys["a"] && this.canMove) {
      this.xAcc -= 0.5;
      this.state[0] = "left";
      this.rot.cape = 20 + sin(frameCount * 7) * 20;
      this.rot.armR = sin(frameCount * 5) * 30;
      this.rot.armL = -sin(frameCount * 5) * 30;
      this.rot.legR = cos(frameCount * 5) * 30;
      this.rot.legL = -cos(frameCount * 5) * 30;
    } else if (keys["ArrowRight"] || keys["d"] && this.canMove) {
      this.xAcc += 0.5;
      this.state[0] = "right";
      this.rot.cape = 20 + sin(frameCount * 7) * 20;
      this.rot.armR = sin(frameCount * 5) * 30;
      this.rot.armL = -sin(frameCount * 5) * 30;
      this.rot.legR = cos(frameCount * 5) * 30;
      this.rot.legL = -cos(frameCount * 5) * 30;
    } else {
      this.xVel += (0 - this.xVel) / friction;
      this.xAcc = 0;
    }

    if (!keys["ArrowLeft"] && !keys["a"] && !keys["d"] && !keys["ArrowRight"]) {
      this.rot.cape = 10 + sin(frameCount * 2) * 15;
      this.rot.armR += (0 - this.rot.armR) / 10;
      this.rot.armL += (0 - this.rot.armL) / 10;
      this.rot.legR += (0 - this.rot.legR) / 10;
      this.rot.legL += (0 - this.rot.legL) / 10;
    }
  },
  moveY: function () {

    this.y += this.yVel;
    this.yVel += this.yAcc;
    this.yAcc += grav;



    if (this.inLiquid) {
      if (this.yVel > 2) {
        this.yVel = 2;
      }
      if (this.xVel > 2) {
        this.xVel = 2;
      }
      if (this.xVel < -2) {
        this.xVel = -2;
      }
    }
    if (this.yVel >= maxGrav) {
      this.yVel = maxGrav;
    }
    if (this.yVel == 0 && this.canMove && !this.inLiquid) {
      if (keys["ArrowUp"] || keys["w"]) {
        this.y -= 5;
        this.yVel = -this.jumpForce;
      }
    }
    if (this.canMove && this.inLiquid) {
      if (keys["ArrowUp"] || keys["w"]) {
        this.y -= 5;
        this.yAcc = 0;
        this.yVel = -2;
      }
    }
    if (keys["ArrowUp"] || keys["w"]) {
      this.state[2] = "jumping";
    } else {
      this.state[2] = false;
    }

  }
};



function Block(t, x, y) {
  this.x = x;
  this.y = y;
  this.t = t;
  this.c = true;
  this.w = blockSize;
  this.h = blockSize;
  this.text = "";
  this.cType = "rect";
  this.hit = collideRectRect(this.x, this.y, blockSize, blockSize, player.x, player.y, player.w, player.h);
  this.imgs = false;
  this.ar = Infinity;
  this.cov = true;
  this.a = 0;
  this.stepAc = false;
  this.activated = false;
  this.onActivate = function () { };
  this.conf = 0;
  this.special = false;
  this.dead = false;
  this.alch = false;
  this.falling = false;
  this.yVel = 0;
  this.yAcc = 0;
  updateBlock(this);
}
Block.prototype.draw = function () {
  this.hit = collideRectRect(this.x, this.y, blockSize, blockSize, player.x, player.y, player.w, player.h);
  var mx = mouseX - cam.x + player.w / 2;
  var my = mouseY - cam.y + player.h / 2;
  fill(0);
  if (sprites[blockTypes[this.t]]) {
    image(sprites[blockTypes[this.t]], this.x, this.y, blockSize, blockSize);
  } else {
    image(sprites[this.imgs[this.a]], this.x, this.y, blockSize, blockSize);
    if (frameCount % this.ar === 0) {
      this.a++;
      if (this.a > this.imgs.length - 1) {
        this.a = 0;
      }
    }
  }
  if (this.falling) {
    this.y += this.yVel;
    this.yVel += this.yAcc;
    this.yAcc += grav;
    if (this.y > levels[level].m.length * blockSize + 500) {
      this.dead = true;
    }
  }

  ///////////////////////////
  //special blocks (graphics)
  ///////////////////////////

  if (this.t == "0") {
    for (var i = 0; i < blocks.length; i++) {
      var b = blocks[i];
      if (b.y == this.y - blockSize && b.x == this.x && this.t == "0" && b.cov) {
        image(sprites.b1, this.x, this.y, blockSize, blockSize);
      }
    }
  }
  if (this.t == "S" && this.activated) {
    image(sprites.switch2, this.x, this.y, blockSize, blockSize);
  }
  if (this.t == "c") {
    if (this.activated) {
      image(sprites.checkpoint2, this.x, this.y, blockSize, blockSize);
    }
  }


  if (this.alch) {
    if (mx > this.x && my > this.y && mx < this.x + blockSize && my < this.y + blockSize) {
      image(sprites[this.sl], this.x, this.y, blockSize, blockSize);
      cursor("pointer");
      if (clicked && player.elements.includes(this.element)) {
        alchemyMenu = true;
        buttons = this.buttons;
        blockSelected = blocks.indexOf(this);
        console.log(blockSelected);
      }
    }
  }
  ///////////////////////////
  //special blocks (functions)
  ///////////////////////////
  if (this.t == "p") {
    if (this.hit) {
      level++;
      cutScene(level);
      player.xVel = 0;
      player.yVel = 0;
      player.xAcc = 0;
      player.yAcc = 0;
      player.health = player.maxHealth;
      runLevel();
    }
  }
  if (this.t == "s" && this.hit) {
    fill(255);
    strokeWeight(2);
    stroke(0);
    textSize(20);
    textAlign(CENTER);
    text(this.text, this.x + blockSize / 2, this.y - 50);
  }
  if (this.t == "l" && this.hit) {
    player.health--;
  }
};
Block.prototype.collideY = function (ply) {
  this.hit = collideRectRect(this.x, this.y, blockSize, blockSize, ply.x, ply.y, ply.w, ply.h);
  if (this.t == "^" && this.hit && ply.yVel > 0) {
    ply.yVel = -ply.jumpForce;
    ply.yAcc = 0;
    ply.health -= 10;
  }
  if (this.c) {
    if (this.cType == "rect") {
      if (this.hit) {
        if (ply.yVel < 0) {
          ply.y = this.y + blockSize;
          ply.yVel *= -0.75;
        } else {
          ply.y = this.y - ply.h;
          ply.yVel = 0;
          ply.yAcc = 0;
          if (this.stepAc === "step" && !this.activated && ply == player) {
            this.onActivate();
            this.activated = true;
          }
        }


      }
    }
    if (this.cType == "tril") {
      if (ply.y < this.y) {


        if (ply.y + ply.h > (this.y + blockSize) - ((ply.x + ply.w) - this.x) && ply.x + ply.w >= this.x && ply.x + ply.w <= this.x + this.w && ply.y < this.y && ply.yVel > 0) {
          ply.y = (this.y + blockSize) - ((ply.x + ply.w) - this.x) - ply.h - 2;
          ply.yVel = 0;
          ply.yAcc = 0;
        }


      }
      if (ply.y + ply.h > this.y + blockSize) {

        if (ply.yVel < 0 && this.hit) {
          ply.yVel *= -0.75;
          this.hit = false;
        }
      }
    }
    if (this.cType == "trir") {
      if (ply.y + ply.h > (this.y + (ply.x - this.x)) && ply.x >= this.x && ply.x <= this.x + this.w && ply.y < this.y) {
        ply.y = (this.y + (ply.x - this.x) - ply.h) - 2;
        ply.yVel = 0;
        ply.yAcc = 0;
      }
      if (ply.y + ply.h > this.y + blockSize) {
        if (ply.yVel < 0 && this.hit) {
          ply.yVel *= -0.75;
          this.hit = false;
        }
      }
    }
  }

}
Block.prototype.collideX = function (ply) {
  this.hit = collideRectRect(this.x, this.y, blockSize, blockSize, ply.x, ply.y, ply.w, ply.h);

  if (this.c && this.cType == "rect" && this.hit) {
    if (this.stepAc == "press" && !this.activated  && ply === player) {
      if (keys["ArrowDown"] || keys["s"]) {
        this.onActivate();
        this.activated = true;
      }
    }
    if (ply.xVel < 0) {
      ply.x = this.x + blockSize;
    } else {
      ply.x = this.x - ply.w;
    }
    ply.xVel = 0;
    ply.xAcc = 0;
    this.hit = false;

  }



}


function Enemy(t, x, y) {
  this.x = x;
  this.y = y;
  this.w = 50;
  this.h = 125;
  this.xVel = 0;
  this.yVel = 0;
  this.yAcc = 0;
  this.xAcc = 0;
  this.speed = 4;
  this.maxSpeed = 4;
  this.jumpForce = 10;
  this.health = 500;
  this.maxHealth = 500;
  this.canMove = true;
  this.inLiquid = false;
  this.type = t;
  this.rot = {};
  this.dead = false;
  this.state = [];
  this.rate = 10;
  this.damage = 100;
  if (this.type === "ch1") {
    this.speed = 3;
    this.jumpForce = 7;
    this.health = 100;
    this.maxHealth = 100;
    this.rate = 50;
    this.damage = 25;
    this.w = 125;
    this.h = 75;
  }
  if (this.type === "lust") {
    this.speed = 3;
    this.jumpForce = 7;
    this.health = 100;
    this.maxHealth = 100;
    this.rate = 100;
    this.damage = 25;
    this.w = 50;
    this.h = 100;
  }
  if (this.type === "gluttony") {
    this.speed = 2;
    this.jumpForce = 0;
    this.health = 100;
    this.maxHealth = 100;
    this.rate = 50;
    this.damage = 25;
    this.w = 75;
    this.h = 100;
  }
  if (this.type === "ch2") {
    this.speed = 4;
    this.jumpForce = 0;
    this.health = 20;
    this.maxHealth = 20;
    this.rate = 25;
    this.damage = 25;
    this.w = 125;
    this.h = 75;
  }
}
Enemy.prototype.draw = function () {
  if (this.type == "greed") {
    this.w = 30;
    this.h = 127;
    playerRig(this.type, this.x, this.y, this.rot, this.state)
  }
  if (this.type == "ch1") {
    playerRig(this.type, this.x, this.y, this.rot, this.state)
  }
  if (this.type == "ch2") {
    this.jumpForce = 0;
    playerRig(this.type, this.x, this.y, this.rot, this.state)
  }
  if (this.type == "lust") {
    playerRig(this.type, this.x, this.y, this.rot, this.state)
  }
  if (this.type == "gluttony") {
    playerRig(this.type, this.x, this.y, this.rot, this.state)
  }
  if (this.health < this.maxHealth) {
    fill(255, 0, 0);
    noStroke();
    rect(this.x, this.y - 15, this.w, 5);
    fill(0, 255, 0);
    rect(this.x, this.y - 15, this.health / this.maxHealth * this.w, 5);
  }
  if (this.health <= 0) {
    this.dead = true;
  }
  this.inLiquid = false;
  for (var i = 0; i < blocks.length; i++) {
    var b = blocks[i];

    if (b.hit && b.cType == "liq") {
      this.inLiquid = true;
    }
  }
  if (this.health <= 0) {
    this.dead = true;
  }
  this.speed += (this.maxSpeed - this.speed) / 20;

  var hitPlayer = collideRectRect(this.x, this.y, this.w, this.h, player.x, player.y, player.w, player.h)
  if (hitPlayer) {
    if (frameCount % this.rate === 0) {
      if (this.type == "greed") {
        this.rot.armR = -360;
      }
      if (this.x < player.x) {
        player.xVel = 10;
        player.yVel = -5;
        player.health -= floor(random(this.damage));
      }
      if (this.x > player.x) {
        player.xVel = -10;
        player.yVel = -5;
        player.health -= floor(random(this.damage));
      }
    }
    if (player.attacking) {
      if (player.state.includes("left")) {
        this.speed = -5;
        this.xVel = -10;
        this.yVel = -5;
        this.health -= player.damage;
      }
      if (player.state.includes("right")) {
        this.speed = -5;
        this.xVel = 10;
        this.yVel = -5;
        this.health -= player.damage;
      }
      player.attacking = false;

    }
  }

}
Enemy.prototype.moveX = function () {
  this.x += this.xVel;
  this.xVel += this.xAcc;
  if (this.xVel > this.speed) {
    this.xVel = this.speed;
  }
  if (this.xVel < -this.speed) {
    this.xVel = -this.speed;
  }
  if (this.x > player.x && !collideRectRect(this.x, this.y, this.w, this.h, player.x, player.y, player.w, player.h) && this.canMove) {
    this.xAcc -= 0.5;
    this.state[0] = "left";
    this.rot.armR = sin(frameCount * 5) * 30;
    this.rot.armL = -sin(frameCount * 5) * 30;
    this.rot.legR = cos(frameCount * 5) * 30;
    this.rot.legL = -cos(frameCount * 5) * 30;
    this.rot.leg1 = sin(frameCount * 5) * 30;
    this.rot.leg2 = cos(frameCount * 5) * 30;
  } else if (this.x < player.x && !collideRectRect(this.x, this.y, this.w, this.h, player.x, player.y, player.w, player.h) && this.canMove) {
    this.xAcc += 0.5;
    this.xVel = this.speed;
    this.state[0] = "right";
    this.rot.armR = sin(frameCount * 5) * 30;
    this.rot.armL = -sin(frameCount * 5) * 30;
    this.rot.legR = cos(frameCount * 5) * 30;
    this.rot.legL = -cos(frameCount * 5) * 30;
    this.rot.leg1 = sin(frameCount * 5) * 30;
    this.rot.leg2 = cos(frameCount * 5) * 30;
  } else {
    this.xVel += (0 - this.xVel) / friction;
    this.xAcc = 0;
    this.rot.armR += (0 - this.rot.armR) / 10;
    this.rot.armL += (0 - this.rot.armL) / 10;
    this.rot.legR += (0 - this.rot.legR) / 10;
    this.rot.legL += (0 - this.rot.legL) / 10;
    this.rot.leg1 = (0 - this.rot.leg1) / 10;
    this.rot.leg2 = (0 - this.rot.leg2) / 10;
  }


}
Enemy.prototype.moveY = function () {

  this.y += this.yVel;
  this.yVel += this.yAcc;
  this.yAcc += grav;



  if (this.inLiquid) {
    if (this.yVel > 2) {
      this.yVel = 2;
    }
    if (this.xVel > 2) {
      this.xVel = 2;
    }
    if (this.xVel < -2) {
      this.xVel = -2;
    }
  }
  if (this.yVel >= maxGrav) {
    this.yVel = maxGrav;
  }
  if (this.yVel == 0 && this.canMove && !this.inLiquid) {
    if (player.y < this.y) {
      this.yVel = -this.jumpForce;
    }
  }
  if (this.canMove && this.inLiquid) {
    if (player.y < this.y) {
      this.y -= 5;
      this.yAcc = 0;
      this.yVel = -2;
    }
  }
  if (player.y < this.y) {
    this.state[2] = "jumping";
  } else {
    this.state[2] = false;
  }


}


function runLevel() {
  enemies = [];
  particles = [];
  blocks = [];
  signIndex = 0;
  var mp = levels[level].m;
  for (var i = 0; i < mp.length; i++) {
    for (var j = 0; j < mp[i].length; j++) {
      if (mp[i][j] === "@") {
        player.spawn[0] = j * blockSize;
        player.spawn[1] = i * blockSize;
      } else if (mp[i][j] === "ç") {
        enemies.push(new Enemy("ch2", j * blockSize, i * blockSize));
      } else if (mp[i][j] !== " ") {
        blocks.push(new Block(mp[i][j], j * blockSize, i * blockSize));
      }
    }
  }
  for (var s = 0; s < blocks.length; s++) {
    if (blocks[s].t == "s" && levels[level].signs) {
      blocks[s].text = levels[level].signs[signIndex];
      signIndex++;
    }
  }
  player.x = player.spawn[0];
  player.y = player.spawn[1];
  if (level === 4) {
    enemies.push(new Enemy("ch1", 1000, 100))
  }
  if (level === 21) {
    enemies.push(new Enemy("greed", 500, 100))
  }
  if (level === 33) {
    enemies.push(new Enemy("lust", 500, 100))
    enemies.push(new Enemy("gluttony", 1000, 100))
  }
}
runLevel();

function renderSprite(w, s) {
  var v = w.split(';')
  var img = createGraphics(v[1].length * s, v.length * s);
  if (img) {
    img.background(0, 0, 0, 0);
    img.noStroke();
    for (var i = 0; i < v[1].length; i++) {
      for (var j = 0; j < v.length; j++) {
        img.fill(palette[v[j][i]])
        img.rect(i * s, j * s, s, s);
      }
    }
  }
  return img;
}

function loadSprites() {
  var ks = Object.keys(art);
  var kv = Object.values(art);
  for (var i = 0; i < ks.length; i++) {
    sprites[ks[i]] = renderSprite(kv[i], 2);
  }
}

let stxt = "";
function cutScene(lvl) {
  if (lvl == 3) {
    scene = "cut";
    stxt = `You approach the temple of the Sun God and a priest that
    is performing some magical acts in front of a crowd.
    
    He is transmuting some things into others but
    is ignoring the rule of Equal Exchange in Value.
    
    You tell someone that he is using Alchemy and a rumor
    starts to spread that the priest is fake.
    
    He brings you into his temple and challenges you to a fight.

    {(Click to Continue)}`;
  }
  if (lvl == 4) {
    scene = "cut";
    stxt = `The priest brings you into a large room and
    creates a chimera.  Z to turn your hand into a sword
    and SPACE to attack.  Z to change your hand back.
    
    Click to Continue`;
  }
  if (lvl == 5) {
    scene = "cut";
    stxt = `You defeat the synthesized monster but then
    the priest captures you and puts you in prison.  The priest
    tells you all the reasons why he is a fake.
    
    "I am a fake actually.  See this ring on my hand?" He
    shows you a ring with a red gemstone in it. "It's the Philosipher's
    stone.  The one and only accelerator for alchemy.  I can do a
    lot of things with it.  This is how I control the city of Liore."
    
    Your brother alphonse was broadcasting what he was saying tho.
    You have two minutes to complete this level or you get killed.

    Click to continue.
    `;
  }
  if (lvl == 6) {
    scene = "cut";
    stxt = `You escape the priest and find out prove that he's a fake.\n\nThe ring on his finger that contained
    the philosipher's stone shattered.  A fake.
    Now you are going to search for a real one
    In the Fifth Labratory in Amestris.
    
    Click to Continue.`;
  }

  if(lvl == 14){
    scene = "cut";
    stxt = `You meet a guy named Shou Tucker, an alchemist who experiments with
    humans, animals, and genetics.  He himself is a monster from a failed experiment, 
    mixed with a large creature like a bear.  He tells you that Philosipher Stones
    are made of human lives.  Now you must escape the labratory and find your alchemy
    teacher to see if there is an alternative.
    
    Click to Continue.`;
  }

  if(lvl == 18){
    scene = "cut";
    stxt = `You find your alchemy teacher and find out that
    there is no alternative to a philosipher stone.  You are
    about to go back home until some suspicious people kidnap
    your brother alphonse.  Find him and rescue him.
    
    Click to Continue.`;
  }

  if(lvl == 21){
    scene = "cut";
    stxt = `You find your brother and you both escape from the people who kidnapped him.
    Escaped from all except one of them, a Homoculus (artificial human) who
    has a layer of carbon armor as hard as a diamond protecting his body.
    
    Click to Continue.`;
  }

  if(lvl == 22){
    scene = "cut";
    stxt = `You kill the homoculus and move on to find a Philosiper stone.
    A guy is trying to make a philosiper stone in a city.
    You must find him and stop him before he kills thousands of
    people in the process.
    
    Click to Continue.`;
  }

  if(lvl == 24){
    scene = "cut";
    stxt = `You find him and fight him.  Later, he manages to activate it and makes it inside
    of alphonse.  You then restore alphonse's body and get teleported to another dimension.
    Congrats, you've won on this world.
    
    Click to Continue.`;
    player.type = "al";
  }
}

var url = "https://images.unsplash.com/photo-1490604001847-b712b0c2f967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
var bg3, bg4, bg5, bg6;

function preload() {
  fetch(url).then(() => {
    bg = loadImage(url);
    bg2 = loadImage("https://images.unsplash.com/photo-1529276426793-9c2dfd01d127?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80");
    bg3 = loadImage("https://images.unsplash.com/photo-1599167657413-29379d83459b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
    bg4 = loadImage("https://images.unsplash.com/photo-1565801498494-db3f437cd935?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80");
    bg5 = loadImage("https://images.unsplash.com/photo-1586970850192-1e39bb631404?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGxhbmRzY2FwZSUyMHdhbGxwYXBlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60");
    bg6 = loadImage("https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80");
  }).catch(function () {
    bg = createGraphics(1, 1);
    bg.background(0, 200, 255);
    bg2 = createGraphics(1, 1);
    bg2.background("rgb(0,100,150)")
    bg5 = createGraphics(1, 1);
    bg5.background(0, 200, 255);
    bg6 = createGraphics(1, 1);
    bg6.background(50,50,50);
  });
}
function setup() {
  createCanvas(1200, 600);
  loadSprites();
  textFont("Cinzel Decorative");
  angleMode(DEGREES);
}
function draw() {
  cursor("default");
  if (scene == "game") {
    if(level >= 24){
      player.type = "al";
    }
    if (keys["r"]) {
      runLevel();
      player.health = player.maxHealth;
      keys["r"] = false;
    }
    particles = particles.filter(a => !a.dead);
    enemies = enemies.filter(a => !a.dead);

    if (level < 2) {
      if (bg) {
        image(bg, 0, 0, width, height);
      } else {
        background(0, 200, 255);
      }
    } else if (level < 6) {
      if (bg2) {
        image(bg2, 0, 0, width, height);
      } else {
        background(0, 100, 150);
      }
    } else if (level < 15) {
      if (bg4) {
        image(bg4, 0, 0, width, height);
      } else {
        background(25, 25, 75);
      }
    }else if (level < 20) {
      if (bg5) {
        image(bg5, 0, 0, width, height);
      } else {
        background(0,200,255);
      }
    }else if (level < 40) {
      if (bg6) {
        image(bg6, 0, 0, width, height);
      } else {
        background(50,50,50);
      }
    }

    if (level === 4) {
      if (bg3) {
        image(bg3, 0, 0, width, height);
      } else {
        background("rgb(100,100,150)");
      }
    }



    push();
    cam.x += ((-player.x + width / 2) - cam.x) / 10;
    cam.y += ((-player.y + height / 2) - cam.y) / 10;
    translate(cam.x - player.w / 2, cam.y - player.h / 2);

    player.draw();
    player.moveX();
    for (var e = 0; e < enemies.length; e++) {
      if (!enemies[e].dead) {
        enemies[e].draw();
        enemies[e].moveX();
      }
    }
    for (var ba = 0; ba < blocks.length; ba++) {
      if (!blocks[ba].dead) {
        for (var ec = 0; ec < enemies.length; ec++) {
          if (!enemies[ec].dead) {
            blocks[ba].collideX(enemies[ec]);
          }
        }
        blocks[ba].collideX(player);
      }
    }
    player.moveY();
    for (var e2 = 0; e2 < enemies.length; e2++) {
      if (!enemies[e2].dead) {
        enemies[e2].moveY();
      }
    }
    for (var b1 = 0; b1 < blocks.length; b1++) {
      if (!blocks[b1].dead) {
        for (var ecc = 0; ecc < enemies.length; ecc++) {
          if (!enemies[ecc].dead) {
            blocks[b1].collideY(enemies[ecc]);
          }
        }
        blocks[b1].collideY(player);
      }
    }
    for (var b = 0; b < blocks.length; b++) {
      if (!blocks[b].dead) {
        blocks[b].draw();
      }
    }
    for (var i = 0; i < particles.length; i++) {
      if (!particles[i].dead) {
        particles[i].run();
      }
    }
    pop();
    image(sprites.coin, 20, 20, 50, 50);
    image(sprites.pstone, 20, 80, 50, 50);
    image(sprites.ingot, 20, 140, 50, 50);
    textAlign(CORNER, TOP);
    textSize(50);
    stroke(0);
    strokeWeight(3);
    fill(255);
    text(coins, 80, 25);
    text(stones, 80, 85);
    text(ingots, 80, 145);

    if (player.y > (levels[level].m.length * blockSize) + 500) {
      player.died = true;
    }
    if (levels[level].fight) {
      if (enemies.length === 0) {
        level++;
        cutScene(level);
        player.health = player.maxHealth;
        runLevel();
      }
    }
    if (player.died) {
      player.x = player.spawn[0];
      player.y = player.spawn[1];
      player.xVel = 0;
      player.yVel = 0;
      player.yAcc = 0;
      player.canMove = false;
      player.health = player.maxHealth;
      player.died = false;
      if (levels[level].restart) {
        runLevel();
      }
      setTimeout(function () {
        player.canMove = true;
      }, 100);
    }
  } else if (scene == "test") {
    background(200);
    playerRig("ch2", 200, 300, {
      leg1: cos(frameCount * 5) * 15,
      leg2: sin(frameCount * 5) * 15,
    }, ["right", "default"])
  } else if (scene == "cut") {
    background(50);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(stxt, width / 2, height / 2);
    if (clicked) {
      scene = "game";
    }
  }
  if (clicked) {
    clicked = false;
  }

}
function keyPressed() {
  keys[key] = true;
}
function keyReleased() {
  keys[key] = false;
}
function mouseClicked() {
  clicked = true;
}
