import "./styles.css";
import Todoinput from "./components/Todoinput.js";
import Todocard from "./components/Todocard.js";
import Todolist from "./components/Todolist.js";

export default function App() {
  return (
    <div className="App">
      <Todoinput />
      <Todolist />
    </div>
  );
}
