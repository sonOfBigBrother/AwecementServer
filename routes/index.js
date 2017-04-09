/* router setting */
import login from './login'
import users from './users'
import messages from './messages'
export default function (app) {
  app.get('/',function (req, res) {
    if (req.session.user){
      let user = req.session.user;
      let username = user.username;
      let password = user.password;
      res.render('index',{username:username, password:password});
    } else {
      res.render('index');
    }

   });
  app.use('/login',login);
  app.use('/user',users);
  app.use('/msg',messages);
}
