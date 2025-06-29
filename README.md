
#  Guess The Number

A dynamic and colorful number guessing game built with HTML, CSS, and JavaScript.  
This game demonstrates the use of **conditional logic**, **DOM manipulation**, and **basic game progression mechanics**.

---

##  Objective

> "Implement a simple game using conditional statements for game logic."

This project fulfills **Task 1: Develop a basic text-based game** assigned by Cognifyz Technologies.

---

##  Features

-  Guess numbers within a dynamic range based on levels
-  Score, Level, and Streak tracking
-  Levels increase difficulty (and decrease attempts)
-  Animated progress bar and difficulty indicators
-  Celebration using confetti animation
-  Real-time feedback: too high, too low, or correct!

---

##  How It Works

| Level Range | Difficulty      | Max Attempts |
|-------------|------------------|---------------|
| 1 - 3       | Easy            | 9             |
| 4 - 6       | Medium          | 7             |
| 7 - 9       | Hard            | 5             |
| 10+         | Perfectionist   | 3             |

- Each correct guess increases your level.
- If you fail, your level stays but your streak resets.
- As level increases, the guess range widens and attempts reduce.

---

##  Built With

- **HTML5** – for structure
- **CSS3** – for styling and animation
- **JavaScript** – for logic and interactivity
- [`canvas-confetti`](https://www.npmjs.com/package/canvas-confetti) – for celebratory effects

---
## 📸 Preview

![Game Preview]![image](https://github.com/user-attachments/assets/7b70bc6a-e331-409a-9abf-b278ae408714)



##  How to Run Locally

> Option 1: VS Code with Live Server  
> Option 2: Just open `index.html` in your browser

### Using Live Server:

```bash
# Open VS Code in the project folder
# Then click "Go Live" at the bottom
