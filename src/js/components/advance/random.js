var color = "";
var cup_item = "";
var title_item = "";
var random_gen_item = 1;
var array = [...primary];
var cup_copy = [...cupcake];
var ranking_copy = [...ranking];

const random = () => {
  array = [...primary];
  cup_copy = [...cupcake];
  ranking_copy = [...ranking];
  array = array.sort(() => Math.random() - 0.5);
  cup_copy = cup_copy.sort(() => Math.random() - 0.5);
  ranking_copy = ranking_copy.sort(() => Math.random() - 0.5);
};

const random_gen = () => {
  let dice = [1, 2, 3, 4, 5, 6];

  $(".random_gen").html(
    `
            <div class="">
                <img src="src/img/dice/${
                  dice[Math.floor(Math.random() * 6)]
                }.svg" class="w-10 h-10" alt="">
            </div>
            `
  );
  switchTab(random_gen_item);
  profile();
};

let profileico_temp = Math.floor(Math.random() * 4999);
document
  .querySelector(".profileico")
  .setAttribute("href", "src/img/profile/" + profileico_temp + ".svg");
document
  .querySelector(".profileimg")
  .setAttribute("src", "src/img/profile/" + profileico_temp + ".svg");

random_gen();
