# Cross-Platform Design System Showcase

A polished cross-platform design system built with Expo, React Native, TypeScript, and Expo Router.

This project showcases reusable UI components, shared design tokens, dark mode support, responsive layouts, and documentation-style pages that work across web and mobile.

---

## Overview

The goal of this project is to demonstrate how a small design system can create consistent interfaces across multiple platforms.

The app includes a home page, component library page, and documentation page. Each screen is built using reusable components and shared styling rules.

---

## Features

- Reusable component library

  - Button
  - Card
  - Input
  - Modal
  - NavBar
  - Avatar
  - Tag

- Cross-platform support

  - Web
  - iOS
  - Android

- Dark mode support using AsyncStorage

- Shared design tokens

  - Colors
  - Spacing
  - Border radius

- Documentation-style component examples

- Floating bottom navigation

- Platform-aware modal behavior

---

## Tech Stack

- React Native
- Expo
- Expo Router
- TypeScript
- AsyncStorage
- StyleSheet API

---

## Project Structure

```txt
app/
├─ _layout.tsx
├─ index.tsx
├─ components.tsx
└─ documentation.tsx

components/
├─ Avatar.tsx
├─ Button.tsx
├─ Card.tsx
├─ Input.tsx
├─ Modal.tsx
├─ NavBar.tsx
└─ Tag.tsx

design-system/
└─ tokens.ts

theme/
└─ useTheme.ts
```

How to Run

Install dependencies:

npm install

Start the project:

npx expo start

Run on web:

w

Run on iOS simulator:

i
