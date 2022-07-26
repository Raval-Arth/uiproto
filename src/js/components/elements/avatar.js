const avatar = () => {
  let color = "";
  let cup_item = "";
  let profile = 0;
  array = [...primary];
  cup_copy = [...cupcake];
  ranking_copy = [...ranking];
  array = array.sort(() => Math.random() - 0.5);
  cup_copy = cup_copy.sort(() => Math.random() - 0.5);
  ranking_copy = ranking_copy.sort(() => Math.random() - 0.5);
  $(".generateCanavas").html("");
  $(".titleCanavas").html(`
<h1 class="pb-2 mb-2 text-xl font-bold border-b">${
    emojis[Math.floor(Math.random() * emojis.length)]
  } Avatar</h1>
<p>The avatar component is used to show circular user profile photos. You may use this component to dynamically scale
    and apply a border radius to responsive pictures, icons, and text. </p>
`);

  for (let index = 0; index < array_length; index++) {
    color = array.pop();
    cup_item = cup_copy.pop();
    ranking_item = ranking_copy.pop();
    profile = Math.floor(Math.random() * profile_lenght);

    $(".generateCanavas").append(` <div class="w-full accordion">
    <div class="grid grid-cols-1 gap-4 text-${color}-900">
        <div class="flex items-center justify-between px-5 py-3 bg-white rounded-lg border">
            <div class="flex items-center gap-4">
                <div class="w-5 h-5 bg-${color}-50 rounded-full"></div>
                <div class="w-5 h-5 bg-${color}-100 rounded-full"></div>
                <div class="w-5 h-5 bg-${color}-300 rounded-full"></div>
                <div class="w-5 h-5 bg-${color}-900 rounded-full"></div>
            </div>
            <div onclick="copyToClipBoard(this)" class="text-${color}-900 px-2 bg-${color}-100 rounded-full">
                copy
            </div>
        </div>
        <div class="h-min overflow-hidden bg-white rounded-lg border">
            <div class="px-5 py-3 ">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-1">
                        <img onclick="collapseControl(this)" src="src/img/profile/${profile}.svg"
                            class="w-7 h-7 p-0.5 rounded-full bg-${color}-100" alt="" />
                        <p class="py-1 text-lg  font-semibold">${
                          names[Math.floor(Math.random() * names.length)]
                        }</p>
                    </div>
                    <p class="py-1 lowercase">@${ranking_item}</p>

                </div>
                <p class="py-1 clamp">
                    ${cup_item}
                </p>
            </div>
        </div>
    </div>
    </div>
    `);
  }
};
