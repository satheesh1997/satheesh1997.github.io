import React from "react";
import BottomFooter from "./components/BottomFooter";
import MiddleBody from "./components/MiddleBody";
import TopHeader from "./components/TopHeader";

function App() {
  const randomColors = ["red", "orange", "violet", "purple", "pink"];
  const props = {
    color: randomColors[Math.floor(Math.random() * randomColors.length)],
    user: {
      name: "Satheesh Kumar D",
      title: "Software Developer",
      contact_form_url: "https://contact.satheesh.dev/",
      articles_url: "https://articles.satheesh.dev/",
      about: `I am a Software Developer skilled in Python, Django, Flask, Java, and JavaScript. 
        A strong engineering professional with a Bachelor of Engineering focused in Computer Science and strong engineering experience from HackerEarth.`,
      github_username: "satheesh1997",
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
    ],
    recent_article: {
      image: "https://miro.medium.com/max/700/1*RXEDFVThZhVfOmvSpG5LXw.jpeg",
      title: "How to build a simple bot using python?",
      description: `Nowadays there are small bots (simple software) that are running
      which will do an action by processing the response and sending
      back a response(eg. Slack Bot, Messenger Bot). To build this
      kind of simple bots I have created a framework called iaBot.`,
    },
  };
  return (
    <div className="app">
      <TopHeader props={props} />
      <MiddleBody props={props} />
      <BottomFooter props={props} />
    </div>
  );
}

export default App;
