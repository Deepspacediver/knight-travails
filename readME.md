Knight Travails Project.
One needs to create a Chessboard with a Knight placed on it.
Provided a specific board square, find the shortest path to said square from the knight's position.


Pseudocode:

Board= [
 
7 [0,1,2,3,4,5,6,7],
6 [0,1,2,3,4,5,6,7],
5 [0,1,2,3,4,5,6,7],
4 [0,1,2,3,4,5,6,7],
3 [0,1,2,3,4,5,6,7],
2 [0,1,2,3,4,5,6,7],
1 [0,1,2,3,4,5,6,7],
0 [0,1,2,3,4,5,6,7],

]                      

{ Xindex = row (row as data-set in html)
YIndex = column (column as data-set in html) }
  
  OuterArray = Y      
  Inner Array = X    
  Coordinates = [index of X, index of Y
  
  if (coordinates[0] <0 || coordinates[1] <0 || coordinates [0] > 7 || coordinates[1] > 7) invalid move

move 1 left  = X[index-1] 

  1left 2 up = [X[index-1],   Y[index+2]]
  
  1left 2 down = [X[index-1], Y[index-2]]
  
move 1 down = Y[index-1] 

  1down 2 left = [X[index -2], Y[index-1]]
  
  1down 2 right = [X[index+2], Y[index-1]]
  
move 1 right = X[index+1]

  1right 2 up = [X[index+1], Y[index+2]]
  
  1right 2 down = [X[index+1], Y[index-2]]
  
move 1 up = Y[index+1]

  1up 2 left = [X[index -2], Y[index+1]]
  
  1up 2 right [X[index+2], Y[index+1]]
  



When knight is on a board generate all posibble legal moves 

(recursively generate them as nodes, run Search algorithm for the shortest route to specific Cooridate) breadth search

prevent knight from going overboard(<0 >7)

return first shortest match 


                            Knight is on [1,2](Represent as a node) I want to find shortest path to [5,2]
                        All possible moves from 1,2:
              1left2Up       1left2Down   | 1right2Up 1right2Down  | 1down2Left  1down2Right  | 1up2Left      1up2Right
              0,4           0,0             2,4       2, 0            -1,0return   3,1           -1,3 return    3,3 


    0,4
    -1,6 return -1 return   1,6 1,2   -2,3 return 2,3   -2,5  2,5 =>next iteration
    
    0,0 
      -> next it
    2,4
      -> next it

    2,0
      -> next it
    
    3,1
    2,3 2,-1 return| 4,3 4,-1 return| 1,0 5,0| 1,2 !!(5,2) match!! previous value += match



1.Store adjacency list as a new Map
2.Input knight's first position
3.Generate all possible moves from the first position and store them in 
the key of the0 first position
  -Before generating new moves filter the array for undefined(illegal moves)

  Use BFS with queue:
  Generate key and moves for position
  push position into queue
  Add position as array to visisted
Add position into queue
  In queue 


Rerurn last path =[key, destination]
loop over list backwards
If previous key has path[0]
  push previous key to path
else previous key = previouskey.previous key 
  while i>=0

<!-- <a href="https://www.flaticon.com/free-icons/chess" title="chess icons">Chess icons created by Good Ware - Flaticon</a> 
<a href="https://www.flaticon.com/free-icons/agriculture" title="agriculture icons">Agriculture icons created by Umeicon - Flaticon</a>-->
