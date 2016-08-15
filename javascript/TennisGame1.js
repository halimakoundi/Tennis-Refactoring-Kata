var TennisGame1 = function (player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.scores = new Scores(0, 0);
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function (playerName) {
    if (playerName === "player1")
        this.m_score1 += 1;
    else
        this.m_score2 += 1;

    this.scores.registerPointFor(playerName);
};

TennisGame1.prototype.getScore = function () {
    var score = "";
    if (this.m_score1 === this.m_score2) {
        score = getEvenScoreString(this.m_score1);
    } else if (minimumPointsReached(this.m_score1, this.m_score2)) {
        score = getAdvantageOrWinnerFor(this.m_score1, this.m_score2);
    } else {
        score = getRunningScore(this.m_score1, this.m_score2);
    }
    return score;
};

var minimumPointsReached = function(m_score1, m_score2) {
    return m_score1 >= 4 || m_score2 >= 4;
};

var getAdvantageOrWinnerFor = function(m_score1, m_score2) {
    var score = "";
    var pointDifference = m_score1 - m_score2;
    if (pointDifference === 1) score = "Advantage player1";
    else if (pointDifference === -1) score = "Advantage player2";
    else if (pointDifference >= 2) score = "Win for player1";
    else score = "Win for player2";
    return score;
};

var getRunningScore = function(m_score1, m_score2) {
    var score = "";
    score += getStringDisplayFor(m_score1);
    score += "-";
    score += getStringDisplayFor(m_score2);
    return score;
};

var getEvenScoreString = function(m_score1) {
    if (m_score1 > 2) {
        return "Deuce";
    } else {
        return getStringDisplayFor(m_score1) + "-All";
    }
};

var scoreStringRepresentations = ["Love", "Fifteen", "Thirty", "Forty"];
var getStringDisplayFor = function (playerScore) {
    return scoreStringRepresentations[playerScore];
};

var Scores = function (score1, score2) {
    this.score1 = score1;
    this.score2 = score2;

    this.registerPointFor = function (player) {
        if (player === "player1")
            this.score1 += 1;
        else
            this.score2 += 1;
    }
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}