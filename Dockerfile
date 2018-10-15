FROM node:9.11.1 as dependencies

WORKDIR /source

# Add package.json to container
COPY package.json .

# Install production modules and set them aside
RUN npm install --only production
RUN cp -R node_modules prod_modules

# Install devDependencies
RUN npm install

# ----- Build -----
FROM dependencies as build

# Copy src into the container and build
COPY . .

RUN npm run lint

RUN npm run build

# ----- Release -----
FROM node:9.11.1

WORKDIR /source

# Copy set aside prod modules into container
COPY --from=dependencies /source/prod_modules ./node_modules
# Copy built files into container
COPY --from=build /source/dist ./dist

ENTRYPOINT ["node"]

CMD ["dist"]
