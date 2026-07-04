# ASTRA Architecture

## Vision

ASTRA is a local-first AI operating system companion.

It is composed of independent services communicating through events.

The AI model is only one service among many.

---

## Layers

UI
↓

Event Bus
↓

Core Services

↓

Plugins

---

## Core Services

- Planner
- Memory
- Voice
- Vision
- Tool Manager
- Plugin Manager
- Configuration
- Logging

---

## Frontend

Electron

React

TypeScript

Tailwind

Framer Motion

---

## Backend

Python

FastAPI

WebSockets

SQLite

---

## Communication

JSON Events over WebSocket.

Example

{
    "event": "SYSTEM_READY"
}

{
    "event": "OPEN_APPLICATION",
    "application": "firefox"
}

{
    "event": "APPLICATION_OPENED"
}

---

## Design Goals

- Modular
- Local First
- Extensible
- Event Driven
- Cross Platform
