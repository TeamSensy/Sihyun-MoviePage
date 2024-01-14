import { dummyData } from "./movieDummy";
import Movie from "./components/Movie/Movie";

function App() {
  return (
    <div className="App-Page">
      <div className="App-container">
        {dummyData.results.map((item) => {
          return (
            <Movie
              title={item.title}
              overview={item.overview}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
