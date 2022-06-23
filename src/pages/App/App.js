import {path} from '../../routes';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from '../Home/Homepage';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Blog from '../Blog/Blog';
import ViewBlog from '../ViewBlog/ViewBlog';
import Contact from '../Contact/Contact';
import Termspage from '../Terms/Termspage';
import Aboutus from '../About us/AboutUs';
import Artisan from '../Artisan/Artisan';
import createBlog from '../Createblog/createBlog';

const App = ()=>{
  return (
          <div className='App'>
        <Switch>
          <Route exact path={path.home} component= {Homepage} />
          <Route exact path={path.terms} component= {Termspage} />
          <Route exact path={path.blog} component= {Blog} />
          <Route exact path={path.login} component= {Login} />
          <Route exact path={path.register} component= {Register} />
          <Route exact path={`${path.viewBlog}/:id`} component={ViewBlog}/>
          <Route exact path={path.contact} component= {Contact} />
          <Route exact path={path.profile} component= {Profile} />
          <Route exact path={path.about} component= {Aboutus} />
          <Route exact path={path.artisan} component= {Artisan} />
          <Route exact path={path.createBlog} component={createBlog} />
        </Switch>
      </div>

  )
};
export default App;
