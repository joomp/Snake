import Model from '../model/Model.class';

/** View that renders the game using a 2D canvas. */
export default class Presentation implements IPresentation {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private readonly border = 8; // px
  private readonly margin = 12; //px
  private readonly images = this.getImages();
  private previousStatus: Model.Status | null = null;

  /**
   * Create a view.
   *
   * @param model Game model
   * @param container Mount point for the canvas
   * @param scoreLabel Element to write the score to
   */
  public constructor(
    private model: Model,
    private container: HTMLElement,
    private scoreLabel: HTMLElement,
  ) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    container.appendChild(this.canvas);

    this.canvas.style.borderWidth = `${this.border}px`;
    this.canvas.style.borderStyle = 'solid';
    this.canvas.style.margin = `${this.margin}px`;

    this.resize();
    window.onresize = () => this.resize();
  }

  /**
   * Get the assets used by the game
   *
   * @returns Object containing the images
   */
  private getImages() {
    const gameOver = new Image();
    const paused = new Image();
    const victory = new Image();
    const apple = new Image();
    gameOver.src = require('../../assets/game_over.svg');
    paused.src = require('../../assets/paused.svg');
    victory.src = require('../../assets/victory.svg');
    apple.src = require('../../assets/apple.svg');
    return { gameOver, victory, paused, apple };
  }

  /**
   * Resize the canvas to fit the container. The size is limited by both the
   * container height and container width.
   */
  private resize(): void {
    const aspectRatio = this.model.columns / this.model.rows;
    const mnb = 2 * this.margin + 2 * this.border;

    if (
      this.container.clientHeight <
      this.container.clientWidth / aspectRatio
    ) {
      // Height defines the size
      this.canvas.height = this.container.clientHeight - mnb;
      this.canvas.width = (this.container.clientHeight - mnb) * aspectRatio;
    } else {
      // Width defines the size
      this.canvas.height = (this.container.clientWidth - mnb) / aspectRatio;
      this.canvas.width = this.container.clientWidth - mnb;
    }
  }

  /** Renders overlays for the game */
  private renderOverlay(): void {
    const status = this.model.getStatus();
    if (status === Model.Status.Running) return;

    let img: HTMLImageElement | null = null; // Create new img element
    if (status === Model.Status.Over) img = this.images.gameOver;
    if (status === Model.Status.Won) img = this.images.victory;
    if (status === Model.Status.Paused) img = this.images.paused;

    const size = 0.8; // How much of the screen will be covered
    this.ctx.drawImage(
      img,
      (this.canvas.width * (1 - size)) / 2,
      (this.canvas.height * (1 - size)) / 2,
      this.canvas.width * size,
      this.canvas.height * size,
    );
  }

  /**
   * Gets the cell size of the game. The cell size is defined by the canvas
   * size, and by the number of rows and columns in the game.
   *
   * @returns Size of the cell
   */
  private get cellSize() {
    return this.canvas.width / this.model.columns;
  }

  /** Draws the current state of the model to the canvas. */
  public render(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.renderApple();
    this.renderSnake();
    this.updateScore();
    this.renderOverlay();

    const status = this.model.getStatus();
    if (this.previousStatus != status) {
      // Do these only if the status changed
      this.updateBorderColor();
    }
    this.previousStatus = status;
  }

  /** Draws the snake to the canvas. */
  private renderSnake(): void {
    const snake = this.model.getSnake();
    this.ctx.fillStyle = 'white';
    const size = this.cellSize;

    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = size * 0.8; // Snake width
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    this.ctx.beginPath();
    for (let i = 0; i < snake.length; i++) {
      const { x, y } = snake[i];
      this.ctx.lineTo(x * size + size / 2, y * size + size / 2);
    }
    this.ctx.stroke();
  }

  /** Draws the apple to the canvas. */
  private renderApple(): void {
    const apple = this.model.getApple();
    const size = this.cellSize;

    this.ctx.drawImage(
      this.images.apple,
      Math.floor(apple.x * size),
      Math.floor(apple.y * size),
      Math.ceil(size),
      Math.ceil(size),
    );
  }

  /** Updates the border color of the game according to the game status. */
  private updateBorderColor(): void {
    const status = this.model.getStatus();
    if (status === Model.Status.Running)
      this.canvas.style.borderColor = 'green';
    if (status === Model.Status.Paused) this.canvas.style.borderColor = 'blue';
    if (status === Model.Status.Over) this.canvas.style.borderColor = 'darkred';
    if (status === Model.Status.Won) this.canvas.style.borderColor = 'gold';
  }

  /** Update the score label content according to the game score. */
  private updateScore(): void {
    this.scoreLabel.innerHTML = String(this.model.getScore());
  }
}
