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
        score = new EvenGame().getEvenScoreString(this.m_score1);
    } else if (minimumPointsReached(this.m_score1, this.m_score2)) {
        score = new AdvatageOrWinGame().getScoreAsString(this.m_score1, this.m_score2);
    } else {
        score = new GameInProgress().getScore(this.m_score1, this.m_score2);
    }
    return score;
};

var minimumPointsReached = function (m_score1, m_score2) {
    return m_score1 >= 4 || m_score2 >= 4;
};

var getAdvantageOrWinnerFor = function (m_score1, m_score2) {
    var score = "";
    var pointDifference = m_score1 - m_score2;
    if (pointDifference === 1) score = "Advantage player1";
    else if (pointDifference === -1) score = "Advantage player2";
    else if (pointDifference >= 2) score = "Win for player1";
    else score = "Win for player2";
    return score;
};

var getRunningScore = function (m_score1, m_score2) {
    var score = "";
    score += getStringDisplayFor(m_score1);
    score += "-";
    score += getStringDisplayFor(m_score2);
    return score;
};

var scoreStringRepresentations = ["Love", "Fifteen", "Thirty", "Forty"];
var getStringDisplayFor = function (playerScore) {
    return scoreStringRepresentations[playerScore];
};

var EvenGame = function () {
    this.getEvenScoreString = function (score) {
        if (score > 2) {
            return "Deuce";
        } else {
            return getStringDisplayFor(score) + "-All";
        }
    };

    var getStringDisplayFor = function (score) {
        return scoreStringRepresentations[score];
    };
    var scoreStringRepresentations = ["Love", "Fifteen", "Thirty", "Forty"];
}

var AdvatageOrWinGame = function () {
    var minimumPointsDiffToWinReached = function (pointDifference) {
        return pointDifference >= 2;
    }

    this.getScoreAsString = function (score1, score2) {
        var score = "";
        var pointDifference = score1 - score2;
        if (pointDifference === 1) score = "Advantage player1";
        else if (pointDifference === -1) {
            score = "Advantage player2";
        } else {
            if (minimumPointsDiffToWinReached(pointDifference)) score = "Win for player1";
            else score = "Win for player2";
        }
        return score;
    }

}

var GameInProgress = function () {

    this.getScore = function (score1, score2) {
        var score = "";
        score += getStringDisplayFor(score1);
        score += "-";
        score += getStringDisplayFor(score2);
        return score;
    }

    var scoreStringRepresentations = ["Love", "Fifteen", "Thirty", "Forty"];
    var getStringDisplayFor = function (playerScore) {
        return scoreStringRepresentations[playerScore];
    };
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}