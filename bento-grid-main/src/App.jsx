import fiveStars from "./assets/images/illustration-five-stars.webp";
import multiplePlatforms from "./assets/images/illustration-multiple-platforms.webp";
import consistentSchedule from "./assets/images/illustration-consistent-schedule.webp";
import schedulePosts from "./assets/images/illustration-schedule-posts.webp";
import growFollowers from "./assets/images/illustration-grow-followers.webp";
import audienceGrowth from "./assets/images/illustration-audience-growth.webp";
import createPost from "./assets/images/illustration-create-post.webp";
import aiContent from "./assets/images/illustration-ai-content.webp";

import Grid from "./components/Grid";

import "./App.css";

function App() {
  const first = (
    <>
      <div className="text-large center">
        Social Media <span className={"yellow-500"}> 10x </span>
        <span className={"italic"}> Faster </span> with AI
      </div>

      <img
        className={"block"}
        style={{ maxWidth: "50%", margin: "30px 0px -10px 0px" }}
        src={fiveStars}
      />
      <div className="center yellow-100">Over 4,000 5-star reviews</div>
    </>
  );
  const second = (
    <>
      <img
        className={"block"}
        src={multiplePlatforms}
        style={{ width: "100%", marginBottom: "20px" }}
      />
      <div className="text-medium black" style={{ lineHeight: "1.6rem" }}>
        Manage multiple accounts and platforms.
      </div>
    </>
  );
  const third = (
    <>
      <div className="text-medium black" style={{ lineHeight: "1.6rem" }}>
        Maintain a consistent posting schedule.
      </div>
      <img
        className={"block"}
        src={consistentSchedule}
        style={{
          width: "100%",
          margin: "10px 0px -30px 0px",
        }}
      />
    </>
  );
  const fourth = (
    <>
      <div className="text-medium center black">Schedule to social media.</div>
      <img
        className={"block"}
        src={schedulePosts}
        style={{ width: "100%", margin: "10px 0px" }}
      />
      <span
        className="black"
        style={{
          lineHeight: "1.4rem",
          fontSize: "1.5rem",
          textAlign: "center",
        }}
      >
        Optimize post timings to publish content at the perfect time for your
        audience.
      </span>
    </>
  );
  const fifth = (
    <>
      <img
        className={"block"}
        src={growFollowers}
        style={{ width: "80%", margin: "10px 0px" }}
      />
      <div
        className="text-medium center white"
        style={{ lineHeight: "1.6rem" }}
      >
        Grow followers with non-stop content.
      </div>
    </>
  );
  const sixth = (
    <>
      <div className="black">
        <span className="text-large"> {`>56%`}</span>
        <span className="block" style={{ margin: "-10px 0px 0px 0px" }}>
          faster audience growth
        </span>
      </div>
      <img
        className={"block"}
        src={audienceGrowth}
        style={{ width: "80%", margin: "10px 0px" }}
      />
    </>
  );
  const seventh = (
    <>
      <div className="black text-medium" style={{ lineHeight: "1.4rem" }}>
        <span>Create and schedule content</span>
        <span className="purple-500 italic"> quicker.</span>
      </div>
      <img
        className={"block"}
        src={createPost}
        style={{ width: "60%", margin: "10px 0px" }}
      />
    </>
  );
  const eighth = (
    <>
      <div
        className="black text-medium font-500"
        style={{ lineHeight: "1.5rem" }}
      >
        Write your content using AI.
      </div>
      <img
        className={"block"}
        src={aiContent}
        style={{ width: "60%", margin: "10px 0px" }}
      />
    </>
  );

  return (
    <>
      <Grid content={first} backgroundColor={"var(--purple-500)"} />
      <Grid content={second} backgroundColor={"var(--white)"} />
      <Grid content={third} backgroundColor={"var(--yellow-500)"} />
      <Grid content={fourth} backgroundColor={"var(--purple-100)"} />
      <Grid content={fifth} backgroundColor={"var(--purple-500)"} />
      <Grid content={sixth} backgroundColor={"var(--white)"} align="left" />
      <Grid
        content={seventh}
        backgroundColor={"var(--yellow-100)"}
        align="left"
      />
      <Grid
        content={eighth}
        backgroundColor={"var(--yellow-500)"}
        align="left"
      />

      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}

export default App;
