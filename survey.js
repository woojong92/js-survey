const surveyItemAddBtn = document.querySelector(".survey-item-add-btn");
const surveyContainer = document.querySelector(".survey-container");

let surveys = [];

function deleteSurveyItem(event) {
  const btn = event.target;
  const surveyTypeContainer = btn.parentNode;
  const surveyItemContainer = surveyTypeContainer.parentNode;
  console.log(surveyItemContainer.id);

  const cleanSurveys = surveys.filter((id) => id !== surveyItemContainer.id);
  surveys = cleanSurveys;

  const surveyContainerNode = surveyItemContainer.parentNode;
  surveyContainerNode.removeChild(surveyItemContainer);
}

function deleteOption(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const ul = li.parentNode;
  console.log(btn);
  console.log(li);
  console.log(ul);
  ul.removeChild(li);
}

function addOption(event) {
  const btn = event.target;
  const surveyItemContainer = btn.parentNode;
  const ul = surveyItemContainer.childNodes[2];

  const liSurveyItemOptionContainer = document.createElement("li");
  const inputSurveyItemOption = document.createElement("input");
  const optionDelBtn = document.createElement("div");

  liSurveyItemOptionContainer.classList.add("li-survey-item-option-container");
  inputSurveyItemOption.classList.add("input-survey-item-option");
  inputSurveyItemOption.setAttribute("type", "text");
  inputSurveyItemOption.setAttribute("placeholder", "옵션");
  optionDelBtn.classList.add("option-del-btn");
  optionDelBtn.classList.add("del-btn");
  optionDelBtn.innerHTML = "삭제";
  optionDelBtn.addEventListener("click", deleteOption);

  liSurveyItemOptionContainer.appendChild(inputSurveyItemOption);
  liSurveyItemOptionContainer.appendChild(optionDelBtn);
  ul.appendChild(liSurveyItemOptionContainer);
}

function addSurveyItem(event) {
  console.log("addSurveyItem");

  const newId = "_" + Math.random().toString(36).substr(2, 9);
  surveys.push(newId);

  const surveyItemContainer = document.createElement("div");
  const surveyItemTypeContainer = document.createElement("div");
  const surveyItemType = document.createElement("text");
  const surveyItemDelBtn = document.createElement("div");

  surveyItemContainer.classList.add("survey-item-container");
  surveyItemTypeContainer.classList.add("survey-item-type-container");
  surveyItemType.classList.add("survey-item-type");
  surveyItemType.innerHTML = "질문";

  surveyItemDelBtn.classList.add("survey-item-del-btn");
  surveyItemDelBtn.classList.add("del-btn");
  surveyItemDelBtn.innerHTML = "질문 삭제";

  surveyItemDelBtn.addEventListener("click", deleteSurveyItem);

  const inputSurveyItemTitle = document.createElement("input");
  inputSurveyItemTitle.classList.add("input-survey-item-title");
  inputSurveyItemTitle.setAttribute("type", "text");
  inputSurveyItemTitle.setAttribute(
    "placeholder",
    "질문의 내용을 입력해주세요."
  );

  const ul = document.createElement("ul");
  const liSurveyItemOptionContainer = document.createElement("li");
  const inputSurveyItemOption = document.createElement("input");
  const optionDelBtn = document.createElement("div");

  liSurveyItemOptionContainer.classList.add("li-survey-item-option-container");
  inputSurveyItemOption.classList.add("input-survey-item-option");
  inputSurveyItemOption.setAttribute("type", "text");
  inputSurveyItemOption.setAttribute("placeholder", "옵션");
  optionDelBtn.classList.add("option-del-btn");
  optionDelBtn.classList.add("del-btn");
  optionDelBtn.innerHTML = "삭제";
  optionDelBtn.addEventListener("click", deleteOption);

  const optionAddBtn = document.createElement("div");
  optionAddBtn.classList.add("option-add-btn");
  optionAddBtn.classList.add("add-btn");
  optionAddBtn.innerHTML = "옵션 추가하기";
  optionAddBtn.addEventListener("click", addOption);

  liSurveyItemOptionContainer.appendChild(inputSurveyItemOption);
  liSurveyItemOptionContainer.appendChild(optionDelBtn);
  ul.appendChild(liSurveyItemOptionContainer);

  surveyItemTypeContainer.appendChild(surveyItemType);
  surveyItemTypeContainer.appendChild(surveyItemDelBtn);

  surveyItemContainer.appendChild(surveyItemTypeContainer);
  surveyItemContainer.appendChild(inputSurveyItemTitle);
  surveyItemContainer.appendChild(ul);
  surveyItemContainer.appendChild(optionAddBtn);

  surveyItemContainer.id = newId;

  surveyContainer.appendChild(surveyItemContainer);
}

function handleSubmit(event) {
  event.preventDefault();
  const surveyTitle = document.querySelector(".input-survey-title");
  console.log(surveyTitle.value);

  for (let i = 0; i < surveys.length; i++) {
    console.log(i);
    const survey = document.getElementById(surveys[i]);
    const surveyItemTitle = survey.childNodes[1];
    console.log(surveyItemTitle.value);
    const ul = survey.childNodes[2];
    ul.childNodes.forEach((c) => console.log(c));

    console.log(survey);
  }
}

function init() {
  surveyItemAddBtn.addEventListener("click", addSurveyItem);
  surveyContainer.addEventListener("submit", handleSubmit);
}

init();
