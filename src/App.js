import { Suspense, lazy } from "react";
import { Redirect, Router } from "@reach/router";
import { useDataLayerValue } from "./context/DataLayer";

const Home = lazy(() => import("./pages/Home"));
const Questionary = lazy(() => import("./pages/Questionary"));
const Results = lazy(() => import("./pages/Results"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const [{ name }, dispatch] = useDataLayerValue();

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Router>
        <Home path="/"></Home>
        {name === "" && (
          <Redirect noThrow from="/questionary" to="/"></Redirect>
        )}
        {name === "" && <Redirect noThrow from="/results" to="/"></Redirect>}
        <Questionary path="/questionary"></Questionary>
        <Results path="/results"></Results>
        <NotFound default></NotFound>
      </Router>
    </Suspense>
  );
}

export default App;
