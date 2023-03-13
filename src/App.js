import Title from "./components/Title";
import GlobalInstance from "./GlobalInstance";
import "./axios/global";
function App() {
  return (
    <main>
      <Title />
      <GlobalInstance />
    </main>
  );
}

export default App;
