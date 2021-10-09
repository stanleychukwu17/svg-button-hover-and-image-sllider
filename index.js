$(document).ready(function() {
    console.log('do your thing make we see')
    $('.coverIn').on('mouseover', function () {
        $('#goOut')[0].beginElement();
    })
    $('.coverIn').on('mouseout', function () {
        console.log('e don comot')
        $('#goIn')[0].beginElement();
    })
})

