const badge = () => {
  random();
  $(".generateCanavas").html("");
  $(".titleCanavas").html(`
<h1 class="pb-2 mb-2 text-xl font-bold border-b">${
    emojis[Math.floor(Math.random() * emojis.length)]
  } Badge</h1>
<p>Badges are numerical indicators of how many items are associated with a link:
    Badges can also be used inside other elements, such as buttons:

</p>
`);
  for (let index = 0; index < array_length; index++) {
    color = array.pop();
    cup_item = cup_copy.pop();
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
            <div class="px-5 py-3 grid grid-cols-1 gap-y-2">
                <div class='px-4 py-1 border w-fit rounded-full '>
                    ${names[Math.floor(Math.random() * 51)]}</div>
                <div class='relative px-4 py-1 flex items-center border w-fit rounded-lg gap-2'>
                    <div class='-mx-0.5 text-${color}-50 text-xs absolute -top-2 -right-2 px-1 bg-${color}-400 rounded-full'>${Math.floor(Math.random() * 10)}</div>
                    ${ranking_copy[Math.floor(Math.random() * 51)]}
                </div>
                <div class='px-4 py-1 flex items-center border w-fit rounded-full gap-2'>
                    <div class='w-2 h-2 bg-${color}-900 rounded-full'></div>
                    ${ranking_copy[Math.floor(Math.random() * 51)]}
                </div>
                <div class='px-4 py-1 flex items-center justify-between border w-fit rounded-full gap-2'>
                    ${names[Math.floor(Math.random() * 51)]}
                    <img src="src/img/icons/cross.svg" class="w-4 h-4" alt="">
                </div>
            </div>
        </div>
    </div>
    `);
  }
};
