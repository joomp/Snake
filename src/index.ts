import './style.css';
import Game from './Game';

const container = document.getElementById('main');
const scoreLabel = document.getElementById('score');

const game = new Game(container, scoreLabel);
game.loop();
