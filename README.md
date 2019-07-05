# Tetris

Tetris is a game where you stack lines of block to form a line in order to obtain a high score.  Blocks are cleared when the stacked block form a horizontal line that takes up the full 10 space.  More points are given when multiple lines are cleared at once.

## Techs used

* HTML
* CSS
* Javascript

## Features

* Start, Replay, Pause
* High Score
* Randomized blocks
* Keyboard inputs - move and rotate

## Timeline

* 7-1 - research and examples 
* 7-2 - outline the world, creating the block, etc
* 7-3 - work on logic like line clearing, collision
* 7-4 - high score, styling, bug fixing, ideally finish around this time
* 7-5 - hosting, readme

## RoadBumps

* GameOver - Much of the issues here stems from cancelanimationFrame not working.  Initial gameover check used the collision method to check for gameover.  A check for the world's top three middle piece being occupied sufficed as a check, however I kept running into issues where the game would keep running even after a gameover.  
* Drawing blocks without using scale and still handling world logic - One of the issue you run into involves rotation of a block.  It's possible to rotate a block outside of the world, which would naturally cause issue.  A clever check to overcome this was to run a check if the block was in collision outside of the bounds of the world, and kind of wiggle in both direction til the collision check came back false, which meant the block was in bounds.
* Figuring out the flow of the game - figuring out the flow of how the application was rather tricky.  Knowing which variable to enable and disable depending on the state was tricky.  Disabling the keybind wasn't possible, but using a variable to track the current state of the game did the same as disabling keybinds when required.  It was often possible to mess the state up by resetting mid-game or during a pause so I ultimately ended up allowing resetting only to occur after a gameover or while in the pause screen. Gameflow is pretty important and it's important to define the flow so you don't end up with bugs.
* Understanding the logic behind rotation, collision, and drop - It was a matter of looking at it until it made sense.


## WireFrame

* rectangle 10 square wide, 20 square height
* box pixel is likely 20 x 20
* about modal, and pause on side
* github, linkedin
