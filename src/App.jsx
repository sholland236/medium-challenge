import './app.scss';
import Nav from "./Components/Nav/Nav";
import Article from "./Components/Article/Article";
import articleData from "./data/data";
import Featured from "./Components/Featured/Featured";
import featuredData from './data/featuredData';
import popularData from './data/popularData';

// map through data array to add articles
const firstArticle = articleData.slice(0,1);
const firstBlock = articleData.slice(1, 4);
const remainingBlock = articleData.slice(4);
// const featuredWriter = featuredData;

const topicsArr = ["JAVASCRIPT", "SOFTWARE ENGINEERING", "DATA SCIENCE", "UX", "MATH"];


// create author component, call in article? add relevant data to data file
// need to create a button component to add to all?

function App() {
  return (
    <div className="outer">
      <Nav />
      <div className="container">
        <div className="container__left">
          <Article articleArr={firstArticle} isPrimaryArticle />
          <h3>Latest</h3>
          <Article articleArr={firstBlock} />
          <Featured writerName="Shirlen Detablan" writerBio="Junior full stack developer" featuredArr={featuredData} />
          <Article articleArr={remainingBlock} />
        </div>
        <div className="container__right">
          <h2>Programming</h2>
          <p>The good, the bad, the buggy</p>
          <button>Follow</button>
          <p>Follow to see more stories about Programming on your homepage and in your Medium Daily Digest</p>
          <div className="related-topics">
            <h4>RELATED TOPICS</h4>
            {topicsArr[0]} <br />
            {topicsArr[1]} <br />
            {topicsArr[2]} <br />
            {topicsArr[3]} <br />
            {topicsArr[4]} <br />
          </div>
          <div className="popular-articles">
            <h4>POPULAR IN PROGRAMMING</h4>
            <Article articleArr={popularData} isPopular />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


// author component: name, date posted, reading time, image