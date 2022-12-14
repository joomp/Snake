import Model from './Model';
import View from './View';
import Controller from './Controller';

/** Game object */
export default class Game {
  /**
   * Tick speed for the game. Controls both the update speed and the render
   * speed of the game
   */
  private readonly timeStep = 200; // Milliseconds

  private readonly model: Model;
  private readonly view: View;
  private readonly controller: Controller;

  /**
   * @param container Mount point for the game canvas
   * @param scoreLabel HTML element to write the player score to
   */
  public constructor(container: HTMLElement, scoreLabel: HTMLElement) {
    this.model = new Model();
    this.view = new View(this.model, container, scoreLabel);
    this.controller = new Controller(this.model);
  }

  /**
   * Starts the game loop. On each iteration updates the game model and renders
   * the game view.
   */
  public loop(): void {
    let previousTime = 0.0;
    let delta = 0.0;
    const timeStep = this.timeStep;

    const loop = (time: number) => {
      // Compute the delta-time against the previous time
      const dt = time - previousTime;
      // Accumulate delta time
      delta = delta + dt;
      // Update the previous time
      previousTime = time;

      while (delta > timeStep) {
        // Update game
        this.model.update();
        delta = delta - timeStep;
      }

      this.view.render();

      // Repeat
      window.requestAnimationFrame(loop);
    };

    // Start loop
    window.requestAnimationFrame((time) => {
      previousTime = time;
      window.requestAnimationFrame(loop);
    });
  }
}
