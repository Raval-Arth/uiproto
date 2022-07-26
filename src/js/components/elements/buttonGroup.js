const buttonGroup = () => {
random();

$(".generateCanavas").html("");
$(".titleCanavas").html(`
<div class="text-justify flex flex-col gap-2">
  <h1 class="pb-2 mb-2 text-xl font-bold border-b">${
    emojis[Math.floor(Math.random() * emojis.length)]
    } Button Groups</h1>
  <p>Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to
    space out groups, buttons, and more.</p>
</div>
`);

for (let index = 0; index < array_length; index++) { color=array.pop(); cup_item=cup_copy.pop();
  $(".generateCanavas").append(` <div class="w-full accordion">
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
      <div class="px-5 py-3 grid grid-cols-1 gap-y-2">

        <div class="flex text-${color}-900">
          <button
            class="px-2 py-1 w-fit border border-${color}-400 bg-${color}-50 rounded-l-md flex gap-2 items-center hover:bg-${color}-300 focus:bg-${color}-300">
            <img class="w-5 rotate-90" src="src/img/icons/arrow.svg" alt="">
          </button>
          <button
            class="px-2 py-1 w-fit border border-${color}-400 bg-${color}-50 rounded-r-md flex gap-2 items-center hover:bg-${color}-300 focus:bg-${color}-300">
            <img class="w-5 -rotate-90" src="src/img/icons/arrow.svg" alt="">
          </button>
        </div>
        <div class="flex">
          <button class="px-2 py-1 border border-${color}-200 w-fit rounded-l-md flex gap-2 items-center">
            <img src="src/img/icons/bookmark-dark.svg" alt="">
            <p class=''>Bookmar</p>
          </button>
          <p class="px-2 py-1 border border-${color}-200 w-fit rounded-r-md">${Math.floor(
            Math.random() * 100
            )}k</p>
        </div>
        <div class="flex text-${color}-900">
          <div class="px-2 py-1 border border-${color}-400 bg-${color}-50 w-fit rounded-l-md flex gap-2 items-center">
            <img class="w-4" src="src/img/icons/bookmark-dark.svg" alt="">
            <p>Bookmar</p>
          </div>
          <p class="px-2 py-1 border border-${color}-400 w-fit bg-${color}-50 rounded-r-md">${Math.floor(
            Math.random() * 100
            )}k</p>
        </div>
        <div class="flex text-${color}-900">
          <button
            class="px-2 py-1 w-fit border border-${color}-400 bg-${color}-50 rounded-l-md flex gap-2 items-center hover:bg-${color}-300 focus:bg-${color}-300">
            Day
          </button>
          <button
            class="px-2 py-1 w-fit border border-${color}-400 bg-${color}-50 flex gap-2 items-center hover:bg-${color}-300 focus:bg-${color}-300">
            Month
          </button>
          <button
            class="px-2 py-1 w-fit border border-${color}-400 bg-${color}-50 rounded-r-md flex gap-2 items-center hover:bg-${color}-300 focus:bg-${color}-300">
            Year
          </button>
        </div>
      </div>
    </div>
  </div>
  `);
  }
  };