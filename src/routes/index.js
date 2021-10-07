import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Confraternização from "../pages/confraternização";
import Wedding from "../pages/wedding";
import Formatura from "../pages/formatura";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/confra">
        <Confraternização />
      </Route>
      <Route path="/wedding">
        <Wedding />
      </Route>
      <Route path="/formatura">
        <Formatura />
      </Route>
    </Switch>
  );
};

export default Routes;
