import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignUpFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Spots from './components/Spots'
import SpotsDetails from "./components/SpotsDetails";
import CreateSpotButton from "./components/CreateSpot";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <Spots />
          </Route>
          <Route path='/spots/:spotId'>
            <SpotsDetails />
          </Route>
          {/* <Route path='/spots/create'>
            <CreateSpotButton />
          </Route> */}
          {/* <Route path='/'>

          </Route> */}
        </Switch>
      )}
    </>
  );
}

export default App;
