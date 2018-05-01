var states, links, init, term;

function generateStates(data) {
    for (var i = 0; i < data.partitions.length; i++) {
        var partition = data.partitions[i];
        var events = JSON.stringify(partition.events);
        states.push({partition: partition, label:"", shape:"circle", index:i+2, id:events});
    }
}


function link(source, target, label, data) {
    newLink = {source:source, target:target, label:"", data:data}
    if (source.index == init.index || target.index == term.index) {
        label = "";
        var smallest = 0;
        var largest = 0;
    }
    else {
        if (label instanceof Array)  {
            if (label.length === 1)  {
                var smallest = label[0];
                var largest = label[0];
            } else {
                var smallest = _.min(label, function (o) {return o;});
                var largest = _.max(label, function (o) {return o;});
            }
            var smallestStr = prettyPrintNumber(smallest);
            var largestStr = prettyPrintNumber(largest);
            if (smallest == largest)
                label = smallestStr;
            else
                label = "[" + smallestStr + ", " + largestStr + "]";
        } else {
            if (typeof label == "number")
                label = String(label);
        }
    }
    newLink.label = label;
    newLink.weight = smallest;
    newLink.largest = largest;
    return newLink;
}

function prettyPrintNumber (n) {
    n = n.toFixed(3);
    var ns = String(n);
    ns = roundString(ns); // index.js
    return ns;
}

function generateTransitions(data) {
    var labels = [];
    var transitionLabelMatrix = {};
    var linkInformation = [];
    for (i = 0; i < data.partitions.length; i++) {
        var partition = data.partitions[i];
        for (var j = 0; j < partition.events.length; j++) {
            var state = partition.events[j];
            var linkParams = createLink(data, state.traceID, state.eventIndex);
            for (var k = 0; k < linkParams.length; k++) {
                var linkIndex = findLinkInLinkInformation(linkInformation, linkParams[k][0], linkParams[k][1]);
                // we are creating a new transition
                if(linkIndex === -1) {
                    linkInformation.push(linkParams[k]);
                }
                // we are adding to an existing transition
                else {
                    if (typeof linkInformation[linkIndex][2] == "object") {
                        for (var l = 0; l < linkParams[k][2].length; l++) {
                            linkInformation[linkIndex][2].push(linkParams[k][2][l]); // resources
                            linkInformation[linkIndex][3].push(linkParams[k][3][l]); // event info
                        }
                    }
                }
            }
        }
    }
    //Create links
    for (var i = 0; i < linkInformation.length; i++) {
        links.push(link(linkInformation[i][0], linkInformation[i][1], linkInformation[i][2], linkInformation[i][3]));
    }
}

function findLinkInLinkInformation(linkInformation, start, end) {
    for (var i = 0; i < linkInformation.length; i++) {
        var link = linkInformation[i];
            if(start.index == link[0].index && link[1].index == end.index)
                return i;
    }
    return -1;
}

/*
 *  resourceDelta is either:
 *      0 for initial or terminal links
 *      an array with only the delta between state1 and state2's resources
 *
 *  id is an array consisting of one object with the following attributes:
 *      traceID
 *      eventIndex
 *  it is used to highlight lines after an edge has been clicked
 */
function buildLink(state1, state2, resourceDelta, id) {
    var link = [];
    link.push(state1);
    link.push(state2);
    link.push(resourceDelta);
    link.push(id);
    return link
}

// add the link before the event
function createLink(data, traceID, eventIndex) {
    var ret = [];
    var trace = data.log[traceID].events;
    var currentState = findState(traceID, trace[eventIndex]);
    var id = [{traceID:traceID, eventIndex:eventIndex}];

    // if initial event, add the initial link
    if (eventIndex == 0) {
        ret.push(buildLink(init, currentState, 0, id));
    }
    else {
        var previousState = findState(traceID, trace[eventIndex-1]);
        var resourceDelta = [(trace[eventIndex].timestamp - trace[eventIndex-1].timestamp)];
        ret.push(buildLink(previousState, currentState, resourceDelta, id));
    }
    // if last event, add the terminal link
    if (eventIndex == trace.length - 1) {
        ret.push(buildLink(currentState, term, 0, id));
    }

    return ret;
}

function findState(traceid, eventData) {
    for (var i = 0; i < states.length; i++) {
        if(isMatchingState(states[i].partition, traceid, eventData))
            return states[i];
    }
    return null;
}

function isMatchingState(state, traceid, eventData) {
    for (var i = 0; i < state.events.length; i++) {
         if (state.eventType == eventData.eventType) {
            if (state.events[i].traceID == traceid) {
                if (state.events[i].eventIndex == eventData.eventIndex) {
                    return true;
                }
            }
        }
    }
    return false;
}

function searchForShortestAndLongestPath(target) {
    var max = 0;
    var min = 99999999999999999;
    var frontier = [];
    var initFrontier = _.filter(links, function(link) {return link.source.index == init.index;});
    var maxPath;
    var minPath;
    for (var i = 0; i < initFrontier.length; i++) {
        frontier.push({path: [], link: initFrontier[i], weight : initFrontier[i].weight, largest : initFrontier[i].largest});
    }
    while(frontier.length > 0) {
        var curr = frontier.shift();
        var curLink = curr.link;
        var weight = curr.weight;
        var largest = curr.largest;
        var pathTo = _.clone(curr.path);
        if (curLink.target.index == target) {
            if (largest > max) {
                max = largest;
                maxPath = _.clone(pathTo);
                maxPath.push(links.indexOf(curLink));
            }
            if (weight < min) {
                min = weight;
                minPath = _.clone(pathTo);
                minPath.push(links.indexOf(curLink));
            }
        }
        else {
            var nextStates = _.filter(links, function(link) {return link.source.index == curLink.target.index;});
            pathTo.push(links.indexOf(curLink));
            for (i = 0; i < nextStates.length; i++) {
                // make sure that we dont go in an infinite loop!
                var isPointingToAPrevPath = (pathTo.indexOf(links.indexOf(nextStates[i])) !== -1);
                if (!isPointingToAPrevPath) {
                    frontier.push({path: pathTo, link: nextStates[i], weight : weight + nextStates[i].weight, largest : largest + nextStates[i].largest});
                }
            }
        }
    }
    return { min:min, max:max, minpath:minPath, maxpath:maxPath };
}

// returns events from array1 that precede events in array2
function findPrecedingEvents(array1, array2) {
    return array1.filter(function(n) {
        for(var i=0; i<array2.length; i++) {
            if(n.eventIndex + 1 === array2[i].eventIndex && n.traceID === array2[i].traceID) {
                return true;
            }
        }
        return false;
    });
}

function renderGraph(g) {
    var svg = d3.select("svg"),
        inner = svg.select("g");
    var zoom = d3.behavior.zoom().on("zoom", function() {
        inner.attr("transform", "translate(" + d3.event.translate + ")" +
                                    "scale(" + d3.event.scale + ")");
    });
    svg.call(zoom);
    var render = new dagreD3.render();
    console.log(g);
    console.log(inner);
    render(inner, g);

    zoom.translate([75, 75])
        .event(svg);
}

var lastClicked;
var lastClickedLabel;
function highlightModel(clicked, clickedLabel) {
    // reset old ones
    if(lastClicked) {
         $(lastClicked).css('opacity', '1.0');
         if(lastClickedLabel) {
            $(lastClickedLabel).css('opacity', '1.0');
         }
    }

    // "highlight" new ones
    $(clicked).css('opacity', '0.5');
    if(clickedLabel) {
        $(clickedLabel).css('opacity', '0.5');
    }

    // save last ones for next iteration
    lastClicked = clicked;
    lastClickedLabel = clickedLabel;
}
function searchType(states,id){
    for (var i = 0; i < states.length; i++) {
        if(states[i]['id'] = id){
            return states[i]['label'];
        }
    }
}

function drawDotModel(data){
    //console.log(data);
    states = data.nodes;
    links = data.links;
    var g = new dagreD3.graphlib.Graph({multigraph:true}).setGraph({});
    for (var i = 0; i < states.length; i++) {
        state = {label: states[i]['label'], shape:"circle"};
        g.setNode(states[i]['id'], state);
    }
    for (i = 0; i < links.length; i++) {
        var type = searchType(states, links[i]['source']);

        var newLabel = (type == "INITIAL"
                        ? ""
                        : searchType(links[i]['source']) + '/' + i);
        var labelShadow = "text-shadow: 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff";
       
        g.setEdge(links[i]['source'], links[i]['target'], {label:newLabel, labelStyle:labelShadow, arrowhead: "vee"});

    }

    
    renderGraph(g);
    
  
}

function drawModel(data) {
    var g = new dagreD3.graphlib.Graph({multigraph:true}).setGraph({});

    states = [];
    links = [];
    init = {partition: {eventType:"INITIAL",events:[]}, shape:"ellipse", label:"INITIAL", index:0, nodeclass:"node-initterm"};
    term = {partition: {eventType:"TERMINAL",events:[]}, shape:"ellipse", label:"TERMINAL", index:1, nodeclass:"node-initterm"};
    states.push(init);
    states.push(term);
    generateStates(data);
    generateTransitions(data);
    var pathAnnotations = searchForShortestAndLongestPath(term.index);
    for (var i = 0; i < states.length; i++) {
        g.setNode(i.toString(), states[i]);
    }
    for (i = 0; i < links.length; i++) {
        // Set edge label (skipping INITIAL) and formatting
        var type = links[i].source.partition.eventType;
        var newLabel = (type == "INITIAL"
                        ? ""
                        : links[i].source.partition.eventType + " " + links[i].label + '/' + i);
        var labelShadow = "text-shadow: 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff";
        
        var events = [];
        if(links[i].source.id && links[i].target.id) {
                events = findPrecedingEvents(JSON.parse(links[i].source.id), JSON.parse(links[i].target.id));
        }
        else if(links[i].source.id && links[i].target.id === undefined) { //bottom of model
                events = JSON.parse(links[i].source.id);
        }
        var metadata = JSON.stringify(events) + '/edge/' + i;
        
        if (pathAnnotations.maxpath && pathAnnotations.minpath && pathAnnotations.maxpath.indexOf(i) !== -1 && pathAnnotations.minpath.indexOf(i) !== -1) {
            g.setEdge(links[i].source.index.toString(), links[i].target.index.toString(), {label:newLabel, labelStyle:labelShadow, id:metadata, style:'stroke:fuchsia', arrowhead: "vee"});
        }
        else if (pathAnnotations.maxpath && pathAnnotations.maxpath.indexOf(i) !== -1) {
            g.setEdge(links[i].source.index.toString(), links[i].target.index.toString(), {label:newLabel, labelStyle:labelShadow, id:metadata, style:'stroke:red', arrowhead: "vee"});
        }
        else if (pathAnnotations.minpath && pathAnnotations.minpath.indexOf(i) !== -1) {
            g.setEdge(links[i].source.index.toString(), links[i].target.index.toString(), {label:newLabel, labelStyle:labelShadow, id:metadata, style:'stroke:blue', arrowhead: "vee"});
        }
        else {
            g.setEdge(links[i].source.index.toString(), links[i].target.index.toString(), {label:newLabel, labelStyle:labelShadow, id:metadata, arrowhead: "vee"});
        }
    }

    renderGraph(g);

    // edges and nodes
    $('g.edgePath, g.node').click(function(e) {
        var events = [];
        if(this.id) {
            var metadata = this.id.split('/');
            if(metadata[0] !== 'undefined') {
                events = $.parseJSON(metadata[0]);

                if(events.length === 0) { // do not highlight initial edges
                    highlightModel();
                    unhighlight(); // highlightInput.js
                    return;
                }

                var label = $("[id$='label/" + metadata[2] + "']");
                highlightModel(this, label); // highlight this and the label on the model
                highlightEvents(events); // highlightInput.js
            }
        } else { // do not highlight initial or terminal nodes
            highlightModel();
            unhighlight(); // highlightInput.js
        }
        e.stopPropagation();
    });

    // edge labels
    $('g.edgeLabel > g > text > tspan').text(function() {
        var labelText = $(this).text().split('/');

        // set the id so edges and nodes can find it
        if(labelText.length > 1 && labelText[1] !== '') {
            $(this).attr('id', 'label/' + labelText[1]);
        }

        $(this).click(function(e) {
            var events = [];
            if(labelText.length > 1 && labelText[1] !== '') {
                // highlight the text
                var edge = $("[id$='edge/" + labelText[1] + "']");
                if(edge.attr('id')) {
                    var metadata = edge.attr('id').split('/');
                    if(metadata[0] !== 'undefined') {
                        events = $.parseJSON(metadata[0]);
                        highlightModel(edge, this); // highlight this and the edge on the model
                        highlightEvents(events); // highlightInput.js
                    }
                }
            }
            e.stopPropagation();
        });
        return labelText[0];
    });

    // canvas, but not the labels, edges, or nodes
    $('#modelCanvas').not('tspan, .path, circle').click(function(e) {
        highlightModel();
        highlightEvents([]); // highlightInput.js
    });
}

function clearModel() {
    var g = new dagreD3.graphlib.Graph({multigraph:true}).setGraph({});
    renderGraph(g);
}
