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
    var game = new GameFactory(this.m_score1, this.m_score2);

    return game.getScore(this.m_score1, this.m_score2);
};

var ScoreRepo = function () {
    var scoreStringRepresentations = ["Love", "Fifteen", "Thirty", "Forty"];

    this.getStringDisplayFor = function (score) {
        return scoreStringRepresentations[score];
    };
}

var GameFactory = function (score1, score2) {
    var minimumPointsReached = function (score1, score2) {
        return score1 >= 4 || score2 >= 4;
    };

    if (score1 === score2) {
        return new EvenGame();
    } else if (minimumPointsReached(score1, score2)) {
        return new AdvatageOrWinGame();
    } else {
        return new GameInProgress();
    }
}

var EvenGame = function () {
    this.getScore = function (score) {
        if (score > 2) {
            return "Deuce";
        } else {
            return new ScoreRepo().getStringDisplayFor(score) + "-All";
        }
    };
}

var AdvatageOrWinGame = function () {
    var minimumPointsDiffToWinReached = function (pointDifference) {
        return pointDifference >= 2;
    }

    this.getScore = function (score1, score2) {
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
        score += new ScoreRepo().getStringDisplayFor(score1);
        score += "-";
        score += new ScoreRepo().getStringDisplayFor(score2);
        return score;
    }
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}