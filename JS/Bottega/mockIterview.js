// Standing at an airport each ticket has a

// grab all tupels that start in slc
// 

var tickets = [['slc', 'fla'], ['slc', 'grr'], ['fla', 'nyc'], ['nyc', 'grr'], ['grr', 'was']]

function kHops(start, end, k) {
    temp = []
    if(k == 0) {
        return start == end
    }
    for(var i = 0; i < tickets.length; i++) {
        if(tickets[i][0] == start) temp.push(tickets[i])
    } 
    for(var i = 0; i < temp.length; i++) {
        var result = kHops(temp[i][1], end, k - 1)
        if(result) return true
    }
    return false
}

console.log(kHops('slc', 'fla', 1));

// do this with a dictionary