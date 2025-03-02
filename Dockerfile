FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat

WORKDIR /app

FROM base AS builder

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


FROM base AS runner

ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0

COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

EXPOSE 3000
RUN chown -R node:node /app/.next

USER node
CMD ["npm", "run", "start"]