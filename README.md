# Snake

Playable at: https://joomp.github.io/Snake/

A simple Snake game implemented with TypeScript and object oriented approach.

Creating a _Game_ object starts the game. A Game consist from a model, view, and a controller. The _Model_ maintains the state of the game. The _View_ renders the game on a canvas based on the Model. The Controller defines an event handler, that updates the model.

## New arcitecture? (notes for myself)

- Presentation: This component is responsible for rendering the game.

- Controller-View: This component translates user actions captured by the Presentation layer into events that the Controller can understand. In essence, it acts as an adapter between the user interface and the business logic, ensuring that user actions are communicated correctly to the rest of the system.

- Controller: The Controller listens to the events emitted by the Controller-View and executes the corresponding business logic. It interacts with the Model to manipulate data based on these events and updates the Presentation layer to reflect any changes.

- Model: This component represents the business data and rules of your application. It's the source of truth for the game's state and is manipulated by the Controller based on user actions.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles for production

```
npm run build
```

### Lint

```
npm run lint
```
