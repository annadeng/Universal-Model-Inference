// using the data object, get relevant information

function getTrace(traceID){
    var traces = data.log;
    for(var i=0; i<traces.length; i++) {
        var trace = traces[i];
        if(trace.traceID === traceID) {
            return trace;
        }
    }
    return null;
}

function getEvents(traceID) {
    var trace = getTrace(traceID);
    if(trace !== null){
        return trace.events;
    }
    return null;
}

// returns either a specific event's line number, OR all line numbers for a trace if eventIndex is null
function getLineNumbers(traceID, eventIndex) {
    var lineNumbers = [];
    var events = getEvents(traceID);
    if(events != null) {
        for(var i=0; i<events.length; i++) {
            if(eventIndex === undefined || events[i].eventIndex === eventIndex){
                lineNumbers.push(events[i].logLine);
            }
        }
    }
    return lineNumbers;
}

// pass in array of event objects, where each object has a traceID and a eventIndex
// pass in boolean 'true' to get full execution traces for each event
// example: [ {traceID: 1, eventIndex: 2}, {traceID: 2, eventIndex: 4} ]
function getLineNumbersForArray(events, getFullTraces) {
    var lineNumbers = [];
    for (var i=0; i<events.length; i++) {
        var newLineNumbers;
        if(getFullTraces) {
            newLineNumbers = getLineNumbers(events[i].traceID);
        }
        else {
            newLineNumbers = getLineNumbers(events[i].traceID, events[i].eventIndex);
        }
        lineNumbers.push.apply(lineNumbers, newLineNumbers);
    }
    return lineNumbers;
}