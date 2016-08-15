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
    if (this.m_score1 === this.m_score2) {
        score = getEvenScoreString(this.m_score1);
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        score = getAdvantageOrWinnerFor(this.m_score1, this.m_score2);
    } else {
        score = getRunningScore(this.m_score1, this.m_score2);
    }
    return score;
};

var getAdvantageOrWinnerFor = function (m_score1, m_score2) {
    var score = "";
    var pointDifference = m_score1 - m_score2;
    if (pointDifference === 1) score = "Advantage player1";
    else if (pointDifference === -1) score = "Advantage player2";
    else if (pointDifference >= 2) score = "Win for player1";
    else score = "Win for player2";
    return score;
}

var getRunningScore = function (m_score1, m_score2) {
    var score = "";
    score += getStringDisplayFor(m_score1);
    score += "-";
    score += getStringDisplayFor(m_score2);
    return score;
}

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
var scoreStringRepresentation = ["Love", "Fifteen", "Thirty", "Forty"];
var getStringDisplayFor = function (playerScore) {
    var score = "";
    switch (playerScore) {
        case 0:
            score = scoreStringRepresentation[playerScore];
            break;
        case 1:
            score = scoreStringRepresentation[playerScore];
            break;
        case 2:
            score = scoreStringRepresentation[playerScore];
            break;
        case 3:
            score = scoreStringRepresentation[playerScore];
            break;
    }
    return score;
}
var Enum = function (constantsList) {
    for (var i in constantsList) {
        this[constantsList[i]] = i;
    }
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}