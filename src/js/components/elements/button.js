const button = () => {
  let color = "";
  let cup_item = "";
  let joke = 0;
  let array = [...primary];
  let cup_copy = [...cupcake];
  let ranking_copy = [...ranking];

  array = array.sort(() => Math.random() - 0.5);
  cup_copy = cup_copy.sort(() => Math.random() - 0.5);
  ranking_copy = ranking_copy.sort(() => Math.random() - 0.5);
  joke = Math.floor(Math.random() * joke_length);

  $(".generateCanavas").html("");

  if (quote.jokes[joke].joke !== undefined) {
    quote.jokes[joke].joke = quote.jokes[joke].joke.replace(/(\n)/g, "<br>");
  }
  if (quote.jokes[joke].joke !== undefined) {
    $(".titleCanavas").html(`
      <p class='joke py-2 text-lg font-medium bg-slate-100 rounded leading-7'>${quote.jokes[joke].joke}</p>
      <h1 class="pb-2 mb-2 text-xl font-bold border-b">Button</h1>
      <p>Dropdowns are contextual overlays that may be toggled to display lists of links and other information. Toggle them by
          clicking on them. </p>
      `);
  } else {
    $(".titleCanavas").html(`
        <p class='joke py-1 text-lg font-medium bg-slate-100 rounded'>${quote.jokes[joke].setup}</p>
        <p class='joke py-1 text-lg font-medium bg-slate-100 rounded'>${quote.jokes[joke].delivery}</p>
        <h1 class="pb-2 mb-2 text-xl font-bold border-b">Button</h1>
        <p>Dropdowns are contextual overlays that may be toggled to display lists of links and other information. Toggle them by
          clicking on them. </p>
        `);
  }
  //       //   data = data.joke.toString().replace(/\n/g, "<br />");
  //     }
  //   );
  for (let index = 0; index < 22; index++) {
    color = array.pop();
    cup_item = cup_copy.pop();
    $(".generateCanavas").append(`
    <div class="w-full accordion">
    <div class="grid grid-cols-1 gap-4 text-${color}-900">
        <div class="flex items-center justify-between px-5 py-3 bg-white rounded-lg shadow">
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
        <div class="shadow-md h-min overflow-hidden bg-white rounded-lg shadow-${color}-200">
            <div class="px-5 py-3 grid grid-cols-2 gap-y-2">
                <button class='px-4 py-1 border w-fit rounded-md '>${
                  ranking_copy[Math.floor(Math.random() * 51)]
                }</button>
                <button class='px-4 py-1 flex items-center text-white bg-${color}-400 border w-fit rounded-md gap-2'>
                    <img src="src/img/message.svg" class='w-5 h-5 rounded-md' />
                    ${ranking_copy[Math.floor(Math.random() * 51)]}
                </button>
                <button
                    class='px-4 py-1 flex items-center text-${color}-900 bg-${color}-50 border w-fit rounded-md gap-2'>
                    ${ranking_copy[Math.floor(Math.random() * 51)]}
                    <img src="src/img/message-dark.svg" class='w-5 h-5 rounded-md' />
                </button>
            </div>
        </div>
    </div>
    `);
  }
};
