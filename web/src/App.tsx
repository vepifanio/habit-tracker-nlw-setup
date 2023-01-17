import "./styles/global.css";

import { Habit } from "./components/Habits";

export default function App() {
  return (
    <>
      <Habit completed={3} />
      <Habit completed={10} />
      <Habit completed={20} />
      <Habit completed={30} />
    </>
  );
}
