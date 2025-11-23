# Reflection – Cross-Platform Design System Project

This assignment helped me understand how much work goes into keeping a design consistent across different platforms. At first, I assumed that styling for web and mobile would behave the same, but I quickly realized that spacing, scrolling, and positioning can look completely different.

One of the biggest challenges was the modal. On the web, it needed an overlay that sits above everything, but on iOS it needed to behave like a native slide-in modal. Fixing the z-index and pointer events taught me how important platform-specific logic can be.

Another thing I learned was how useful a design system is. Having shared tokens for colors, spacing, and radius made the UI look cleaner and more intentional. Reusing components like Button, Card, and Input also made the code easier to maintain.

The documentation screen was helpful because it forced me to actually see the system in one place. It made it clear how each component responds to light and dark mode, and how consistent everything looked together.

Overall, this project made me more comfortable with Expo, reusable components, and thinking about UI from a cross-platform perspective. I feel more confident about building apps that scale and stay consistent, instead of styling everything one screen at a time.
