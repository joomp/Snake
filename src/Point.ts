interface Point {
  x: number;
  y: number;
}

namespace Point {
  /**
   * Returns true if the points have same coordinates, else returns false.
   *
   * @param point1 Point 1
   * @param point2 Point 2
   * @returns Result
   */
  export const equals = (point1: Point, point2: Point): boolean => {
    return point1.x === point2.x && point1.y == point2.y;
  };

  /**
   * Adds the coordinates of the two points and returns the result
   *
   * @param point1 Point 1
   * @param point2 Point 2
   * @returns Result
   */
  export const add = (point1: Point, point2: Point): Point => {
    return { x: point1.x + point2.x, y: point1.y + point2.y };
  };
}

export default Point;
