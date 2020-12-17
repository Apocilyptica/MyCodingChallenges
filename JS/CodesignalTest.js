// Your Mission

// As input, you are given a list of scores. Coding Score can be anywhere between 300 and 850. For the purpose of this task, levels are defined in the following way:

// Poor: 300-599
// Fair: 600-699
// Good: 700-749
// Excellent: 750-799
// Elite: 800+
// Calculate how many users are there in each level, then return a list of strings where each string represents a level and the percentage of users who fall within that range, formatted like LevelName: XX.XX%. Percentages should be displayed with two decimal points of precision. Levels should be sorted in decreasing order of those numbers, omitting any levels that have no users. In case of a tie, the higher level should appear first.

// For example, if you had this input...

//   [330, 723, 730, 825]
// ...then you should return the following:

// [
//   'Good: 50.00%',
//   'Elite: 25.00%',
//   'Poor: 25.00%'
// ]
// [execution time limit] 4 seconds (js)

// [input] array.integer scores

// An array of integers in the range [300, 850].

// [output] array.string

// An array of strings formatted like LevelName: XX.XX%.


function levelName(position, name, lowScore, highScore, count, percentage) {
    this.position = position
    this.name = name
    this.lowScore = lowScore
    this.highScore = highScore
    this.count = count
    this.percentage = percentage
}

function codingScoreReportPercent(scores) {
    poor = new levelName(5, 'Poor', 300, 599, 0, 0)
    fair = new levelName(4, 'Fair', 600, 699, 0, 0)
    good = new levelName(3, 'Good', 700, 749, 0, 0)
    excellent = new levelName(2, 'Excellent', 750, 799, 0, 0)
    elite = new levelName(1, 'Elite', 800, 1000, 0, 0)

    levels = [poor, fair, good, excellent, elite]

    levels.forEach((level) => {
        for(var i = 0; i < scores.length; i++) {
            if(scores[i] >= level.lowScore && scores[i] <= level.highScore) level.count++
        } if(level.count > 0) level.percentage = (level.count / scores.length * 100).toFixed(2)
    })
    
    levels.sort(function(a, b) {
        return b.percentage - a.percentage || a.position - b.position
    })

    finalArray =[]

    for(var i = 0; i < levels.length; i++) {
        if(levels[i].count > 0) {
            finalArray.push(levels[i].name + ': ' + levels[i].percentage + '%')
        }
    }

    return finalArray
}

console.log(codingScoreReportPercent([330,723,730,823,951,326,764,821,524,376,467,721,798,801,465,415,675,624,653]));