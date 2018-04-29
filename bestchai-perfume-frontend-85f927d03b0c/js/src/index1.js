var data = { "log": [], "partitions": [], "invariants": [] };
var requestID = 0;

function formIsFilledOut() {
    return ($('#logtext').val().trim().length > 0) && ($('#argsfield').val().trim().length > 0);
}

function openParsingDialog() {
    $("#parsing-dialog").dialog({ modal: true, close: function(event) { if(event.originalEvent) { requestID++; }} });
    $("#parsing-progressbar").progressbar({ value: false });
}


function fetchModel(alg) {
    console.log(alg);
    if(alg === 'perfume') fetchModel_perfume();
    else if(alg === 'synoptic') fetchModel_Synoptic();
    else if (alg === 'ktail') fetchModel_KTail();
}

function fetchModel_KTail() {
    if(formIsFilledOut()) {
        openParsingDialog();
        var parameters =  { logfile: $("#logtext").val(), args: $("#argsfield").val(), requestID: requestID };
        $.ajax({
            type:"POST",  
            url:"http://localhost/json1-ktail.php", 
            data:parameters
        }).done(function(model) {
            console.log(parameters);
            console.log("kTail");
            if(requestID == model.responseID) {
                requestID++; 
                data = model; 
                revealkTailModel();
            }
        }).error(function(model) {
            alert("An error occured. Please try again later."); 
            alert(model.responseText);});
        return parameters;
    }
    else {
        alert("You must enter both a log and regular expressions before Perfume can infer a model.");
    }
};

function fetchModel_perfume() {
    if(formIsFilledOut()) {
        openParsingDialog();
        var parameters =  { logfile: $("#logtext").val(), args: $("#argsfield").val(), requestID: requestID };
        $.ajax({
            type:"POST", 
            url:"http://localhost/json1-perfume.php", 
            data:parameters
        }).done(function(model) {
            console.log(parameters);
            console.log("perfume");
            if(requestID == model.responseID) {
                requestID++; 
                data = model; 
                revealModel();
            }
        }).error(function(model) {
            alert("An error occured. Please try again later."); 
            alert(model.responseText);});
        return parameters;
    }
    else {
        alert("You must enter both a log and regular expressions before Perfume can infer a model.");
    }
};

function fetchModel_Synoptic() {
    if(formIsFilledOut()) {
        openParsingDialog();
        var parameters =  { logfile: $("#logtext").val(), args: $("#argsfield").val(), requestID: requestID };
        $.ajax({
            type:"POST",  
            url:"http://localhost/json1-synoptic.php", 
            data:parameters
        }).done(function(model) {
            console.log(parameters);
            console.log("synoptic");
            if(requestID == model.responseID) {
                requestID++; 
                data = model; 
                revealModel();
            }
        }).error(function(model) {
            alert("An error occured. Please try again later."); 
            alert(model.responseText);});
        return parameters;
    }
    else {
        alert("You must enter both a log and regular expressions before Perfume can infer a model.");
    }
};

// function revealModel_both(data1, data2) {
//     $("#parsing-dialog").dialog("close");
//     unhighlight(); // highlightInput.js
//     clearModel(); // fsa2.js - added to fix dagre-d3 failure, issue 104
//     drawModel(data1); // fsa2.js
//     drawModelLegend();
//     drawInvariants(data1); // invariants.js
//     handleExpand(-1);

//     unhighlight(); // highlightInput.js
//     //clearModel(); // fsa2.js - added to fix dagre-d3 failure, issue 104
//     drawModel(data2); // fsa2.js
//     drawModelLegend();
//     drawInvariants(data2); // invariants.js
//     handleExpand(-1);
// }


function revealModel() {
    $("#parsing-dialog").dialog("close");
    unhighlight(); // highlightInput.js
    clearModel(); // fsa2.js - added to fix dagre-d3 failure, issue 104
    drawModel(data); // fsa2.js
    drawModelLegend();
    drawInvariants(data); // invariants.js
    handleExpand(-1);
}

function revealkTailModel(){
    $("#parsing-dialog").dialog("close");
    //clearModel(); 
    drawDotModel(data);
    handleExpand(-1);

}

function clearModelLegend() {
    var c = document.getElementById("legend");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
}

function drawSymbol(ctx, startx, starty, color, string) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startx, starty - 5);
    ctx.lineTo(startx + 50, starty - 5);
    ctx.stroke();
    ctx.fillText(string, startx + 60, starty);
    ctx.closePath();
}

function drawModelLegend() {
    clearModelLegend();
    var c = document.getElementById("legend");
    var ctx = c.getContext("2d");
    drawSymbol(ctx, 10, 50, "#FF0000", "Longest path");
    if (c.width > 250) {
        drawSymbol(ctx, 140, 50, "#0000FF", "Shortest path");
        if(c.width > 460) {
            drawSymbol(ctx, 290, 50, "#FF00FF", "Longest and shortest path");
        }
        else {
            drawSymbol(ctx, 10, 75, "#FF00FF", "Longest and shortest path");
        }
    }
    else {
        drawSymbol(ctx, 10, 75, "#0000FF", "Shortest path");
        drawSymbol(ctx, 10, 100, "#FF00FF", "Longest and shortest path");
    }
};

function clearForm()  {
    $("#logtext").val('');
    $("#argsfield").val('');
}


function clearData() {
    clearForm();
    clearDataExceptForm();
}

function clearDataExceptForm() {
    unhighlight(); // highlightInput.js
    data = { "log": [], "partitions": [], "invariants": [] };
    clearModel();
    clearModelLegend();
    drawInvariants(data);
}

// Round a number in string format
function roundString(numString) {
    // If is no decimal, we are already rounded correctly
    if (numString.indexOf('.') === -1) {
        return numString;
    }

    var removeAmount = 0;
    for (var i = numString.length-1 ; i >= 0; i--) {
        if (numString[i] === '0') {
            removeAmount++;
        }
        else if (numString[i] === '.') {
            removeAmount++;
            break;
        }
        else {
            break;
        }
    }
    return numString.substring(0, numString.length - removeAmount);
}
