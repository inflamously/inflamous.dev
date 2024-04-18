FROM node:lts-alpine3.18 as nflamously-app
WORKDIR /app
COPY package.json package-lock.json ./

FROM nflamously-app as nflamously-check
WORKDIR /app
RUN npm audit

FROM nflamously-app as nflamously-install
WORKDIR /app
COPY package.json package-lock.json ./
RUN ls -la > echo
RUN if [[ -f "./package-lock.json" ]]; \
    then npm ci; \
    else echo "package-lock.json not found."; \
    fi

FROM nflamously-app as nflamously-run
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1100 nodejs
RUN adduser --system --uid 1101 nextjs

USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD HOSTNAME="0.0.0.0" node server.js