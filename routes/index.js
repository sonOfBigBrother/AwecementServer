/* router setting */
import login from './login'
export default function (app) {
  app.get('/',function (req, res) {
    res.render('index')
   });
  app.use('/login',login);
}
