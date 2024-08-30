let storage = [
    {
      quesId: "1",
      question:
        "A lady meets a person in the market who is the wife of the brother of her husband. How is the lady related to the person?",
      options: ["cousin", "sister", "sister-in-law", "nephew"],
      crctAnswer: "sister-in-law",
      userAnswer: null,
      visited: false,
    },
    {
      quesId: "2",
      question:
        "If 'A x D' means 'A is the sister of D', 'A + D' means 'D is the daughter of A' and 'A ÷ d' means 'A is the mother of D', then how will 'N is the aunt of M' be denoted?",
      options: ["M + L X N", "M ÷ L + N", "L X N ÷M", "N X L ÷ M"],
      crctAnswer: "N X L ÷ M",
      userAnswer: null,
      visited: false,
    },
    {
      quesId: "3",
      question: `Ronit's son Rohit, says to a girl, "your father is the only brother of my mother who is the only child of Mr. Rakesh". How is Rohit related to girl?`,
      options: ["sister", "Cousin", "brother", "brother-in-law"],
      crctAnswer: "Cousin",
      userAnswer: null,
      visited: false,
    },
    {
      quesId: "4",
      question:
        "If 14th October 2005 is Friday then which day is 14th October 2009?",
      options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      crctAnswer: "Wednesday",
      userAnswer: null,
      visited: false,
    },
    {
      quesId: "5",
      question: "If today is Monday then which day of the week is after 59 days.",
      options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      crctAnswer: "Thursday",
      userAnswer: null,
      visited: false,
    },
    {
      quesId: "6",
      question:
        "If 14th October 2005 is Friday then which day is 14th October 2006?",
      options: ["Tuesday", "Saturday", "Thursday", "Friday"],
      crctAnswer: "Saturday",
      userAnswer: null,
      visited: false,
    },
    {
      quesId: "7",
      question:
        "If 6th March, 2005 is Sunday, what was the day of the week on 6th March, 2002?",
      options: ["Tuesday", "Saturday", "Thursday", "None of these"],
      crctAnswer: "None of these",
      userAnswer: null,
      visited: false,
    },
  ];
  
  let questionCont = document.querySelector("#actual-question");
  let optionCont = document.querySelector("#actual-option");
  let btnCont = document.querySelector("#actual-btn");
  let footer = document.querySelector("footer");
  let previousBtn = footer.querySelectorAll("button")[0];
  let nextBtn = footer.querySelectorAll("button")[1];
  let saveBtn = footer.querySelectorAll("button")[2];
  let submitBtn = footer.querySelectorAll("button")[3];
  let index = 0;
  //creating button based on total questions
  function createBtn() {
    storage.forEach((e) => {
      let btn = document.createElement("button");
      btn.id = e.quesId;
      btn.innerHTML = e.quesId;
      btnCont.append(btn);
    });
  }
  createBtn();
  
  function display() {
    questionCont.innerHTML = storage[index].question;
    optionCont.innerHTML = "";
    storage[index].options.map((e) => {
      let opt = document.createElement("input");
      opt.type = "radio";
      opt.value = e;
      opt.name = "option";
      let label = document.createElement("label");
      label.innerHTML = e;
  
      optionCont.append(opt, label);
    });
  }
  display();
  
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % storage.length;
    display();
  });
  
  previousBtn.addEventListener("click", () => {
    index = (index - 1 + storage.length) % storage.length;
  
    display();
  });
  saveBtn.addEventListener("click", () => {
    index = (index + 1) % storage.length;
    display();
  });