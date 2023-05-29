import Model from '../model/Model.class';
import Direction from '../common/enums/Direction.enum';

/** Controller object for the game. */
export default class Controller implements IController {
  /**
   * Attaches an event handler to the document. The event handler catches
   * KeyboardEvents and updates the model accordingly.
   *
   * @param model Game model
   */
  public constructor(private model: Model) {
    document.onkeydown = (e) => this.eventHandler(e);
  }

  /**
   * Event handler for handling keyboard events. Updates the model.
   *
   * @param e KeyboardEvent
   */
  private eventHandler(e: KeyboardEvent): void {
    if (e.code === 'ArrowUp') {
      this.model.setDirection(Direction.Up);
    } else if (e.code === 'ArrowLeft') {
      this.model.setDirection(Direction.Left);
    } else if (e.code === 'ArrowDown') {
      this.model.setDirection(Direction.Down);
    } else if (e.code === 'ArrowRight') {
      this.model.setDirection(Direction.Right);
    } else if (e.code === 'Space') {
      const status = this.model.getStatus();
      if (status === Model.Status.Over || status === Model.Status.Won) {
        this.model.reset();
      } else {
        this.model.togglePause();
      }
    }
  }
}
