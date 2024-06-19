import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" element={<Index />} />
      </Switch>
    </Router>
  );
}

export default App;
