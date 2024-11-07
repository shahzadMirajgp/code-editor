import Header from "./Header";
import Code from "./Code";
import Result from "./Result";
import EventListener from "./EventListener/EventListener";
function Home() {
  return (
    <EventListener>
      <Header />
      <Code />
      <Result />
    </EventListener>
  );
}

export default Home;
