# Cross-Platform Design System Showcase

This project was created for Module 4.8 to demonstrate a reusable design system that works across iOS, Android, and the web using Expo and React Native.

The goal was to build components that feel consistent, while still adapting to each platform’s behavior and layout patterns.

---

## Features

- Reusable component library (Button, Input, Card, Modal, NavBar, Avatar)
- Platform-adaptive modal
  - slide-in on mobile
  - overlay on web
- Responsive layout on both web and iOS
- Dark mode toggle using a shared theme hook
- Design system tokens displayed (colors, spacing, radius)
- Documentation screen showcasing components in use
- Bottom navigation with working screen routing

---

## Project Structure

app/
├─ \_layout.tsx
├─ index.tsx (Home)
├─ components.tsx
└─ documentation.tsx

components/
├─ Avatar.tsx
├─ Button.tsx
├─ Card.tsx
├─ Input.tsx
├─ Modal.tsx
└─ NavBar.tsx

design-system/
└─ tokens.js

---

## How to Run

1. Install packages:
   npm install

2. Start the project:
   npx expo start

3. Open:

- **iOS simulator**
- **Web browser** (`w`)
- or scan the QR code

---

## Assignment Requirements Completed

- [x] Minimum 5 components
- [x] Platform-aware modal
- [x] Web + mobile responsive UI
- [x] Dark mode implementation
- [x] Design system documentation screen
- [x] Avatar component included
- [x] Bottom navigation working

---

## Technologies Used

- React Native
- Expo
- expo-router
- TypeScript
- CSS-in-JS (StyleSheet API)

---

## Notes

This project focuses on structure, reusability, and visual consistency—not complex app logic.  
The goal was to show that one design system can support multiple platforms without breaking the native experience.
