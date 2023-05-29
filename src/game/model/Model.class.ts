import Point from '../../Point';
import Direction from '../common/enums/Direction.enum';
import Snake from './Snake';

/** Model for representing the state of the snake game. */
class Model implements IModel {
  private snake: Snake;

  /** The size of the game board */
  public readonly rows = 14;
  public readonly columns = 10;

  /** Starting length of the snake */
  private readonly startingLength = 4;
  /** How many points eating the apple yields */
  private readonly appleScoreValue = 100;
  private status: Model.Status;
  private score: number;
  private apple: Point;

  /** Create a model */
  public constructor() {
    this.reset();
  }

  /** Reset the game */
  public reset(): void {
    this.status = Model.Status.Running;
    const spawn: Point = {
      // Middle of the game board
      x: Math.floor((this.columns - 1) / 2),
      y: Math.floor((this.rows - 1) / 2),
    };
    this.score = 0;
    this.snake = new Snake(spawn, this.startingLength, this);
    this.placeApple();
  }

  /** Set apple coordinates. Looks for a random unoccupied cell. */
  private placeApple(): void {
    const snake = this.snake.getPoints();
    // Start search for a free cell from this row
    let row = Math.floor(Math.random() * this.rows);

    while (true) {
      const numOfSnakeCols: number = snake.reduce(
        (acc, curr) => (curr.y === row ? 1 + acc : acc),
        0,
      );
      if (numOfSnakeCols < this.columns) {
        // This row has a free cell for the apple
        break;
      } else {
        // No free cells in this row, check next
        row = (row + 1) % this.rows;
      }
    }

    const snakeCols: number[] = snake
      .filter((p) => p.y === row)
      .map((p) => p.x);
    const initialCol = Math.floor(Math.random() * this.columns);
    for (let i = 0; i < this.columns; i++) {
      const col = (i + initialCol) % this.columns;
      if (!snakeCols.includes(col)) {
        this.apple = { x: col, y: row };
        return;
      }
    }
  }

  /** @returns Apple coordinates */
  public getApple(): Point {
    return this.apple;
  }

  /** @returns Array of snake coordinates occupied by the snake */
  public getSnake(): Point[] {
    return this.snake.getPoints();
  }

  /**
   * Set the direction of the snake.
   *
   * @param direction Direction
   */
  public setDirection(direction: Direction): void {
    if (this.status === Model.Status.Running)
      this.snake.setDirection(direction);
  }

  /** Update the state of the game. Move the snake, etc. */
  public update(): void {
    if (this.status !== Model.Status.Running) {
      return;
    }
    this.snake.move();
    if (this.snake.getStatus() === Snake.Status.Dead) {
      this.status = Model.Status.Over;
    }
    if (Point.equals(this.snake.head, this.apple)) {
      this.snake.grow();
      this.score = this.score + this.appleScoreValue;
      if (this.snake.length === this.rows * this.columns) {
        this.status = Model.Status.Won;
      } else {
        this.placeApple();
      }
    }
  }

  /** Pause and unpause the game. */
  public togglePause(): void {
    if (this.status === Model.Status.Running) {
      this.status = Model.Status.Paused;
    } else if (this.status === Model.Status.Paused) {
      this.status = Model.Status.Running;
    }
  }

  /**
   * Get the current game status
   *
   * @returns Game status
   */
  public getStatus(): Model.Status {
    return this.status;
  }

  /**
   * Get current game score
   *
   * @returns Score
   */
  public getScore(): number {
    return this.score;
  }
}

namespace Model {
  /** Game status */
  export enum Status {
    Paused,
    Running,
    Over,
    Won,
  }
}

export default Model;
