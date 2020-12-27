import React from "react";
import TopHeader from "./components/TopHeader";

function App() {
  const props = {
    user: {
      name: "Satheesh Kumar D",
      title: "Software Developer",
      contact_form_url: "https://contact.satheesh.dev/",
    },
    socials: [
      {
        name: "whatsapp",
        url: "https://api.whatsapp.com/send?phone=919597264229",
      },
      {
        name: "twitter",
        url: "https://twitter.com/git_push_tweet/",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/satheesh1997/",
      },
      {
        name: "github",
        url: "https://github.com/satheesh1997",
      },
      {
        name: "medium",
        url: "https://medium.com/@satheesh1997",
      },
    ],
  };
  return (
    <div className="app">
      <TopHeader props={props} />
    </div>
  );
}

export default App;
