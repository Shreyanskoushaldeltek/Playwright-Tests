# Playwright Framework with TypeScript

A comprehensive Playwright testing framework with TypeScript, Docker integration, and GitHub Actions CI/CD pipeline.

## Features

- ✅ TypeScript support
- ✅ Page Object Model pattern
- ✅ Docker containerization
- ✅ GitHub Actions CI/CD
- ✅ Multiple browser support (Chromium, Firefox, WebKit)
- ✅ Test reporting (HTML, JSON, JUnit)
- ✅ Screenshots and video recording on failure

## Prerequisites

- Node.js (v16 or higher)
- Docker (optional, for containerized testing)

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd playwright-framework
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Project Structure

```
playwright-framework/
├── src/
│   ├── pages/          # Page Object Model classes
│   └── utils/          # Utility functions
├── tests/              # Test files
├── .github/workflows/  # GitHub Actions workflows
├── Dockerfile          # Docker configuration
├── playwright.config.ts # Playwright configuration
└── tsconfig.json       # TypeScript configuration
```

## Running Tests

### Local Testing

```bash
# Run all tests
npm test

# Run tests in headed mode
npm run test:headed

# Run tests with UI mode
npm run test:ui

# Debug tests
npm run test:debug

# Show test report
npm run test:report
```

### Docker Testing

```bash
# Build and run tests in Docker
npm run test:docker

# Or manually:
docker build -t playwright-tests .
docker run --rm playwright-tests
```

## Configuration

### Playwright Configuration

The `playwright.config.ts` file contains:

- Test directory configuration
- Browser configurations (Chrome, Firefox, Safari, Mobile)
- Reporter settings
- Base URL and other test settings

### TypeScript Configuration

The `tsconfig.json` file includes:

- Modern TypeScript settings
- Path mapping for imports
- Strict type checking

## Page Object Model

Example page class:

```typescript
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private readonly searchInput: Locator;

  constructor(page: Page) {
    super(page);
    this.searchInput = page.locator('[data-testid="search-input"]');
  }

  async search(query: string): Promise<void> {
    await this.searchInput.fill(query);
  }
}
```

## Writing Tests

```typescript
import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';

test('should perform search', async ({ page }) => {
  const homePage = new HomePage(page);
  
  await homePage.navigateTo('https://example.com');
  await homePage.search('test query');
  
  await expect(page).toHaveURL(/search/);
});
```

## CI/CD Pipeline

The GitHub Actions workflow (`/.github/workflows/playwright.yml`) includes:

- **Multi-browser testing**: Tests run on Chromium, Firefox, and WebKit
- **Docker testing**: Additional test run in Docker container
- **Artifact upload**: Test reports and results are saved as artifacts
- **Parallel execution**: Tests run in parallel for faster feedback

### Workflow Triggers

- Push to `main` or `develop` branches
- Pull requests to `main` branch

## Environment Variables

You can set these environment variables:

- `CI`: Set to `true` in CI environments
- `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD`: Skip browser download if set to `1`

## Test Reports

After running tests, you can view reports:

- HTML Report: `npx playwright show-report`
- Test results are saved in `playwright-report/` directory
- Screenshots and videos are captured on test failures

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run tests locally
6. Submit a pull request

## Troubleshooting

### Common Issues

1. **Browser not found**: Run `npx playwright install`
2. **TypeScript errors**: Check `tsconfig.json` configuration
3. **Docker issues**: Ensure Docker is running and has sufficient resources

### Debug Mode

Use debug mode to step through tests:

```bash
npm run test:debug
```

## License

ISC