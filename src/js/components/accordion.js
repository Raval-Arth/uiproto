const collapseControl = (el) => {
  console.log();
  $(el.parentNode.parentNode.childNodes[3]).css("transition", "0.15s ease-out");
  if ($(el.parentNode.parentNode.childNodes[3]).hasClass("collapse")) {
    $(el).css("transform", "rotate(180deg)");
    $(el.parentNode.parentNode.childNodes[3]).removeClass("collapse");
  } else {
    $(el).css("transform", "rotate(0deg)");
    $(el.parentNode.parentNode.childNodes[3]).addClass("collapse");
  }
};
const accordion = () => {
  let color = "";
  array = [...primary];
  array = array.sort(() => Math.random() - 0.5);
  $(".generateCanavas").html("");
  $(".titleCanavas").html(`
  <h1 class="pb-2 mb-2 text-xl font-bold border-b">Accordion</h1>
  <p>The accordion component allows the user to show and hide sections of related content on a page</p>
  `);
  for (let index = 0; index < 22; index++) {
    color = array.pop();
    $(".generateCanavas").append(` <div
    class="w-full accordion">
    <div class="grid grid-cols-1 gap-4 text-justify text-${color}-900">
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
        <div class="shadow-md bg-white rounded-lg shadow-${color}-200">
            <div class="px-5 py-3 ">
                <div class="flex items-center justify-between">
                    <p class="py-1 text-lg md:text-xl font-semibold">Collapsible Grop 1 </p>
                    <img onclick="collapseControl(this)" src="src/img/arrow.svg" class="w-6 p-0.5 rounded-full bg-${color}-100" alt="" />
                </div>
                <div id="collapse" class="collapse">
                    <p class="text-${color}-900/90">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                        Suspendisse lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. lacus ex, sit amet blandit leo lobortis eget.
                    </p>
                </div>
            </div>
            <div class="px-5 py-3 ">
                <div class="flex items-center justify-between">
                    <p class="py-1 text-lg md:text-xl font-semibold">Collapsible Grop 2 </p>
                    <img onclick="collapseControl(this)" src="src/img/arrow.svg" class="w-6 p-0.5 rounded-full bg-${color}-100" alt="" />
                </div>
                <div id="collapse" class="collapse">
                    <p class="text-${color}-900/90">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                        Suspendisse lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. lacus ex, sit amet blandit leo lobortis eget.
                    </p>
                </div>
            </div>
            <div class="px-5 py-3 ">
                <div class="flex items-center justify-between">
                    <p class="py-1 text-lg md:text-xl font-semibold">Collapsible Grop 3 </p>
                    <img onclick="collapseControl(this)" src="src/img/arrow.svg" class="w-6 p-0.5 rounded-full bg-${color}-100" alt="" />
                </div>
                <div id="collapse" class="collapse">
                    <p class="text-${color}-900/90">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                        Suspendisse lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. lacus ex, sit amet blandit leo lobortis eget.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
    `);
  }
};
