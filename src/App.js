import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import AllReviews from './components/AllReviews';
import CategoryReviews from './components/CategoryReviews';
import Users from './components/Users';
import Review from './components/Review';
import { useState } from 'react';
import { UserContext } from './user';

function App({ history }) {
  const [reviews, setReviews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState({});
  const [query, setQuery] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* <Nav></Nav> */}
      <Switch>
        <Route exact path='/'>
          <Home categories={categories} setCategories={setCategories}></Home>
        </Route>
        <Route exact path='/users'>
          <Users></Users>
        </Route>
        <Route exact path='/reviews'>
          <AllReviews
            reviews={reviews}
            setReviews={setReviews}
            categories={categories}
            setCategories={setCategories}
            query={query}
            setQuery={setQuery}
          ></AllReviews>
        </Route>
        <Route exact path='/reviews/:category'>
          <CategoryReviews
            reviews={reviews}
            setReviews={setReviews}
            categories={categories}
            setCategories={setCategories}
            query={query}
            setQuery={setQuery}
          ></CategoryReviews>
        </Route>
        <Route exact path='/review/:review_id'>
          <Review></Review>
        </Route>
        <Route>
          <p>404 - not found</p>
        </Route>
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
