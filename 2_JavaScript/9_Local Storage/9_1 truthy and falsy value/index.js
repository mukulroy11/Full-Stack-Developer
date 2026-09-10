const credits = 12 

if (credits) {
    console.log("lets Play")
} else {
    console.log("sorry, no credits")
}

if ("hello") {  //truth value
    console.log("lets Play")
} else {
    console.log("sorry, no credits")
}

if ("") {  //falsy value
    console.log("lets Play")
} else {
    console.log("sorry, no credits")
}

//falsy value are 
// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefine -> how javascript signalize emptiness
// NaN

let currentViewers = null

currentViewers = ["mul", "lOff"]

currentViewers = null // nothing print 

if (currentViewers) {
    //do something notify the live streamers
    console.log("we have Viewers")
}

let currentViewer
console.log(currentViewer) // means no value is assign with currentviewer