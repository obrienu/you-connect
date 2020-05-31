const userController = require('./controllers/user')

export default (req, res) => {
  const {
    method,
  } = req;
  switch (method) {
    case 'GET':
      userController.getUser(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};