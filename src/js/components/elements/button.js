const button = () => {
  random();

  $(".generateCanavas").html("");
  $(".titleCanavas").html(`
<div class="text-justify flex flex-col gap-2">
  <h1 class="pb-2 mb-2 text-xl font-bold border-b">${
    emojis[Math.floor(Math.random() * emojis.length)]
  } Button</h1>
  <p>The button tag defines a clickable button.</p>
</div>
`);

  for (let index = 0; index < array_length; index++) {
    color = array.pop();
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
          names[Math.floor(Math.random() * 51)]
        }</button>
        <button class='px-4 py-1 flex items-center text-${color}-900 bg-${color}-50 border w-fit rounded-md gap-2'>
          ${names[Math.floor(Math.random() * 51)]}
          <img src="src/img/icons/message-dark.svg" class='w-5 h-5 rounded-md' />
        </button>
      </div>
    </div>
  </div>
  `);
  }
};
