// import logo from './logo.svg';
import './App.css';
import { FunctionComponent } from './pages/functionTemplate';
import LifeCycle from './pages/lifeCycle';
import ReactReduxPage from './pages/reactReduxPage';
import ReduxPage from './pages/reduxPage';
import RouterPage from './pages/routerPage';
import PureComponmentPage from "./pages/pureComponment";
import HookPage from './pages/hookPage';
import UseMemoPage from './pages/usememoPage';
function App() {
  return (
    <div className="App">
     <FunctionComponent />
     <LifeCycle />
     <ReduxPage />
     <ReactReduxPage />
     <RouterPage />
     <PureComponmentPage />
     <HookPage />
     <UseMemoPage />
    </div>
  );
}

export default App;
