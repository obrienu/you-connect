const userController = require('./controllers/user')

export default (req, res) => {
  const {
    method,
  } = req;
  switch (method) {
    case 'POST':
      userController.login(req, res);
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`)
  }
};