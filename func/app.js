const url = "https://openapi.programming-hero.com/api/levels/all";

const lessonData = async () => {
  const res = await fetch(url);

  const data = await res.json();

  showLevels(data.data);
};
lessonData();
const showLevels = (levels) => {
  const container = document.getElementById("lessons");

  levels.forEach((level) => {
    const button = document.createElement("button");
    button.innerHTML = `
        <button onclick="loadLevel(${level.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-brands fa-leanpub"></i>
        Lesson - ${level.level_no}</button>`;

    container.append(button);
  });
};

const loadLevel = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => showWordOnUi(data.data));
};

const showWordOnUi = async (words) => {
  const currentData = document.getElementById("currentData");

  if (words.length < 1) {
    currentData.innerHTML = `

        <div class="font-bangla w-6/12 mx-auto col-span-3 rounded-2xl p-5 text-center">

            <img class="mx-auto" src="../assets/alert-error.png"/>
            <p class="mb-2">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>


            
            <p class="text-3xl text-gray-700 font-medium">
                নেক্সট Lesson এ যান
            </p>
        </div>
`;
return
  }

  currentData.innerHTML = "";
  words.forEach((word) => {
    // console.log(word);
    const wordDiv = document.createElement("div");

    wordDiv.innerHTML = `
            <div class="bg-white rounded-2xl p-5 h-72 text-center shadow-sm">

                <!-- Word -->
                <h2 class="text-3xl font-bold mb-2">${word.word}</h2>

                <!-- Subtitle -->
                <p class="text-gray-600 mb-4">Meaning /Pronounciation</p>

                <!-- Meaning -->
                <p class="text-2xl text-gray-700 font-medium mb-10">
                    "${word.meaning} / ${word.pronunciation}"
                </p>

                <!-- Buttons -->
                <div class="flex justify-between mb-0">

                    <!-- Info Button -->
                    <button class="bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
                        <span class="text-lg">ℹ️</span>
                    </button>

                    <!-- Sound Button -->
                    <button class="bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
                        <span class="text-lg">🔊</span>
                    </button>
                </div>
        </div>`;
    currentData.append(wordDiv);
  });
};
