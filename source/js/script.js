'use strict';

(function () {
    let $roomWidth;
    let $roomLength;
    let $roomHeight;
    const $canvasWidth = parseInt(($('canvas')[0].attributes.width.value), 10);
    const $canvasHeight = parseInt(($('canvas')[0].attributes.height.value), 10);
    const $startPointX = $canvasWidth * 0.1;
    const $startPointY = $canvasHeight * 0.1;
    let $boardHeight = 0.193;
    let $boardWidth = 1.380;
    let $transferX = 0;
    let $transferY = 0;

    //Считаем площадь пола и площадь стен
    let countFloorArea = function (w, l) {
        return (w * l);
    };
    let countWallArea = function (w, l, h) {
        return ((w + l) * 2) * h;
    };


    $('.parameters').change(function () {
        $roomWidth = parseInt($('#room_width').val(), 10);
        $roomLength = parseInt($('#room_length').val(), 10);
        $roomHeight = parseInt($('#room_height').val(), 10);

        $transferX = ($canvasWidth - ($canvasWidth * 0.2)) / $roomLength;
        $transferY = ($canvasHeight - ($canvasHeight * 0.2)) / $roomWidth;



        $('canvas').clearCanvas();
        console.log($startPointX);
        console.log($startPointY);
        $('canvas').drawRect({
            fillStyle: '#000',
            strokeWidth: 1,
            strokeStyle: 'red',
            x: $startPointX, y: $startPointY,
            fromCenter: false,
            width: $boardWidth * $transferX,
            height: $boardHeight * $transferY
        });
        console.log($startPointX);
        console.log($startPointY);
        $('.room_area').text(countFloorArea($roomWidth, $roomLength));
        $('.wall_area').text(countWallArea($roomWidth, $roomLength, $roomHeight));
    });


})();
