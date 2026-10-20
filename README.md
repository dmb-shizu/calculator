# Calculator

A basic calculator built with HTML, CSS, and JavaScript for The Odin Project.

**Live demo:** [https://dmb-shizu.github.io/calculator/](https://dmb-shizu.github.io/calculator/)

## Features

- Add, subtract, multiply, and divide
- Chained calculations (`12 + 7 - 1 =` gives `18`)
- Continue from a result by pressing another operator
- Clear button that resets everything
- Long decimals are rounded for display
- A snarky message when you divide by zero
- Pressing `=` with incomplete input does nothing

## What I learned

- Handling clicks on many buttons with `forEach` and `addEventListener`
- Using a flag (`resultShown`) to track when a result is on the display
- Chaining calculations: evaluating the first pair when a second operator is clicked (this was the hardest part)
- Keeping valid operators in an array and checking them with `includes()`
- Using `typeof` to tell an error message apart from a number

## Built with

HTML, CSS, JavaScript