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
    contact_details: {
      mobile: "+91-9597264229",
      mail: "mail@satheesh.dev",
      web: "https://satheesh.dev/",
      location: "Bengaluru, India",
    },
    recent_article: {
      image: "https://miro.medium.com/max/700/1*RXEDFVThZhVfOmvSpG5LXw.jpeg",
      title: "How to build a simple bot using python?",
      description: `Nowadays there are small bots (simple software) that are running
      which will do an action by processing the response and sending
      back a response(eg. Slack Bot, Messenger Bot). To build this
      kind of simple bots I have created a framework called iaBot.`,
      url:
        "https://articles.satheesh.dev/post/2020/how-to-build-a-simple-bot-using-python/",
    },
    experiences: [
      {
        role: "Software Engineer",
        employeer: "HackerEarth",
        year: "2019 - Present",
        description:
          "Working as a Software Engineer in Core apps team which maintains the HackerEarth Assessment & FaceCode product.",
      },
      {
        role: "Engineering Intern",
        employeer: "HackerEarth",
        year: "2018 - 2019",
        description: `Worked in b2b team as an engineering intern. Have worked on many
        engineering driven tasks & also have made nearly 80+ commits at
        the end.`,
      },
    ],
    testimonials: [
      {
        name: "Deepak Mishra",
        role: "Engineering Manager",
        company: "HackerEarth",
        content: `Satheesh is a rare breed of engineer who has far more technical expertise than his experience. For around one year experienced, he takes a lot of responsibilities and does well in all of them. He is one of the junior-most team members, but he gives his teammates a run for the money.
        Currently, Satheesh is working on a super challenging feature. He has already done the MVP of the next one. When I asked him to try, he was like "I already tried and it works". That's why he became THE ENGINEER OF THE YEAR.
        Satheesh is very hardworking. He is the most approachable person for every other issue or knowhows for not just engineering team. He is dependable and his words can be trusted. He has the attitude of getting the work done and unblocking anyone dependent on him ASAP. By words of his peers, he knows everything and can do anything. He has grown a lot over the past year.
        On the face, everyone fights with him, but they love him. He is a sweetheart. He is the BRO of the team.`,
        linkedin: "https://www.linkedin.com/in/deepakmishra117/",
      },
      {
        name: "Vijay Chintala",
        role: "Staff Software Engineer",
        company: "HackerEarth",
        content: `I have known satheesh for more than a year and half in the professional industry, he is organized and dedicated to his projects.
        Recently, i worked together with satheesh on the integration of csharp and python project type questions, His work ethics has inspired not just me but others around us too.`,
        linkedin: "https://www.linkedin.com/in/vijay-chintala/",
      },
    ],
    institutions: [
      {
        name: "Amrita Vidyalayam",
        degree: "Secondary & Higher Secondary",
        year: "2005-2015",
      },
      {
        name: "Sri Krishna College of Technology",
        degree: "B.E, Computer Science",
        year: "2015-2019",
      },
    ],
    languages: [
      {
        name: "English",
        rating: 4,
      },
      {
        name: "Tamil",
        rating: 5,
      },
    ],
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
