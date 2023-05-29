import Point from './Point.class';
import Model from './Model.class';
import Direction from '../common/enums/Direction.enum';

/** Object for representing the state of the snake. */
class Snake {
  /** Points that make out the snake */
  private points: Point[] = [];
  private direction: Direction | null = null;
  private model: Model;
  private status = Snake.Status.Ok;

  /**
   * Create a new snake.
   *
   * @param spawn Spawn point of the snake
   * @param length Starting length of the snake
   * @param model Game model
   */
  public constructor(spawn: Point, length: number, model: Model) {
    this.model = model;
    if (length < 2)
      throw Error('Snake is too smol. Minimum snake length is 2.');
    for (let i = 0; i < length; i++) {
      this.points.push({ ...spawn });
    }
  }

  /**
   * Returns the length of the snake
   *
   * @returns Length
   */
  public get length(): number {
    return this.points.length;
  }

  /** Move the snake. Snake is moved to the active direction. */
  public move(): void {
    const newHead = this.movePoint(this.points[0], this.direction);

    const isSelfCollision = this.points
      .slice(0, -1)
      .some((p) => Point.equals(p, newHead));
    const isWallCollision =
      newHead.x < 0 ||
      newHead.x >= this.model.columns ||
      newHead.y < 0 ||
      newHead.y >= this.model.rows;

    if ((isSelfCollision && this.direction !== null) || isWallCollision) {
      this.status = Snake.Status.Dead;
    }

    this.points.unshift(newHead);
    this.points.pop();
  }

  /** Grow the snake. A copy of the last point is appended to the snake. */
  public grow(): void {
    const last = this.points[this.points.length - 1];
    this.points.push({ ...last });
  }

  /**
   * Get the coordinates of the snake head
   *
   * @returns Head
   */
  public get head(): Point {
    return this.points[0];
  }

  /**
   * Add point and direction and return the result.
   *
   * @param point Point
   * @param direction Direction to move the point
   * @returns Result
   */
  private movePoint(point: Point, direction: Direction): Point {
    return Point.add(point, this.directionToPoint(direction));
  }

  /**
   * Returns the snake coordinates
   *
   * @returns Result
   */
  public getPoints(): Point[] {
    return this.points;
  }

  /**
   * Converts direction to a point.
   *
   * @param direction New direction
   * @returns Point
   */
  private directionToPoint(direction: Direction): Point {
    const d: Point = new Point(0, 0);

    if (direction === Direction.Up) d.y = -1;
    else if (direction === Direction.Right) d.x = 1;
    else if (direction === Direction.Down) d.y = 1;
    else if (direction === Direction.Left) d.x = -1;

    return d;
  }

  /**
   * Set the direction of the snake.
   *
   * @param direction Direction
   */
  public setDirection(direction: Direction): void {
    const neck = this.points[1];
    const head = this.points[0];
    const newHead = this.movePoint(head, direction);
    // 180° turn not allowed
    if (!Point.equals(newHead, neck)) {
      this.direction = direction;
    }
  }

  /**
   * Return the status of the snake
   *
   * @returns Status
   */
  public getStatus(): Snake.Status {
    return this.status;
  }
}

namespace Snake {
  /** Represents the status of the snake */
  export enum Status {
    Ok,
    Dead,
  }
}

export default Snake;
