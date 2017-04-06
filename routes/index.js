/* router setting */
import login from './login'
import users from './users'
export default function (app) {
  app.get('/',function (req, res) {
    if (req.session.user){
      let user = req.session.user;
      let password = user.password;
      res.render('index',{password:password});
    } else {
      res.render('index');
    }

   });
  app.use('/login',login);
  app.use('/user',users);
}
