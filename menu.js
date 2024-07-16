const menuItems = [
  {
    name: "비빔밥",
    description: "밥 위에 나물, 고기, 고추장 등을 얹고 비벼 먹는 한국 요리",
    image_src:
      "https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg",
    food_category: "Korean",
  },
  {
    name: "김치찌개",
    description: "김치와 돼지고기 등을 넣고 끓인 한국의 찌개 요리",
    image_src:
      "https://static.wtable.co.kr/image-resize/production/service/recipe/291/4x3/a2421dff-e56c-40bd-8b40-06a91fc000a9.jpg",
    food_category: "Korean",
  },
  {
    name: "불고기",
    description: "양념한 고기를 구워서 먹는 한국 요리",
    image_src:
      "https://cloudinary-cdn.whisk.com/image/upload/g_auto,c_fill,q_60,f_auto,h_630,w_1200/v1704379455/v3/user-recipes/8f5b94552e8a96971ef1fe1e0b10eb69.jpg",
    food_category: "Korean",
  },
  {
    name: "떡볶이",
    description: "떡과 어묵을 고추장 양념에 볶아 만든 한국의 간식",
    image_src:
      "https://semie.cooking/image/contents/recipe/lm/bg/rfifbtxa/127147885dkig.jpg",
    food_category: "Korean",
  },
  {
    name: "잡채",
    description: "당면과 여러 채소, 고기를 볶아 만든 한국 요리",
    image_src:
      "https://cooksomssi.co.kr/web/product/tiny/202211/cce8c3b2910dfcc37acea028b1903a88.jpg",
    food_category: "Korean",
  },
  {
    name: "토마토 파스타",
    description: "토마토 소스와 파스타면을 합친 전통 이탈리아 요리",
    image_src:
      "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/fca1b1c8f05592f409b6fbe702e2112a1.jpg",
    food_category: "Italic",
  },
  {
    name: "얼큰짬뽕",
    description: "고추, 해산물, 면 등 각종 재료로 만든 얼큰한 중국 요리",
    image_src:
      "https://images.chosun.com/resizer/KFeMfYbaDchSIk1lDsUjhqUfzbg=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/YPSL2DAN5VDJ5C3HNXWHKJGCRU.jpg",
    food_category: "Chinese",
  },
  {
    name: "모듬초밥",
    description: "고기, 해산물 등 각종 재료를 올려 만든 신선한 일본 요리 ",
    image_src:
      "https://namsufood0.cafe24.com/web/product/big/202205/4d6cae6d0074563395532baab8b96313.jpg",
    food_category: "Japanese",
  },
];

function displayMenu(category=null) {
  $("#my_cards").empty();
  if(category) {
    menuItems.forEach((e) => {
        if (e["food_category"] === category) {
          let temp_html = `
            <div class="row g-0">
                            <div class="col-md-4">
                                <img src=${e["image_src"]} class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${e["name"]}</h5>
                                    <p class="card-text">${e["description"]}</p>
                    </div>
                </div>
            </div>
            `;
          $("#my_cards").append(temp_html);
        }
      });
  }
  else {
    menuItems.forEach((e) => {
      let temp_html = `
        <div class="row g-0">
                            <div class="col-md-4">
                                <img src=${e["image_src"]} class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${e["name"]}</h5>
                                    <p class="card-text">${e["description"]}</p>
                    </div>
                </div>
            </div>
            `;
      $("#my_cards").append(temp_html);
    });
  }
}

function filter_food_desc() {
  const food_desc = $("#search_input_data").val();
  $("#my_cards").empty();
  menuItems.forEach((e) => {
    if (e["description"].indexOf(food_desc) !== -1) {
      let temp_html = `
          <div class="row g-0">
                          <div class="col-md-4">
                              <img src=${e["image_src"]} class="img-fluid rounded-start" alt="...">
                          </div>
                          <div class="col-md-8">
                              <div class="card-body">
                                  <h5 class="card-title">${e["name"]}</h5>
                                  <p class="card-text">${e["description"]}</p>
                  </div>
              </div>
          </div>
          `;
      $("#my_cards").append(temp_html);
    }
  });
}
