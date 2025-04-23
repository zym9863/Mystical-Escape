/**
 * Story data structure for the text adventure game
 * Each scene has:
 * - id: unique identifier
 * - text: narrative text to display
 * - choices: array of possible choices, each with:
 *   - text: the choice text
 *   - nextScene: the id of the next scene
 *   - condition: (optional) function that returns true if this choice should be available
 *   - effect: (optional) function that modifies game state when this choice is selected
 */

export const storyData = {
  // Starting scene
  start: {
    id: 'start',
    text: 'You wake up in a dimly lit room. Your head hurts and you can\'t remember how you got here. As your eyes adjust to the darkness, you notice a door to the north and a window to the east.',
    choices: [
      {
        text: 'Examine the room more carefully',
        nextScene: 'examine_room'
      },
      {
        text: 'Try the door to the north',
        nextScene: 'door_north'
      },
      {
        text: 'Look out the window to the east',
        nextScene: 'window_east'
      }
    ]
  },
  
  // Examine room scene
  examine_room: {
    id: 'examine_room',
    text: 'The room is small and sparsely furnished. There\'s a bed where you woke up, a small table with a drawer, and a chair in the corner. The walls are made of stone, and there\'s a musty smell in the air.',
    choices: [
      {
        text: 'Open the drawer',
        nextScene: 'open_drawer'
      },
      {
        text: 'Try the door to the north',
        nextScene: 'door_north'
      },
      {
        text: 'Look out the window to the east',
        nextScene: 'window_east'
      }
    ]
  },
  
  // Open drawer scene
  open_drawer: {
    id: 'open_drawer',
    text: 'You slide open the drawer and find a small brass key and a folded note. The note reads: "The key opens more than just doors."',
    choices: [
      {
        text: 'Take the key and note',
        nextScene: 'take_key_note',
        effect: (gameState) => {
          gameState.inventory.push('brass key');
          gameState.inventory.push('mysterious note');
          return gameState;
        }
      },
      {
        text: 'Leave them and try the door',
        nextScene: 'door_north'
      },
      {
        text: 'Leave them and check the window',
        nextScene: 'window_east'
      }
    ]
  },
  
  // Take key and note scene
  take_key_note: {
    id: 'take_key_note',
    text: 'You pocket the brass key and the note. They might be useful later.',
    choices: [
      {
        text: 'Try the door to the north',
        nextScene: 'door_north'
      },
      {
        text: 'Look out the window to the east',
        nextScene: 'window_east'
      }
    ]
  },
  
  // Door north scene
  door_north: {
    id: 'door_north',
    text: 'You approach the door and try the handle. It\'s locked. You notice a small keyhole beneath the handle.',
    choices: [
      {
        text: 'Use the brass key',
        nextScene: 'use_key_door',
        condition: (gameState) => gameState.inventory.includes('brass key'),
        effect: (gameState) => {
          gameState.unlockedDoor = true;
          return gameState;
        }
      },
      {
        text: 'Try to force the door open',
        nextScene: 'force_door'
      },
      {
        text: 'Go back and look around more',
        nextScene: 'examine_room'
      }
    ]
  },
  
  // Use key on door scene
  use_key_door: {
    id: 'use_key_door',
    text: 'You insert the brass key into the lock and turn it. There\'s a satisfying click as the door unlocks. You push it open to reveal a long hallway stretching before you.',
    choices: [
      {
        text: 'Enter the hallway',
        nextScene: 'hallway'
      },
      {
        text: 'Go back and check the window first',
        nextScene: 'window_east'
      }
    ]
  },
  
  // Force door scene
  force_door: {
    id: 'force_door',
    text: 'You push against the door with all your strength, but it doesn\'t budge. It seems too solid to break down.',
    choices: [
      {
        text: 'Look around the room more',
        nextScene: 'examine_room'
      },
      {
        text: 'Check the window instead',
        nextScene: 'window_east'
      }
    ]
  },
  
  // Window east scene
  window_east: {
    id: 'window_east',
    text: 'You approach the window and look outside. You appear to be in a tall tower. Below you is a sheer drop to a forest far below. The window is barred with iron, preventing any escape.',
    choices: [
      {
        text: 'Try to remove the bars',
        nextScene: 'remove_bars'
      },
      {
        text: 'Go back and try the door',
        nextScene: 'door_north'
      },
      {
        text: 'Examine the room more carefully',
        nextScene: 'examine_room'
      }
    ]
  },
  
  // Remove bars scene
  remove_bars: {
    id: 'remove_bars',
    text: 'You tug at the bars, but they\'re firmly embedded in the stone. You won\'t be able to remove them without tools.',
    choices: [
      {
        text: 'Go back and try the door',
        nextScene: 'door_north'
      },
      {
        text: 'Examine the room more carefully',
        nextScene: 'examine_room'
      }
    ]
  },
  
  // Hallway scene
  hallway: {
    id: 'hallway',
    text: 'You step into a long stone hallway lit by flickering torches. The hallway extends to the north, and there are doors on either side. You hear faint sounds coming from behind one of the doors.',
    choices: [
      {
        text: 'Continue north down the hallway',
        nextScene: 'hallway_north'
      },
      {
        text: 'Check the door on the left',
        nextScene: 'door_left'
      },
      {
        text: 'Check the door on the right',
        nextScene: 'door_right'
      }
    ]
  },
  
  // More scenes would be added here to continue the story...
  
  // Example of an ending scene
  hallway_north: {
    id: 'hallway_north',
    text: 'As you walk down the hallway, you see a bright light ahead. It grows brighter as you approach, until it engulfs you completely. You\'ve found the way out!',
    choices: [
      {
        text: 'Restart the adventure',
        nextScene: 'start'
      }
    ]
  },
  
  door_left: {
    id: 'door_left',
    text: 'You open the door on the left to find a small library. Bookshelves line the walls, filled with ancient tomes. A desk in the center has an open book on it.',
    choices: [
      {
        text: 'Examine the open book',
        nextScene: 'examine_book'
      },
      {
        text: 'Browse the bookshelves',
        nextScene: 'browse_shelves'
      },
      {
        text: 'Return to the hallway',
        nextScene: 'hallway'
      }
    ]
  },
  
  door_right: {
    id: 'door_right',
    text: 'The door on the right leads to a small kitchen. There\'s a pot bubbling over a fire, and various ingredients laid out on a table. The smell of herbs fills the air.',
    choices: [
      {
        text: 'Check the pot',
        nextScene: 'check_pot'
      },
      {
        text: 'Look at the ingredients',
        nextScene: 'check_ingredients'
      },
      {
        text: 'Return to the hallway',
        nextScene: 'hallway'
      }
    ]
  }
};

// Default initial game state
export const initialGameState = {
  currentScene: 'start',
  inventory: [],
  unlockedDoor: false,
  visitedScenes: ['start']
};
