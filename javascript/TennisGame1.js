var TennisGame1 = function (player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function (playerName) {
    if (playerName === "player1")
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

TennisGame1.prototype.getScore = function () {
    var score = "";
    var tempScore = 0;
    if (this.m_score1 === this.m_score2) {
        score = getEvenScoreString(this.m_score1);
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        var pointDifference = this.m_score1 - this.m_score2;
        if (pointDifference === 1) score = "Advantage player1";
        else if (pointDifference === -1) score = "Advantage player2";
        else if (pointDifference >= 2) score = "Win for player1";
        else score = "Win for player2";
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.m_score1;
            else {
                score += "-";
                tempScore = this.m_score2;
            }
            score += getStringDisplayFor(tempScore);
        }
    }
    return score;
};

var getEvenScoreString = function (m_score1) {
    var score = "";
    switch (m_score1) {
        case 0:
            score = "Love-All";
            break;
        case 1:
            score = "Fifteen-All";
            break;
        case 2:
            score = "Thirty-All";
            break;
        default:
            score = "Deuce";
            break;
    }
    return score;
}

var getStringDisplayFor = function (tempScore) {
    var score = "";
    switch (tempScore) {
        case 0:
            score += "Love";
            break;
        case 1:
            score += "Fifteen";
            break;
        case 2:
            score += "Thirty";
            break;
        case 3:
            score += "Forty";
            break;
    }
    return score;
}
if (typeof window === "undefined") {
    module.exports = TennisGame1;
}