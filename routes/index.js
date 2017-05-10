/* router setting */
import login from './login'
import users from './users'
import messages from './messages'
import research from './research'
import questionnaire from './quest'
import check_token from '../middleware/check_token'

export default function (app) {
  app.get('/',function (req, res) {
    if (req.session.user){
      let user = req.session.user;
      let username = user.username;
      let password = user.password;
      res.render('addUser',{username:username, password:password});
    } else {
      res.render('post');
    }

   });
  app.use('/login',login);
  app.use('/user',check_token, users);
  app.use('/msg',check_token, messages);
  app.use('/research',check_token, research);
  app.use('/quest',check_token, questionnaire);
}
