const projects = [{
    id: "Christmas-calendar",
    name: "Christmas Calendar",
    category: "Web Development",
    images: ["/images/pagespictures/web/julkalender1.png","/images/pagespictures/web/julkalender2.png", "/images/pagespictures/web/julkalender3.png"],
    video: "../images/videos/christmascalendar.webm",
    description: `The assignment was to build an advent calendar which will slowly reveal itself over 24 days until Christmas Eve! 🎅  \n \n The page is designed with 24 windows - one for each day leading up to Christmas. If a day is in the future, its window should be closed. If it is in the past, its window should be open. Every window leads to a indivudaly design page with a recepie. A openable window is visualized by snow falling in that window. This page was a group project during the Technigo Bootcamp in collaboration with Kivra.`,
    technologies: ["javascript", "css", "html"],
    link: "https://eager-noether-e09ff3.netlify.com/"
  },
  {
    id: "Pizza-Bot",
    name: "Pizza ordering through a pizza bot",
    category: "Web Development",
    images: ["/images/pagespictures/web/pizzabot.png", "/images/pagespictures/web/pizzabot-2.png", "/images/pagespictures/web/pizzabot-3.png"],
    video: "",
    description: "A form that lets you select from 3 different pizzas, calculates the price and time for delivery and also lets you rate the pizzas after your order.",
    technologies: ["javascript", "css", "html"],
    link: "https://pizzabot.netlify.com/"
  },
  {
    id: "Radio-player",
    name: "Radio player",
    category: "Web Development",
    images: ["/images/pagespictures/web/radioplayer.png", "/images/pagespictures/web/radioplayer-wireframe.png", "/images/pagespictures/web/radioplayer-2.png"],
    video: "",
    description: "A radio player using Sveriges Radios API to fetch information about the radio channels and fetch playable audio stream urls to create a working radio player! The station name, image, and colour keys are all fetched from the API.",
    technologies: ["react", "javascript", "css", "html"],
    link: "https://hildasandberg.github.io/assignment-radio-player/"
  },
  {
    id: "technigo-yearbook",
    name: "Technigo Yearbook",
    category: "Web Development",
    images: ["/images/pagespictures/web/yearbook.png", "/images/pagespictures/web/yearbook-mobile.png"],
    video: "",
    description: "A yearbook page presenting the students of 2017-2018. The layout is made using flexbox.",
    technologies: ["css", "html"],
    link: "https://hildasandberg.github.io/assignment-flexbox/"
  },
  {
    id: "Sign-up-form",
    name: "Sign up form for ASOS",
    category: "Web Development",
    images: ["/images/pagespictures/web/asos-form.png", "/images/pagespictures/web/asos-form2.png"],
    video: "",
    description: "A sign up form inspired and designed to fit ASOS",
    technologies: ["css", "html"],
    link: "https://hildasandberg.github.io/assignment-forms/"
  },
  {
    id: "Pharmacy-page",
    name: "Pharmacy page",
    category: "Web Development",
    images: ["/images/pagespictures/web/pharmacy.png", "/images/pagespictures/web/pharmacy-tablet.png", "/images/pagespictures/web/pharmacy-mobile.png"],
    video: "",
    description: "A pharmacy e-commerce store, with a product listing of pharmaceuticals. The products are stored in a JSON file with product information for the products your page will list.",
    technologies: ["react", "javascript", "css", "html"],
    link: "https://hildasandberg.github.io/assignment-product-page/"
  },
  {
    id: "Newspaper",
    name: "A news site",
    category: "Web Development",
    images: ["/images/pagespictures/web/newspaper.png"],
    video: "",
    description: "A classic newspaper grid that lists articles that is responsive and works both for desktop, tablet and mobile. The webpage kit.se is the inspiration and this is my version of their grid, for desktop, tablet and phone.",
    technologies: ["css", "html"],
    link: "https://hildasandberg.github.io/assignment-newspaper/"
  },
  {
    id: "Css-grid",
    name: "A Css-grid project",
    category: "Web Development",
    images: ["/images/pagespictures/web/helvetica-cssgrid.png", "/images/pagespictures/web/helvetica-tablet.png", "/images/pagespictures/web/helvetica-mobile.png"],
    video: "",
    description: "This Helvetica tribute is an layout using CSS grids. The layout and content came from a design spec and I've also made a responsive design for tablet and mobile.",
    technologies: ["css", "html"],
    link: "https://hildasandberg.github.io/assignment-css-grid/"
  },
  {
    id: "Ai-kassen",
    name: "AI kassen",
    category: "Web Development",
    images: ["/images/pagespictures/web/aikassen-short.png", "/images/pagespictures/web/aikassen.png", "/images/pagespictures/web/aikassen-mobile.png"],
    video: "",
    description: "This page was the first group project we did in the Technigo Bootcamp (the first 2 weeks of coding!). \n \n The requirements were: Responsive header The menu should work on all screen sizes. It should have a logotype, navigational links and one dropdown. Hero background image A large cover image in the hero section. Three selling points Responsive grid with three selling points containing icons and copy for each of them. Feature section List your top features with an image, text and button for each of them. Footer A navigational footer with social media links.",
    technologies: ["css", "html"],
    link: "https://aikassen.netlify.com/"
  },
  {
    id: "ToDo-app",
    name: "ToDo-app",
    category: "Web Development",
    images: ["/images/pagespictures/web/todo.png"],
    video: "",
    description: "A ToDo application that store the data in local storage. The app list all items, the user is able to create a new item, mark an item as complete, and remove the item. All working togheter with the local storage. ",
    technologies: ["react", "javascript", "css", "html"],
    link: "https://goodgirl.netlify.com/"
  },
  {
    id: "Online-store",
    name: "Online-store",
    category: "Web Development",
    images: ["/images/pagespictures/web/sofo-1.png", "/images/pagespictures/web/sofo-3.png", "/images/pagespictures/web/sofo.png"],
    video: "",
    description: "This goal of the project was to build a custom retail store for one of Tictail's customers in React using Tictail's API to fetch live data. \n \n This page was a group project during the Technigo Bootcamp",
    technologies: ["react", "javascript", "css", "html"],
    link: "https://sofostore.netlify.com/"
  },
  {
    id: "habit-tracker",
    name: "Habit Tracker",
    category: "Web Development",
    images: ["/images/pagespictures/web/habit-start-4.png", "/images/pagespictures/web/habit-form-text.png", "/images/pagespictures/web/habit-calendar-3.png"],
    video: "",
    description: "A habit tracker that lets you track 6 new habits that you want to start with. \n \n This app was a group project during the Technigo Bootcamp",
    technologies: ["react", "javascript", "css", "html"],
    link: "https://reverent-williams-2e8d68.netlify.com/"
  },
  {
    id: "Forum",
    name: "Forum",
    category: "Web Development",
    images: [
      "/images/pagespictures/web/forumstart.png",
      "/images/pagespictures/web/forum-admin.png",
      "/images/pagespictures/web/thread.png"
    ],
    video: "",
    description: `A FAQ forum for MongoDB questions, with both a frontend and a backend. \n \n The forum has two parts; one for visitors to ask questions and find answers, and another for customer support staff to write answers to questions.
     \n \n Technical Requirements: \n React frontend \n API in Express \n MongoDB as a database to store questions and answers \n \n This page was a group project during the Technigo Bootcamp`,
    technologies: ["react", "javascript", "css", "html", "node.js", "mongoDB"],
    link: "https://sofostore.netlify.com/"
  },
  {
    id: "Soft-ice-cream",
    name: "Soft ice cream machine",
    category: "Industrial Design Engineering",
    images: ["/images/pagespictures/ide/icecream/randy1.jpg","/images/pagespictures/ide/icecream/top.jpg","/images/pagespictures/ide/icecream/randy1.jpg","/images/pagespictures/ide/icecream/GULING2.jpg","/images/pagespictures/ide/icecream/open.jpg","/images/pagespictures/ide/icecream/lokal.jpg","/images/pagespictures/ide/icecream/randy1.jpg","/images/pagespictures/ide/icecream/uPPsLaG.jpg"],
    video: "",
    description: "Product design of a soft serve ice cream machine. Designed with ease of use in mind with minimal buttons and information for the customer to take in. Designed to bring you cold ice and warm feelings! \n \n CAD: Rhinoceros Rendering: Keyshot Broschyre: Photoshop",
    technologies: ["Product design", "CAD", "Grafic design"],
    link: ""
  },
  {
    id: "Foldable-stool",
    name: "A foldable stool in plastic",
    category: "Industrial Design Engineering",
    images: ["/images/pagespictures/ide/arente/multi.png", "/images/pagespictures/ide/arente/carbonfiber.jpg", "/images/pagespictures/ide/arente/imiljö.png"],
    video: "",
    description: "The stool Arente is inspired by classical cross leg stools and modern trendy plastic furniture. This stool is designed for plastic and wants to take advantage of the unique features of plastic.\n \n The stool consists of a thin leg structure and a transparent seat and can be folded to take upp less space. \n \nCAD: Solid edge Rendering: Keyshot",
    technologies: ["Product design", "CAD"],
    link: ""
  },
  {
    id: "BAL-casing",
    name: "Casing for an Extracorporeal Bio Artificial Liver Support system",
    category: "Industrial Design Engineering",
    images: ["/images/pagespictures/ide/bal/casinghalfes.png", "/images/pagespictures/ide/bal/casing.png", "/images/pagespictures/ide/bal/bal.png", "/images/pagespictures/ide/bal/body_edited.png"],
    video: "",
    description: "People with liver diseases sometimes use liver support systems. In this project a casing for such a device was designed. \n \n It is an extracorporeal device with a cryogel matrix containing liver cells. The blood is perfused through the cryogel and then led back into the body and the blood system. Since the liver support system is connected to the patients’ blood, it is important that the materials being used are biocompatible and able to be sterilized multiple times. Other important requirements for the casing are ergonomically factors such as soft shape, weight and size. \n \n The casing consists of two halves that are assembled using a snap fit. Between the two parts there is a seal that prevents leakage. The bio artificial liver support device is attached to the body using a strap. The casing is designed with smooth and round shapes to feel comfortable against the body and because sharp edges and corners have been avoided, it is also easy keep clean. \n \n CAD: Solid edge Rendering: Keyshot",
    technologies: ["Product design", "CAD"],
    link: ""
  },
  {
    id: "Waste-recycling-system",
    name: "Waste Recycling System",
    category: "Industrial Design Engineering",
    images: ["/images/pagespictures/ide/waste/boxes-on-frame.jpg","/images/pagespictures/ide/waste/placing-bag.jpg","/images/pagespictures/ide/waste/open-display.jpg","/images/pagespictures/ide/waste/model.jpg"],
    video: "",
    description: "Development of a waste recycling system. The goal was to develop a product that will fit in most homes with the users in mind.The type of waste produced by a family varies and with this system the users can easily categorize and move their household waste, at the same time design their own sorting system. \n \n The benefit of this product ​ is its flexibility. The user can easily alter the adjustable frame as well as arrange the bins accordingly. The users can also utilize the bins to transport the waste to the recycling center.\n \n CAD: Solid edge Rendering: Keyshot Model: Foamboard",
    technologies: ["Product design"],
    link: ""
  },
  {
    id: "Greenhouse",
    name: "A man powered greenhouse",
    category: "Industrial Design Engineering",
    images: ["/images/pagespictures/ide/greenhouse/ksjgfhduo.jpg", "/images/pagespictures/ide/greenhouse/DSC01360.JPG.jpg", "/images/pagespictures/ide/greenhouse/DSC00909.JPG.jpg"],
    video: "",
    description: "Why not use the energy from people working out? The question led to the design of a man powered greenhouse.\n \n This mechanical design uses a persons energy to pump water into a greenhouse, and the energy can also be used to power artificial sunlight. The gym members will collaboratively grow crops in the green house that can be sold in the gym café. \n \nCAD: Solid edge \n \nRendering: 3D studio max \n \nModel: wood, plastic",
    technologies: ["Product Development"],
    link: ""
  },
  {
    id: "toy-development",
    name: "Toy Development",
    category: "Industrial Design Engineering",
    images: ["/images/pagespictures/ide/uglimals/treihop.jpg","/images/pagespictures/ide/uglimals/koncept.jpg","/images/pagespictures/ide/uglimals/leker.jpg"],
    video: "",
    description: "Product development of a line of toys for children aged 6-9. Uglymals were developed with input from focus groups consisting of children. With the interchangeable design (ability to swap out any part) kids are encouraged to play without preconceived norms. They can freely create animals with any look and personality. \n \nModel: 3D-milling, spray paint, hand paint, clay, fabric, wood, glass \n \nReport: Illustrator, photoshop",
    technologies: ["Product Development"],
    link: ""
  },
  {
    id: "Broadband-Telia",
    name: "Better broadband service for Telia",
    category: "Industrial Design Engineering",
    images: [
      "/images/pagespictures/ide/telia/uppackning2.png",
      "/images/pagespictures/ide/telia/problem_journey_map_edited.png",
      "/images/pagespictures/ide/telia/kalkylator3.jpg"
    ],
    video: "",
    description: "The purpose of the project was to examine Telia's fixed broadband service for private customers from a customer perspective. The objective of this work has been to deliver useful customer insights and improvement proposals. \n \nIn the project, a service design methodology was used where the focus has been on interactions with customers. The initial phase was followed by three iterative loops with customer interactions, insight analysis, ideation and conceptualization. Customer insights and concepts have been tested, evaluated, and deepened during the project. In the last phase the result was processed and the insights were rated for easier implementation. \n \nA major problem area for many customers was the Wi-Fi and Wi-Fi range, because the technology is perceived as difficult and abstract. The conclusion is that Telia should help their clients to improve the Wi-Fi quality and the project work led to three ultimate concepts tested on customers. Also six recommendations were delivered to Telia. \n \nMethods: Qualitative Interviews, Trigger material, Co-creation, Customer Journey Maps",
    technologies: ["Service Design"],
    link: ""
  },
  {
    id: "Cat-house",
    name: "Cat house",
    category: "Industrial Design Engineering",
    images: ["/images/pagespictures/ide/katthus/katthus.jpg", "/images/pagespictures/ide/katthus/katthus1.jpg", "/images/pagespictures/ide/katthus/katthus3.jpg"],
    video: "",
    description: "Many cat houses don't fit in to the interior design. I couldn't find one that I wanted to have in my home. So I designed this house.",
    technologies: ["Product Development"],
    link: ""
  }
  ]

export default projects
// export default {
//   projects: [{
//     id: "Christmas-calendar",
//     name: "Christmas Calendar",
//     category: "Web Development",
//     images: ["/images/pagespictures/web/julkalender1.png","/images/pagespictures/web/julkalender2.png", "/images/pagespictures/web/julkalender3.png"],
//     video: "../images/videos/christmascalendar.webm",
//     description: `The assignment was to build an advent calendar which will slowly reveal itself over 24 days until Christmas Eve! 🎅  \n \n The page is designed with 24 windows - one for each day leading up to Christmas. If a day is in the future, its window should be closed. If it is in the past, its window should be open. Every window leads to a indivudaly design page with a recepie. A openable window is visualized by snow falling in that window. This page was a group project during the Technigo Bootcamp in collaboration with Kivra.`,
//     technologies: ["javascript", "css", "html"],
//     link: "https://eager-noether-e09ff3.netlify.com/"
//   },
//   {
//     id: "Pizza-Bot",
//     name: "Pizza ordering through a pizza bot",
//     category: "Web Development",
//     images: ["/images/pagespictures/web/pizzabot.png", "/images/pagespictures/web/pizzabot-2.png", "/images/pagespictures/web/pizzabot-3.png"],
//     video: "",
//     description: "A form that lets you select from 3 different pizzas, calculates the price and time for delivery and also lets you rate the pizzas after your order.",
//     technologies: ["javascript", "css", "html"],
//     link: "https://pizzabot.netlify.com/"
//   },
//   {
//     id: "Radio-player",
//     name: "Radio player",
//     category: "Web Development",
//     images: ["/images/pagespictures/web/radioplayer.png", "/images/pagespictures/web/radioplayer-wireframe.png", "/images/pagespictures/web/radioplayer-2.png"],
//     video: "",
//     description: "A radio player using Sveriges Radios API to fetch information about the radio channels and fetch playable audio stream urls to create a working radio player! The station name, image, and colour keys are all fetched from the API.",
//     technologies: ["react", "javascript", "css", "html"],
//     link: "https://hildasandberg.github.io/assignment-radio-player/"
//   },
//   {
//     id: "technigo-yearbook",
//     name: "Technigo Yearbook",
//     category: "Web Development",
//     images: ["/images/pagespictures/web/yearbook.png", "/images/pagespictures/web/yearbook-mobile.png"],
//     video: "",
//     description: "A yearbook page presenting the students of 2017-2018. The layout is made using flexbox.",
//     technologies: ["css", "html"],
//     link: "https://hildasandberg.github.io/assignment-flexbox/"
//   },
//   {
//     id: "Sign-up-form",
//     name: "Sign up form for ASOS",
//     category: "Web Development",
//     images: ["/images/pagespictures/web/asos-form.png", "/images/pagespictures/web/asos-form2.png"],
//     video: "",
//     description: "A sign up form inspired and designed to fit ASOS",
//     technologies: ["css", "html"],
//     link: "https://hildasandberg.github.io/assignment-forms/"
//   },
//   {
//     id: "Pharmacy-page",
//     name: "Pharmacy page",
//     category: "Web Development",
//     images: ["/images/pagespictures/web/pharmacy.png", "/images/pagespictures/web/pharmacy-tablet.png", "/images/pagespictures/web/pharmacy-mobile.png"],
//     video: "",
//     description: "A pharmacy e-commerce store, with a product listing of pharmaceuticals. The products are stored in a JSON file with product information for the products your page will list.",
//     technologies: ["react", "javascript", "css", "html"],
//     link: "https://hildasandberg.github.io/assignment-product-page/"
//   },
//   {
//     id: "Newspaper",
//     name: "A news site",
//     category: "Web Development",
//     images: ["/images/pagespictures/web/newspaper.png"],
//     video: "",
//     description: "A classic newspaper grid that lists articles that is responsive and works both for desktop, tablet and mobile. The webpage kit.se is the inspiration and this is my version of their grid, for desktop, tablet and phone.",
//     technologies: ["css", "html"],
//     link: "https://hildasandberg.github.io/assignment-newspaper/"
//   },
//   {
//     id: "Css-grid",
//     name: "A Css-grid project",
//     category: "Web Development",
//     images: ["/images/pagespictures/web/helvetica-cssgrid.png", "/images/pagespictures/web/helvetica-tablet.png", "/images/pagespictures/web/helvetica-mobile.png"],
//     video: "",
//     description: "This Helvetica tribute is an layout using CSS grids. The layout and content came from a design spec and I've also made a responsive design for tablet and mobile.",
//     technologies: ["css", "html"],
//     link: "https://hildasandberg.github.io/assignment-css-grid/"
//   },
//   {
//     id: "Ai-kassen",
//     name: "AI kassen",
//     category: "Web Development",
//     images: ["/images/pagespictures/web/aikassen-short.png", "/images/pagespictures/web/aikassen.png", "/images/pagespictures/web/aikassen-mobile.png"],
//     video: "",
//     description: "This page was the first group project we did in the Technigo Bootcamp (the first 2 weeks of coding!). \n \n The requirements were: Responsive header The menu should work on all screen sizes. It should have a logotype, navigational links and one dropdown. Hero background image A large cover image in the hero section. Three selling points Responsive grid with three selling points containing icons and copy for each of them. Feature section List your top features with an image, text and button for each of them. Footer A navigational footer with social media links.",
//     technologies: ["css", "html"],
//     link: "https://aikassen.netlify.com/"
//   },
//   {
//     id: "ToDo-app",
//     name: "ToDo-app",
//     category: "Web Development",
//     images: ["/images/pagespictures/web/todo.png"],
//     video: "",
//     description: "A ToDo application that store the data in local storage. The app list all items, the user is able to create a new item, mark an item as complete, and remove the item. All working togheter with the local storage. ",
//     technologies: ["react", "javascript", "css", "html"],
//     link: "https://goodgirl.netlify.com/"
//   },
//   {
//     id: "Online-store",
//     name: "Online-store",
//     category: "Web Development",
//     images: ["/images/pagespictures/web/sofo-1.png", "/images/pagespictures/web/sofo-3.png", "/images/pagespictures/web/sofo.png"],
//     video: "",
//     description: "This goal of the project was to build a custom retail store for one of Tictail's customers in React using Tictail's API to fetch live data. \n \n This page was a group project during the Technigo Bootcamp",
//     technologies: ["react", "javascript", "css", "html"],
//     link: "https://sofostore.netlify.com/"
//   },
//   {
//     id: "habit-tracker",
//     name: "Habit Tracker",
//     category: "Web Development",
//     images: ["/images/pagespictures/web/habit-start-4.png", "/images/pagespictures/web/habit-form-text.png", "/images/pagespictures/web/habit-calendar-3.png"],
//     video: "",
//     description: "A habit tracker that lets you track 6 new habits that you want to start with. \n \n This app was a group project during the Technigo Bootcamp",
//     technologies: ["react", "javascript", "css", "html"],
//     link: "https://reverent-williams-2e8d68.netlify.com/"
//   },
//   {
//     id: "Forum",
//     name: "Forum",
//     category: "Web Development",
//     images: [
//       "/images/pagespictures/web/forumstart.png",
//       "/images/pagespictures/web/forum-admin.png",
//       "/images/pagespictures/web/thread.png"
//     ],
//     video: "",
//     description: `A FAQ forum for MongoDB questions, with both a frontend and a backend. \n \n The forum has two parts; one for visitors to ask questions and find answers, and another for customer support staff to write answers to questions.
//      \n \n Technical Requirements: \n React frontend \n API in Express \n MongoDB as a database to store questions and answers \n \n This page was a group project during the Technigo Bootcamp`,
//     technologies: ["react", "javascript", "css", "html", "node.js", "mongoDB"],
//     link: "https://sofostore.netlify.com/"
//   },
//   {
//     id: "Soft-ice-cream",
//     name: "Soft ice cream machine",
//     category: "Industrial Design Engineering",
//     images: ["/images/pagespictures/ide/icecream/randy1.jpg","/images/pagespictures/ide/icecream/top.jpg","/images/pagespictures/ide/icecream/randy1.jpg","/images/pagespictures/ide/icecream/GULING2.jpg","/images/pagespictures/ide/icecream/open.jpg","/images/pagespictures/ide/icecream/lokal.jpg","/images/pagespictures/ide/icecream/randy1.jpg","/images/pagespictures/ide/icecream/uPPsLaG.jpg"],
//     video: "",
//     description: "Product design of a soft serve ice cream machine. Designed with ease of use in mind with minimal buttons and information for the customer to take in. Designed to bring you cold ice and warm feelings! \n \n CAD: Rhinoceros Rendering: Keyshot Broschyre: Photoshop",
//     technologies: ["Product design", "CAD", "Grafic design"],
//     link: ""
//   },
//   {
//     id: "Foldable-stool",
//     name: "A foldable stool in plastic",
//     category: "Industrial Design Engineering",
//     images: ["/images/pagespictures/ide/arente/multi.png", "/images/pagespictures/ide/arente/carbonfiber.jpg", "/images/pagespictures/ide/arente/imiljö.png"],
//     video: "",
//     description: "The stool Arente is inspired by classical cross leg stools and modern trendy plastic furniture. This stool is designed for plastic and wants to take advantage of the unique features of plastic.\n \n The stool consists of a thin leg structure and a transparent seat and can be folded to take upp less space. \n \nCAD: Solid edge Rendering: Keyshot",
//     technologies: ["Product design", "CAD"],
//     link: ""
//   },
//   {
//     id: "BAL-casing",
//     name: "Casing for an Extracorporeal Bio Artificial Liver Support system",
//     category: "Industrial Design Engineering",
//     images: ["/images/pagespictures/ide/bal/casinghalfes.png", "/images/pagespictures/ide/bal/casing.png", "/images/pagespictures/ide/bal/bal.png", "/images/pagespictures/ide/bal/body_edited.png"],
//     video: "",
//     description: "People with liver diseases sometimes use liver support systems. In this project a casing for such a device was designed. \n \n It is an extracorporeal device with a cryogel matrix containing liver cells. The blood is perfused through the cryogel and then led back into the body and the blood system. Since the liver support system is connected to the patients’ blood, it is important that the materials being used are biocompatible and able to be sterilized multiple times. Other important requirements for the casing are ergonomically factors such as soft shape, weight and size. \n \n The casing consists of two halves that are assembled using a snap fit. Between the two parts there is a seal that prevents leakage. The bio artificial liver support device is attached to the body using a strap. The casing is designed with smooth and round shapes to feel comfortable against the body and because sharp edges and corners have been avoided, it is also easy keep clean. \n \n CAD: Solid edge Rendering: Keyshot",
//     technologies: ["Product design", "CAD"],
//     link: ""
//   },
//   {
//     id: "Waste-recycling-system",
//     name: "Waste Recycling System",
//     category: "Industrial Design Engineering",
//     images: ["/images/pagespictures/ide/waste/boxes-on-frame.jpg","/images/pagespictures/ide/waste/placing-bag.jpg","/images/pagespictures/ide/waste/open-display.jpg","/images/pagespictures/ide/waste/model.jpg"],
//     video: "",
//     description: "Development of a waste recycling system. The goal was to develop a product that will fit in most homes with the users in mind.The type of waste produced by a family varies and with this system the users can easily categorize and move their household waste, at the same time design their own sorting system. \n \n The benefit of this product ​ is its flexibility. The user can easily alter the adjustable frame as well as arrange the bins accordingly. The users can also utilize the bins to transport the waste to the recycling center.\n \n CAD: Solid edge Rendering: Keyshot Model: Foamboard",
//     technologies: ["Product design"],
//     link: ""
//   },
//   {
//     id: "Greenhouse",
//     name: "A man powered greenhouse",
//     category: "Industrial Design Engineering",
//     images: ["/images/pagespictures/ide/greenhouse/ksjgfhduo.jpg", "/images/pagespictures/ide/greenhouse/DSC01360.JPG.jpg", "/images/pagespictures/ide/greenhouse/DSC00909.JPG.jpg"],
//     video: "",
//     description: "Why not use the energy from people working out? The question led to the design of a man powered greenhouse.\n \n This mechanical design uses a persons energy to pump water into a greenhouse, and the energy can also be used to power artificial sunlight. The gym members will collaboratively grow crops in the green house that can be sold in the gym café. \n \nCAD: Solid edge \n \nRendering: 3D studio max \n \nModel: wood, plastic",
//     technologies: ["Product Development"],
//     link: ""
//   },
//   {
//     id: "toy-development",
//     name: "Toy Development",
//     category: "Industrial Design Engineering",
//     images: ["/images/pagespictures/ide/uglimals/treihop.jpg","/images/pagespictures/ide/uglimals/koncept.jpg","/images/pagespictures/ide/uglimals/leker.jpg"],
//     video: "",
//     description: "Product development of a line of toys for children aged 6-9. Uglymals were developed with input from focus groups consisting of children. With the interchangeable design (ability to swap out any part) kids are encouraged to play without preconceived norms. They can freely create animals with any look and personality. \n \nModel: 3D-milling, spray paint, hand paint, clay, fabric, wood, glass \n \nReport: Illustrator, photoshop",
//     technologies: ["Product Development"],
//     link: ""
//   },
//   {
//     id: "Broadband-Telia",
//     name: "Better broadband service for Telia",
//     category: "Industrial Design Engineering",
//     images: [
//       "/images/pagespictures/ide/telia/uppackning2.png",
//       "/images/pagespictures/ide/telia/problem_journey_map_edited.png",
//       "/images/pagespictures/ide/telia/kalkylator3.jpg"
//     ],
//     video: "",
//     description: "The purpose of the project was to examine Telia's fixed broadband service for private customers from a customer perspective. The objective of this work has been to deliver useful customer insights and improvement proposals. \n \nIn the project, a service design methodology was used where the focus has been on interactions with customers. The initial phase was followed by three iterative loops with customer interactions, insight analysis, ideation and conceptualization. Customer insights and concepts have been tested, evaluated, and deepened during the project. In the last phase the result was processed and the insights were rated for easier implementation. \n \nA major problem area for many customers was the Wi-Fi and Wi-Fi range, because the technology is perceived as difficult and abstract. The conclusion is that Telia should help their clients to improve the Wi-Fi quality and the project work led to three ultimate concepts tested on customers. Also six recommendations were delivered to Telia. \n \nMethods: Qualitative Interviews, Trigger material, Co-creation, Customer Journey Maps",
//     technologies: ["Service Design"],
//     link: ""
//   },
//   {
//     id: "Cat-house",
//     name: "Cat house",
//     category: "Industrial Design Engineering",
//     images: ["/images/pagespictures/ide/katthus/katthus.jpg", "/images/pagespictures/ide/katthus/katthus1.jpg", "/images/pagespictures/ide/katthus/katthus3.jpg"],
//     video: "",
//     description: "Many cat houses don't fit in to the interior design. I couldn't find one that I wanted to have in my home. So I designed this house.",
//     technologies: ["Product Development"],
//     link: ""
//   }
//   ]
// }
