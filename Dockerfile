FROM mcr.microsoft.com/playwright:v1.54.1-jammy

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Install Playwright browsers
RUN npx playwright install

# Create directories for test results
RUN mkdir -p test-results screenshots

# Run tests
CMD ["npm", "run", "test"]