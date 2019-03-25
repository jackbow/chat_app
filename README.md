## Chat Web App

Check it out [here!](chat.jack.town) Built in a couple days on the MERN stack (Mongo, Express, React, Node). First time doing backend web development. This used to be peer to peer but I had to change it per the project spec… RIP decentralization.

Features:
- Scroll to fetch old messages
- Unique & persistent color/avatar combos computed on username
- Hover on a message to see time/date sent
- Responsive
- Pretty
- Messy CSS... (some in .css, some in .js) (I need to up my css tooling/practices)

---

### Instructions

Install the node dependencies with `npm i` (you may actually need to use pnpm) (mine is aliased) in both `chat_app/` and `chat_app/client`. Then `npm run build` in `chat_app/client` to build the front end. Start the web server with `node server.js` in `chat_app/`. You'll need to change `chat.jack.town` in `server.js` to `localhost` or your own domain. Start the database with `mongod --dbpath ./msgsdb --port 27017`. Finally, set up a reverse proxy from port 80/443 to 9000 and you're good to go!

---

### To do:

- [ ] Clean CSS (postcss, purgecss, ...)
- [x] Make a peer to peer branch

---

### Shoutouts:

[create-react-app](<https://facebook.github.io/create-react-app/>), 
[webgradients](https://webgradients.com), 
[pnpm](https://pnpm.js.org/), 
[tailwindcss](http://tailwindcss.com), 

The top 10 google results for the following queries:
- MERN stack tutorial
- React chat app
- Mongoose tutorial
- Express tutorial
- how to <thing> stack overflow

etc.
