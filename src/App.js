// import { Header, Footer } from "./components";
import ReactMarkdown from "react-markdown";
import { lesson_one } from "./data/markdown";

const App = () => {
  return (
    <div className="home">
      {/* <Header /> */}
      <img src = "images/me.JPG" alt = "me" class = "me"></img>
      <div class = "bio">
        <ul class = "bio-list">
          <li class = "bold">Calvin Ryan</li>
        </ul>
        <ul class = "bio-list">
          <li>
          Sophomore at The University of North Carolina at Chapel Hill
          </li>
        </ul>
        <ul class = "bio-list">
          <li>
          Majors: Computer Science and Economics
          </li>
        </ul>
        <ul class = "bio-list">
          <li>
          Minor: Entrepreneurship
          </li>
        </ul>
      </div>
      <h2>About Me</h2>
      <div class = "about">My life story
        revolves around my friends, family,
        and relationships as I navigate through 
        the present and the future. I am passionate
        about soccer and computer science and hope 
        to find careers in those areas after I graduate
        from UNC. I follow whatever makes me happy, 
        and always try to keep a smile on my face.
      </div>
      <div class="content">
        <ReactMarkdown source={lesson_one} />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
