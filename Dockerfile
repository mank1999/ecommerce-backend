# Stage 1 — build (keeps dev deps out of final image)
FROM node:18-alpine AS build
WORKDIR /app

# only copy package files first to leverage docker cache
COPY package*.json ./
# If you need devDependencies for a build step (e.g. webpack), install all:
RUN npm ci

# copy rest and build (for front-ends or transpile steps)
COPY . .
# run build if you have one (optional)
# RUN npm run build

# Stage 2 — runtime
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production

# copy only necessary files from build stage
COPY --from=build /app ./

# Install only production deps (faster, smaller)
RUN npm ci --only=production

EXPOSE 3000
# update this to your actual start command
CMD ["node", "server.js"]
