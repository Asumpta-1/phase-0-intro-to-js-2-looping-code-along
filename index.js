
    function writeCards(nameOfFriends,event="birthday") {
    let messages = []
    for(let i = 0; i<nameOfFriends.length;i++) {
     messages.push(`Thank you, ${nameOfFriends[i]}, for the wonderful ${event} gift!`)
    }
    return messages 
    }

writeCards(["Charlie", "Samip", "Ali"], "birthday") 

function countDown(value) {
while(value>=0) {
    console.log(value)
    value=value-1
}
}