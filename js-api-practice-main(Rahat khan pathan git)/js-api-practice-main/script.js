const buttons = document.getElementsByClassName("cat-btn");
const cardContainer = document.getElementById("card-container");
const noContent = document.getElementById("no-content");
const loader = document.getElementById("loader");
let curData = [];
const formatSecondsAsHoursAndMinutes = (seconds) => {
    const hr = Math.floor(seconds / 3600);
    seconds -= hr * 3600;
    const mn = Math.floor(seconds / 60);
    return `${hr}hrs ${mn} min ago`;
};
const loadDataToUI = (allData) => {
    curData = allData;
    cardContainer.innerHTML = "";
    for (const data of allData) {
        const card = document.createElement("div");
        card.innerHTML = `<div class="card rounded-xl w-56 sm:w-72 h-72">
        <figure>
            <img
                src=${data.thumbnail}
                alt="Shoes"
                class="rounded-xl w-full h-40"
            />
            <p class="time absolute top-[125px] right-[10px] px-2 py-1 rounded-md font-light text-white bg-black text-[10px]">${formatSecondsAsHoursAndMinutes(
                data.others.posted_date
            )}</p>
        </figure>
        <div class="card-body px-0 py-3">
            <div class="flex space-x-4">
                <div class="w-[15%]">
                    <img
                        src=${data.authors[0].profile_picture}
                        alt=""
                        class="rounded-[50%] w-[50px] h-[40px]"
                    />
                    
                </div>
                <div class="w-[85%] space-y-1">
                    <p class="font-extrabold text-base">
                        ${data.title}
                    </p>
                    <div
                        class="flex justify-start items-center space-x-2"
                    >
                        <span
                            class="font-normal text-gray-500 text-sm"
                        >
                            ${data.authors[0].profile_name}
                        </span>
                        <img
                            class="inline ver"
                            src="/images/ver.svg"
                            alt=""
                        />
                    </div>
                    <p
                        class="font-normal text-gray-500 text-sm"
                    >
                        ${data.others.views} views
                    </p>
                </div>
            </div>
        </div>
    </div>`;
        if (!data.others.posted_date) {
            card.getElementsByClassName("time")[0].style.display = "none";
        }
        if (data.authors[0].verified !== true) {
            card.getElementsByClassName("ver")[0].style.display = "none";
        }
        cardContainer.appendChild(card);
    }
};
const getDataById = async (id) => {
    loader.style.display = "block";
    const res = await fetch(
        `https://openapi.programming-hero.com/api/videos/category/${id}`
    );
    const data = await res.json();
    const allData = data.data;
    loadDataToUI(allData);
    loader.style.display = "none";
    if (allData.length > 0) {
        noContent.style.display = "none";
    } else {
        noContent.style.display = "flex";
    }
};
const handleButtonClick = (event) => {
    noContent.style.display = "none";
    for (const button of buttons) {
        if (button.classList.contains("cat-btn2")) {
            button.classList.remove("cat-btn2");
        }
    }
    event.target.classList.add("cat-btn2");
    getDataById(event.target.id);
};
const getAllCategories = async () => {
    loader.style.display = "block";
    const res = await fetch(
        "https://openapi.programming-hero.com/api/videos/categories"
    );
    const data = await res.json();
    loader.style.display = "none";
    const categories = data.data;
    let x = 0;
    for (const cat of categories) {
        const btn = document.createElement("button");
        if (x == 0)
            btn.innerHTML = `<button class="btn md:btn-sm btn-xs px-4 cat-btn cat-btn2" id=${cat?.category_id}>${cat?.category}</button>`;
        else
            btn.innerHTML = `<button class="btn md:btn-sm btn-xs px-4 cat-btn" id=${cat?.category_id}>${cat?.category}</button>`;
        btn.addEventListener("click", handleButtonClick);

        if (x == 0) {
            x = 1;
            getDataById(cat?.category_id);
        }
        document.getElementById("btn-grp-id").appendChild(btn);
    }
};
getAllCategories();
const sortByView = () => {
    curData.sort(function (a, b) {
        return (
            parseFloat(b.others.views.slice(0, -1)) -
            parseFloat(a.others.views.slice(0, -1))
        );
    });
    loadDataToUI(curData);
};
document
    .getElementById("navigateButton")
    .addEventListener("click", function () {
        // Redirect to page2.html
        window.location.href = "blog.html";
    });
