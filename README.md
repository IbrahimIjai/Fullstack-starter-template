# Turborepo Fullstack Starter Template

![License](https://img.shields.io/github/license/IbrahimIjai/Fullstack-starter-template)
![GitHub stars](https://img.shields.io/github/stars/IbrahimIjai/Fullstack-starter-template?style=social)

A modern, fully-featured starter template for building full-stack applications with React, React Native, Node.js, and more, all powered by Turborepo for efficient monorepo management.

## Features

- 📱 **Cross-platform**: Web (Next.js) + Mobile (React Native) + Backend (Express)
- 🎨 **UI Components**: Shadcn UI components for web, customizable UI package for mobile
- 🔄 **Code Sharing**: Share types, hooks, and business logic across platforms
- 🛠️ **Type Safety**: End-to-end TypeScript
- 📦 **Monorepo Setup**: Optimized with Turborepo and pNPM
- 🚀 **Ready-to-use workflows**: Production-ready setup

## Stack

- **Package Manager**: pNPM
- **Build System**: Turborepo
- **Web**: Next.js with Tailwind CSS
- **Mobile**: React Native
- **Backend**: Express.js
- **UI**: Shadcn UI components
- **Database**: Shared database package

## Getting Started

### Prerequisites

- Node.js 22 or later
- pNPM 9 or later

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/Fullstack-starter-template.git
cd Fullstack-starter-template

# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

### Project Structure

```
├── apps/
│   ├── web/               # Next.js web application
│   ├── mobile/            # React Native application
│   └── server/            # Express backend
├── packages/
│   ├── ui/                # Shared UI components
│   ├── database/          # Database models and utilities
│   ├── eslint-config/     # Shared ESLint configuration
│   └── typescript-config/ # Shared TypeScript configuration
```

## Development

### Running Apps

```bash
# Run all apps and packages
pnpm dev

# Run specific app
pnpm --filter web dev
pnpm --filter mobile dev
pnpm --filter server dev
```

### Building

```bash
# Build all apps and packages
pnpm build

# Build specific app
pnpm --filter web build
```

## Roadmap & TODOs

- [ ] **Authentication**: Implement PassportJS authentication for both web and mobile apps
- [ ] **Mobile UI Package**: Create unified UI component library for React Native
- [ ] **Hooks Package**: Add shared React hooks library
- [ ] **State Management**: Implement shared state management solution

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Turborepo](https://turbo.build/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Next.js](https://nextjs.org/)
- [React Native](https://reactnative.dev/)