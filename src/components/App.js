import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";

function App() {
  console.log("User data:", user);
  console.log("User links:", user?.links);

  return (
    <div>
      <NavBar />
      <Home 
        name={user?.name}
        city={user?.city}
        color={user?.color}
      />
      <About 
        bio={user?.bio}
        github={user?.links?.github}
        linkedin={user?.links?.linkedin}
      />
      <ProjectList projects={user?.projects || []} />
    </div>
  );
}

export default App;