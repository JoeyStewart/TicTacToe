## TicTacToe

## Abstract:
This project was built to create a webpage that allows two players to play a game of TicTacToe. Each player's turn is displayed above the board and when a player meets a win condition, the player who won is declared above the playing grid and a win is added to that player's win total. This win total is displayed to the left and right of the playing grid for each player respectively. If a stalement in gameplay occures, the "Draw" message is displayed above the grid. When either condition above is met, a small wait time is initiated while the needed message is displayed, and then the game restarts, allowing another round to be completed with the losing player being the first to place a chip on the board. 

## Installation Instructions:
Fork and clone this repository to your preferred directory
Type cd TicTacToe to move into the root directory
Open the page by typing git open index.html

## Demonstration



## Context:
This was the final project for Module 1 at Turing Software and Design. This was also the last solo project to be completed for this module. We were given seven days to comlete this assignment. I prioritized other class priorities at the beginning of the project period and needed to attend to prior commitments that friday. I completed backbone of the HTML and CSS on Thursday and began the Javascript functions in earnest on Saturday. Working on them main functionality through Saturday to Monday night. With Tuesday being the day I dedicated for bug fixes and code cleanup. I had dedicated an approximate 30 to 35 hours to this project over those seven days. 

## Contributors:
Joey Stewart: https://github.com/JoeyStewart 

## Learning Goals:
My goals were to demonstrate that I coud successfully create an HTML and CSS skeleton that I could build off of for the rest of the project. I also wished to employ a method that I had learned last project, where we used a series of smaller functions to recall in larger functions to more easily create a structure that could be manipulated when needed. 


## Wins + Challenges:
The completion of the HTML and CSS skeleton went more smoothly than I had thought it would. I took lessons from the last project to not overcomplicate the HTML early on, adding the bare minimum of requred assets inorder to not have CSS elements easily overlap when creating the webpage interface. I succeded in this and built up both the HTML and CSS together to create a webpage with fewer issues than previously. One problem in this that I faced was that the left container always had larger font sizes than the right container. Both had all the same inputs. I was never able to know why this occurred, but the HTML and CSS were organized enough to where I could change the font size of both until they were even in size on the webpage. It was an easy workaround but not a sufficient one. 

The JavaScript functions went smoothly. Any trouble I had, never took too long to figure out and I didn't need to reach out to anyone for guidance. Anything that I did not know I found quickly on google, like the setTimeout method to create a delay in the game after a round is completed and before a new one begins. And how to properly invoke it along with the restartGame function that I created. Another useful method I rediscovered was the forEach method to call on all cells. This allowed me to control how all nine cells in the gameplay grid would react depending on how I needed to control them. One example is my bug fix to stop the added win total when a round is over with and then 'clicking' an empty cell to add to that win total. I used the forEach method to remove the cells' event listener within a new function to disable the 'clicks' and then re-added them when the restartGame function initialized. Overall, this was a successful project for me. 