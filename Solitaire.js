/**
 * 
 * 
 * 
 */


import VARS from './utils/Vars.js';
import Deal from './cards/Deal.js';
import Deck from './cards/Deck.js';
import MouseDown from './action/MouseDown.js';
import MouseUp from './action/MouseUp.js';
import Animate from './action/Animate.js';
import ResizeHandler from './utils/ResizeHandler.js';
const Solitaire = {
    canvas: undefined,
    init: function () {

        VARS.init();
        this.canvas = VARS.canvas;

        Deck.build();
        Deal.start();
        this.addListeners();

        Animate.start();

    },
    addListeners: function () {
        this.mouseMoveHandler();
        this.mouseDownHandler();
        this.mouseUpHandler();
        this.mouseOutHandler();
        this.resizeHandler();
    },
    mouseMoveHandler: function () {
        this.canvas.addEventListener('mousemove', e => {
            let leftOffset = (window.innerWidth - VARS.canvas.width) / 2;
            VARS.mousePoint = { x: e.pageX - leftOffset, y: e.pageY };
        })
    },
    mouseDownHandler: function () {
        this.canvas.addEventListener('mousedown', () => {
            MouseDown.setActiveCardAndPopulateDragArray();
        })
    },
    mouseUpHandler: function () {
        this.canvas.addEventListener('mouseup', e => {
            if (VARS.activeCard) MouseUp.activeCardExists();
        });
    },
    mouseOutHandler: function () {
        this.canvas.addEventListener('mouseout', e => {
            if (VARS.activeCard) MouseUp.activeCardExists();
        });
    },
    resizeHandler: function () {
        window.addEventListener('resize', e => {
            ResizeHandler.resize();
        })
    }
}
export default Solitaire