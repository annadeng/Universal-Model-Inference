// kwicks multi-page view

var $container;

function handleExpand(selectedIndex) {
    var currentIndex = $container.kwicks('expanded');
    // revert back to viewing all
    if(selectedIndex === currentIndex) {
        $container.kwicks('expand', -1);
    }
    // view selected one
    else {
        $container.kwicks('expand', selectedIndex);
    }
}

$(function() {
    // upon initialization
    $container = $('.kwicks').kwicks({
        maxSize : '95%',
        spacing : 5
    });
    handleExpand(0);

    // when finished expanding, fix things from being cutoff
    $container.on('expand-complete.kwicks', function(e, data) {
        //highlighted text needs help resizing
        rehighlight(); // highlightInput.js

        //legend needs help resizing
        $('#legend').attr('width', function() {
            var parentWidth =  $(this).parent().width();
            return parentWidth;
        });
        drawModelLegend(); // index.js
    });

    // whenever a main button is clicked
    $('#expand-controls a').click(function(e) {
        e.preventDefault();
        var selectedIndex = $(this).data('index');
        handleExpand(selectedIndex);
    });
});
