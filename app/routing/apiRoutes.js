var friends = require("../data/friends")


module.exports = function (app) {

    app.get("/api/survey", function (req, res) {
        res.json(friends);
    });

    app.post("/api/survey", function (req, res) {
        var userScore = req.body.scores;
        var scoresArray = [];

        //loop through friends array
        for (var i = 0; i < friends.length; i++) {
            var scoreDiff = 0;
            console.log(friends[i])
            //loop through scores array with friend object
            for (var j = 0; j < friends[i].scores.length; j++) {
                console.log(friends[i].scores[j])
                console.log(userScore[j])
                scoreDiff += Math.abs(parseInt(userScore[j]) - parseInt(friends[i].scores[j]))
            }
            scoresArray.push(scoreDiff);
        }
        console.log(scoresArray);
     
        var lowestNumber = (Math.min(...scoresArray));
        var index = scoresArray.indexOf(lowestNumber)
        console.log(lowestNumber);
        console.log(index);

        res.json(friends[index]);
       
        // console.log(req.body);
        friends.push(req.body);
        // console.log(friends)
    });
};
