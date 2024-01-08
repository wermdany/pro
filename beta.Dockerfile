FROM node:18-alpine
WORKDIR /app
COPY package.json yarn.lock .yarnrc /app/
RUN yarn --registry https://registry.npmmirror.com/
COPY ./ /app
#RUN yarn build:beta
CMD ["yarn", "start:beta"]
EXPOSE 80

#FROM nginx:1.17-alpine
#RUN mkdir /app
#COPY --from=0 /app/dist /app
#COPY nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80
