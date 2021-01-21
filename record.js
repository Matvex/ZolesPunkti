class Record {
    constructor(id = 1,
        player0 = false,
        player1 = false,
        player2 = false,
        player3 = false,
        win = false,
        loose = false,
        jani = false,
        bezstikis = false,
        zole = false,
        active = true)
    {
        this.id = id
        this.player0 = player0;
        this.player0 = player1;
        this.player0 = player2;
        this.player0 = player3;
        this.win = win;
        this.loose = loose;
        this.jani = jani;
        this.bezstikis = bezstikis;
        this.zole = zole;
        this.active = active;
        this.created_at = new Date();
    }
}