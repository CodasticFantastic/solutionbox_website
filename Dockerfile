FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat

WORKDIR /app

FROM base AS builder

COPY package*.json ./prisma ./
RUN npm ci

COPY . .
RUN npm run build

RUN npx prisma generate

FROM base AS runner

ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0

COPY package*.json ./prisma ./
RUN npm ci --only=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/prisma ./prisma

RUN  chown -R 10019:1004 /app/.next/cache
# RUN chown -R node:node /app/.next
# RUN mkdir -p /app/uploads && chown -R node:node /app/uploads
# RUN mkdir -p /app/uploads/images && chown -R node:node /app/uploads/images
# RUN mkdir -p /app/uploads/documents && chown -R node:node /app/uploads/documents
# RUN chmod -R 777 /app/uploads

EXPOSE 3000
USER node

CMD ["sh", "-c", "npx prisma migrate deploy && npx prisma db seed && npm run start"]