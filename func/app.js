const url = "https://openapi.programming-hero.com/api/levels/all";

const lessonData = async () => {
  const res = await fetch(url);

  const data = await res.json();

  console.log(showLevels(data.data));
};
lessonData();
const showLevels = (levels) => {
  const container = document.getElementById("lessons");

  levels.forEach((level) => {
    console.log(level);

    const button = document.createElement("button");
    button.innerHTML = `
        <button onclick="loadLevel(${level.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-brands fa-leanpub"></i>
        Lesson - ${level.level_no}</button>`;

        container.append(button)
  });
};

const loadLevel=(id)=>{
    console.log(id);
    

}