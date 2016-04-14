// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {

  // Select the element with id `sandbox` and append a `div` element to it. Make sure to store the div in a JavaScript varaible
    var div = d3.select('#sandbox').append('div');

  // Create a variable `mySvg` by appending an `svg` element to your newly created `div`
    var svg = div.append('svg');

  // Set both the width and height attributes of your `svg` to 300 
    svg.attr({height: 300, width: 300});

  // Append a `circle` element to your `svg`, setting the properties noted in index.html
    svg.append('circle').attr({
        r: 30,
        cx: 75,
        cy: 30
    }).style({
        opacity: 0.5,
        fill: 'blue'
    });

  // Append a `rect` element to your `svg`, setting the properties noted in index.html
    svg.append('rect').attr({
        x: 70,
        y: 60,
        width: 10,
        height: 250
    }).style({
        opacity: 0.5,
        fill: 'orange'
    });
});
