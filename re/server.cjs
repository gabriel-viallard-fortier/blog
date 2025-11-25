// server.js
import { create, router, defaults } from 'json-server/lib/app.js';

const server = create();
const jsonRouter = router('db.json');
const middlewares = defaults();

server.use(middlewares);

server.use((req, res, next) => {
  res.header('Access-Control-Expose-Headers', 'X-Total-Count');
  next();
});

server.use(jsonRouter);
server.listen(3000, () => {
  console.log('JSON Server is running');
});