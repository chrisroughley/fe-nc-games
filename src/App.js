import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import AllReviews from './components/AllReviews';
import CategoryReviews from './components/CategoryReviews';
import { useState } from 'react';

function App() {
  const [reviews, setReviews] = useState([]);
  const [categories, setCategories] = useState([]);

  return (
    <div className='App'>
      <Nav></Nav>
      <Switch>
        <Route exact path='/'>
          <Home categories={categories} setCategories={setCategories}></Home>
        </Route>
        <Route exact path='/reviews'>
          <AllReviews
            reviews={reviews}
            setReviews={setReviews}
            categories={categories}
            setCategories={setCategories}
          ></AllReviews>
        </Route>
        <Route exact path='/reviews/:category'>
          <CategoryReviews
            reviews={reviews}
            setReviews={setReviews}
            categories={categories}
            setCategories={setCategories}
          ></CategoryReviews>
        </Route>
        <Route>
          <p>404 - not found</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
