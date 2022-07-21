var contrast = 5;
window.onload = function () {
  avatar();
};

if ($(window).width() < 768) {
  $("#menuIcon").removeClass("hidden");
  $(".mobileSidebarCanvas").html(sidebarComponent());
} else {
  $("#menuIcon").addClass("hidden");
  $(".desktopSidebarCanvas").html(sidebarComponent());
  $("#sidebar").addClass("open");
  $("#sidebar").addClass("w-full");
}

const sidenavToggle = () => {
  if ($("#sidebar").hasClass("open")) {
    $("#sidebar").removeClass("open");
    $("#sidebar").removeClass("fixed");
  } else {
    $("#sidebar").addClass("open");
    $("#sidebar").addClass("fixed");
  }
};

const switchTab = (el) => {
  random_gen_item = el;
  profile();
  switch (parseInt(el)) {
    case 1:
      avatar();
      break;
    case 2:
      accordion();
      break;
    case 3:
      dropdown();
      break;
    case 4:
      badge();
      break;
    case 5:
      button();
      break;
    case 6:
      buttonGroup();
      break;

    default:
      avatar();
      break;
  }
};

/**
 * Calculate brightness value by RGB or HEX color.
 * @param color (String) The color value in RGB or HEX (for example: #000000 || #000 || rgb(0,0,0) || rgba(0,0,0,0))
 * @returns (Number) The brightness value (dark) 0 ... 255 (light)
 */

function brightnessByColor(color) {
  var color = "" + color,
    isHEX = color.indexOf("#") == 0,
    isRGB = color.indexOf("rgb") == 0;
  if (isHEX) {
    const hasFullSpec = color.length == 7;
    var m = color.substr(1).match(hasFullSpec ? /(\S{2})/g : /(\S{1})/g);
    if (m)
      var r = parseInt(m[0] + (hasFullSpec ? "" : m[0]), 16),
        g = parseInt(m[1] + (hasFullSpec ? "" : m[1]), 16),
        b = parseInt(m[2] + (hasFullSpec ? "" : m[2]), 16);
  }
  if (isRGB) {
    var m = color.match(/(\d+){3}/g);
    if (m)
      var r = m[0],
        g = m[1],
        b = m[2];
  }
  if (typeof r != "undefined") return (r * 299 + g * 587 + b * 114) / 1000;
}

const copyToClipBoard = (el) => {
  /* Get the text field */
  console.log(el);
  let copyText =
    el.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].innerHTML;

  let class_temp = $(".copy_text").attr("class");
  if (class_temp !== undefined) {
    $(".copy_text").attr("class", class_temp.replace("900/30", "900"));
    $(".copy_text").removeClass("copy_text");
  }

  el.classList = el.className.replace("900", "900/30");
  el.classList.add("copy_text");

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText);

  /* Alert the copied text */
  // alert("Copied the text: " + copyText);
};

const generateCard = () => {
  let color = "";
  array = [...primary];
  array = array.sort(() => Math.random() - 0.5);
  $(".generateCanavas").html("");
  for (let index = 0; index < 22; index++) {
    color = array.pop();
    $(".generateCanavas").append(` <div
        class="w-full profile px-5 pt-3 pb-6 bg-white shadow-md shadow-${color}-200 rounded-lg">
        <div class="grid grid-cols-1 gap-4">
            <div>
                <div class="pb-2 flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="w-5 h-5 bg-${color}-50 rounded-full"></div>
                        <div class="w-5 h-5 bg-${color}-100 rounded-full"></div>
                        <div class="w-5 h-5 bg-${color}-300 rounded-full"></div>
                        <div class="w-5 h-5 bg-${color}-900 rounded-full"></div>
                    </div>
                    <div onclick="copyToClipBoard(this)" class="text-${color}-900 px-2 bg-${color}-100 rounded-full">
                        copy</div>
                </div>
                <p class="text-justify font-bold text-xl text-${color}-900">Profile</p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Possimus, nulla.
                </p>
            </div>

            <div>
                <p class="py-1">First Name</p>
                <p></p>
                <input type="text" placeholder="First Name"
                    class="px-2 py-1 text-${color}-900 bg-${color}-100 rounded-lg outline-none" />
            </div>
            <div>
                <p class="py-1">Last Name</p>
                <p></p>
                <input type="text" placeholder="Last Name"
                    class="px-2 py-1 text-${color}-900 bg-${color}-100 rounded-lg outline-none" />
            </div>
        </div>
        </div>
        `);
  }
};

const generateTimeLine = () => {
  let color = "";
  array = [...primary];
  array = array.sort(() => Math.random() - 0.5);
  $(".generateCanavas").html("");
  for (let index = 0; index < 22; index++) {
    color = array.pop();
    $(".generateCanavas").append(` <div
            class="w-full timeline px-5 pt-3 pb-6 bg-white text-${color}-900/50 shadow-md shadow-${color}-200 rounded-lg">
            <div class="grid grid-cols-1 gap-4">
                <div>
                    <div class="pb-2 flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div class="w-5 h-5 bg-${color}-50 rounded-full"></div>
                            <div class="w-5 h-5 bg-${color}-100 rounded-full"></div>
                            <div class="w-5 h-5 bg-${color}-300 rounded-full"></div>
                            <div class="w-5 h-5 bg-${color}-900 rounded-full"></div>
                        </div>
                        <div onclick="copyToClipBoard(this)"
                            class="text-${color}-900 px-2 bg-${color}-100 rounded-full">copy</div>
                    </div>
                    <div class="py-2"></div>
                    <p class="font-bold text-xl text-${color}-900">Step 1 of 5</p>
                    <div class="py-2"></div>
                    <div class="flex gap-4 text-${color}-900 font-medium md:font-semibold">
                        <div>
                            <div class="w-5 h-5 border-4 border-${color}-400 rounded-full"></div>
                            <div class="my-0.5 w-7/12 h-3 border-r-2 border-${color}-400"></div>
                        </div>
                        <p>Timetable</p>
                    </div>
                    <div class="flex gap-4">
                        <div>
                            <div class="w-5 h-5 border-2 border-${color}-400 rounded-full"></div>
                            <div class="my-0.5 w-7/12 h-3 border-r-2 border-${color}-400"></div>
                        </div>
                        <p>Bus Deatail</p>
                    </div>
                    <div class="flex gap-4">
                        <div>
                            <div class="w-5 h-5 border-2 border-${color}-400 rounded-full"></div>
                            <div class="my-0.5 w-7/12 h-3 border-r-2 border-${color}-400"></div>
                        </div>
                        <p>Seat Selection</p>
                    </div>
                    <div class="flex gap-4">

                        <div class="w-5 h-5 border-2 border-${color}-400 rounded-full"></div>
                        <p>Payment Gateway</p>
                    </div>

                </div>
            </div>
            `);
  }
};

const generateItemCard1 = () => {
  let color = "";
  array = [...primary];
  array = array.sort(() => Math.random() - 0.5);
  $(".generateCanavas").html("");
  for (let index = 0; index < 22; index++) {
    color = array.pop();
    $(".generateCanavas").append(` <div
                class="w-full timeline px-5 pt-3 pb-6 bg-white text-${color}-900/50 shadow-md shadow-${color}-200 rounded-lg">
                <div class="grid grid-cols-1 gap-4">
                    <div>
                        <div class="pb-2 flex items-center justify-between">
                            <div class="flex items-center gap-4">
                                <div class="w-5 h-5 bg-${color}-50 rounded-full"></div>
                                <div class="w-5 h-5 bg-${color}-100 rounded-full"></div>
                                <div class="w-5 h-5 bg-${color}-300 rounded-full"></div>
                                <div class="w-5 h-5 bg-${color}-900 rounded-full"></div>
                            </div>
                            <div onclick="copyToClipBoard(this)"
                                class="text-${color}-900 px-2 bg-${color}-100 rounded-full">copy</div>
                        </div>
                        <div class="py-2"></div>
                        <div class="flex gap-2 border border-${`color`}-900 shadow-md shadow-${color}-200 rounded-lg">
                            <img src="src/img/icons/plant.jpg" alt="" class="w-24 md:w-20">
                            <div>
                                <p class="mt-2 font-bold text-lg text-${color}-900">Plant pot</p>
                                <p class="text-sm md:text-xs">USD $29.99</p>
                                <p class="text-${color}-900 text-sm md:text-xs">In stock: <span
                                        class="font-semibold">9</span> </p>
                            </div>
                        </div>


                    </div>
                </div>
                `);
  }
};

const tenTest = () => {
  $(".generateCanavas").html("");

  $(document.getElementById("testCounter")).removeClass("hidden");
  $("#test").hasClass("active")
    ? $("#test").addClass(
        "border-b-2 border-slate-900 font-semibold text-slate-900 active"
      )
    : ($(document.querySelector(".active")).removeClass(
        "border-b-2 border-slate-900 font-semibold text-slate-900 active"
      ),
      $("#test").addClass(
        "border-b-2 border-slate-900 font-semibold text-slate-900 active"
      ));

  $.ajax({
    type: "GET",
    url: "https://cdn.jsdelivr.net/npm/color-hunt-scrape@1.0.0/popular.json",
    success: function (result) {
      for (let index = 0; index < 9; ) {
        let colors = result[Math.floor(Math.random() * 1000)];
        if (
          (brightnessByColor(colors[0]) + 0.05) /
            (brightnessByColor(colors[3]) + 0.05) >
            contrast ||
          (brightnessByColor(colors[3]) + 0.05) /
            (brightnessByColor(colors[0]) + 0.05) >
            contrast
        ) {
          $(".generateCanavas").append(
            `
                    <div
                        class="w-full mx-5 px-5 py-2 my-2 test text-[${colors[3]}] bg-[${colors[0]}] shadow rounded-lg flex flex-col gap-4">
                        <div class="pb-2 flex gap-4">
                            <div class="w-5 h-5 bg-[${colors[0]}] rounded-full border border-[${colors[3]}]"></div>
                            <div class="w-5 h-5 bg-[${colors[1]}] rounded-full"></div>
                            <div class="w-5 h-5 bg-[${colors[2]}] rounded-full"></div>
                            <div class="w-5 h-5 bg-[${colors[3]}] rounded-full"></div>
                        </div>
                        <p>Test task 1</p>
                        <p>Test task 2</p>
                    </div>
                    `
          );
          index++;
        }
        if (
          (brightnessByColor(colors[0]) + 0.05) /
            (brightnessByColor(colors[2]) + 0.05) >
            contrast ||
          (brightnessByColor(colors[2]) + 0.05) /
            (brightnessByColor(colors[0]) + 0.05) >
            contrast
        ) {
          $(".generateCanavas").append(
            `
                    <div
                        class="w-full mx-5 px-5 py-2 my-2 test text-[${colors[2]}] bg-[${colors[0]}] shadow rounded-lg flex flex-col gap-4">
                        <div class="pb-2 flex gap-4">
                            <div class="w-5 h-5 bg-[${colors[0]}] rounded-full border border-[${colors[3]}]"></div>
                            <div class="w-5 h-5 bg-[${colors[1]}] rounded-full"></div>
                            <div class="w-5 h-5 bg-[${colors[2]}] rounded-full"></div>
                            <div class="w-5 h-5 bg-[${colors[3]}] rounded-full"></div>
                        </div>
                        <p>Test task 1</p>
                        <p>Test task 2</p>
                    </div>
                    `
          );
          index++;
        }
        if (
          (brightnessByColor(colors[0]) + 0.05) /
            (brightnessByColor(colors[1]) + 0.05) >
            contrast ||
          (brightnessByColor(colors[1]) + 0.05) /
            (brightnessByColor(colors[0]) + 0.05) >
            contrast
        ) {
          $(".generateCanavas").append(
            `
                    <div
                        class="w-full mx-5 px-5 py-2 my-2 test text-[${colors[1]}] bg-[${colors[0]}] shadow rounded-lg flex flex-col gap-4">
                        <div class="pb-2 flex gap-4">
                            <div class="w-5 h-5 bg-[${colors[0]}] rounded-full border border-[${colors[3]}]"></div>
                            <div class="w-5 h-5 bg-[${colors[1]}] rounded-full"></div>
                            <div class="w-5 h-5 bg-[${colors[2]}] rounded-full"></div>
                            <div class="w-5 h-5 bg-[${colors[3]}] rounded-full"></div>
                        </div>
                        <p>Test task 1</p>
                        <p>Test task 2</p>
                    </div>
                    `
          );
          index++;
        }
      }
    },
  });
};
