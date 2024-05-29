import { api } from "./api.js";
const { SERVER_USERS_API, SERVER_AUTH_API } = api;

const root = document.querySelector("#root");

const htmlLogin = `<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
<div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your
        account</h2>
</div>

<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
<div class="error"></div>
    <form class="space-y-6 login" action="#" method="POST">
        <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required
                    class="p-2.5 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
        </div>

        <div>
            <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div class="text-sm">
                    <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>
            </div>
            <div class="mt-2">
                <input id="password" name="password" type="password" autocomplete="current-password" required
                    class="p-2.5 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
        </div>

        <div>
            <button type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                in</button>
        </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
        <span class="block text-sm font-medium leading-6 text-gray-900">"email": "john@mail.com"</span>
        <span class="block text-sm font-medium leading-6 text-gray-900">"password": "changeme"</span>
    </p>
</div>
</div>`;
//
const renderUsers = (users) => {
  const htmlProfile = `    <header class="px-7 py-3 border-b-2 border-gray-300  w-full z-10 ">
 <nav class="flex items-center justify-between w-full z-10 top-0 left-0 ">
     <div class="flex items-center justify-center gap-5">
         <div class=" w-10 h-10 rounded-md">
             <img class="object-cover size-full rounded-md" src="./img/logo.png" alt="">

         </div>
         <p class="text-base font-semibold">Học Lập Trình Để Đi Làm</p>
     </div>
     <div class="w-[420px] relative">
         <input class="w-full px-3 py-2 rounded-full border-2 border-zinc-300 outline-none " type="text"
             placeholder="Tìm kiếm khóa học, bài viết, video, ...">
         <label class="absolute top-[10px] right-6 ">
             <i class="text-slate-400 fa-solid fa-magnifying-glass"></i>
         </label>
     </div>
     <div class="flex items-center justify-center gap-6">
         <span class="text-slate-800 text-base font-medium">Khóa học của tôi</span>
         <span><i class="fa-solid fa-bell"></i></span>
         <span class="w-10 h-10 rounded-full">
             <img class="rounded-full" src="./img/user.jpg" alt="">
         </span>
         <span class="logout text-slate-800 text-base font-medium cursor-pointer ">Log out</span>

     </div>
 </nav>
</header>
<main class="px-7 py-3 flex gap-8">
 <aside class="flex flex-col items-center justify-between sticky top-[74px]">
     <ul class="flex flex-col gap-4 items-center ">
         <li
             class="flex flex-col items-center justify-center w-11 h-11 rounded-full bg-sky-400 text-white cursor-pointer">
             <span>
                 <i class="fa-solid fa-plus"></i>
             </span>
         </li>
         <li
             class="flex flex-col items-center justify-center cursor-pointer w-[78px] h-[78px] rounded-lg bg-slate-200 hover:bg-slate-200">
             <span><i class="fa-solid fa-house"></i></span>
             <span class="text-xs font-semibold">Trang chủ</span>
         </li>
         <li
             class="flex flex-col items-center justify-center cursor-pointer w-[78px] h-[78px] rounded-lg  hover:bg-slate-200">
             <span>
                 <i class="fa-solid fa-road"></i>
             </span>
             <span class="text-xs font-semibold">Lộ trình</span>
         </li>
         <li
             class="flex flex-col items-center justify-center cursor-pointer w-[78px] h-[78px] rounded-lg  hover:bg-slate-200">
             <span><i class="fa-solid fa-address-book"></i></span>
             <span class="text-xs font-semibold">Bài viết</span>
         </li>
         <li
             class="flex flex-col items-center justify-center cursor-pointer w-[78px] h-[78px] rounded-lg  hover:bg-slate-200 ">
             <span>
                 <i class="fa-solid fa-comments"></i>
             </span>
             <span class="text-xs font-semibold">Hỏi đáp</span>
         </li>
     </ul>
     <div
         class="fixed bottom-[70px] left-[38px] w-11 h-11 rounded-full hover:bg-slate-200 flex items-center justify-center cursor-pointer">
         <span>
             <i class="fa-solid fa-bullhorn"></i>
         </span>
     </div>

 </aside>
 <div class="w-full flex flex-col gap-4 ">
    ${users
      .map(({ gender, name, location, email, phone, picture }, index) => {
        return ` <section class=" opacity-100 transition ease-in-out delay-150 section-${index} flex items-center justify-around border-2 border-slate-300 p-4 rounded-lg h-[350px]">
            <div class="">
                <div class="flex flex-col gap-1 ">
                    <span class="text-lg font-normal">Giới tính: ${gender}</span>
                    <span class="text-lg font-normal">Họ và tên: ${name.title}</span>
                    <span class="text-lg font-normal">Location: ${location.city}</span>
                    <span class="text-lg font-normal">Country: ${location.country}</span>
                    <span class="text-lg font-normal">Email: ${email}</span>
                    <span class="text-lg font-normal">Phone: ${phone}</span>
                </div>
            </div>
            <div class="w-[200px] h-[200px] rounded-full">
                <img class=" w-full rounded-full object-cover" src="${picture.thumbnail}" alt="">
            </div>
        </section>`;
      })
      .join(" ")}
 </div>
</main>`;
  root.innerHTML = htmlProfile;
};
//call api get data
const getUsers = async () => {
  const response = await fetch(`${SERVER_USERS_API}`);
  const { info, results } = await response.json();
  if (response.ok) {
    renderUsers(results);
  } else {
    throw new Error("Lỗi");
  }
};
// getUsers();

const renderLogin = () => {
  root.innerHTML = htmlLogin;
};
let isLogin;
root.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("login")) {
    handleLogin(e.target);
  }
});
// const getProfile = async () => {
//   if (localStorage.getItem("login_token")) {
//   }
// };
const renderUi = async () => {
  isLogin = localStorage.getItem("login_token") ? false : true;
  if (isLogin) {
    renderLogin();
  } else {
    await getUsers();
  }
  // await getProfile();
};
// const reRender = async () => {
//   await renderUi();
// };
// reRender();

// const error = root.querySelector(".error");
// const showError = (msg) => {
//   return `<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded fixed top-[20px] right-[20px] " role="alert">
//   <strong class="font-bold">Hey Guy!</strong>
//   <span class="block sm:inline">${msg}.</span>
// </div>`;
// };
//handleLogin
const handleLogin = async (form) => {
  const buttonBtn = form.querySelector("button");
  const data = Object.fromEntries(new FormData(form));
  buttonBtn.innerHTML = `
  <svg class="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>
        Loading...`;

  buttonBtn.disabled = true;
  const response = await fetch(`${SERVER_AUTH_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  buttonBtn.innerText = "Sign in";
  buttonBtn.disabled = false;
  if (!response.ok) {
    console.log("Lỗi");
    // error.innerHTML = showError("Tài khoản không chính xác");
    return;
  } else {
  }
  const tokens = await response.json();
  localStorage.setItem("login_token", JSON.stringify(tokens));
  await renderUi();
};
root.addEventListener("click", (e) => {
  if (e.target.classList.contains("logout")) {
    e.preventDefault();
    handleLogout();
  }
});
const handleLogout = async () => {
  localStorage.removeItem("login_token");
  await renderUi();
};

//handle scroll
const handleNav = () => {
  const header = root.querySelector("header");
  const nav = header.querySelector("nav");
  const navHeight = nav.getBoundingClientRect().height;
  if (header) {
    const stickyNav = function (entries) {
      const [entry] = entries;
      if (!entry.isIntersecting) {
        nav.classList.add("fixed", "bg-slate-50", "px-7", "py-3");
      } else {
        nav.classList.remove("fixed", "bg-slate-50", "px-7", "py-3");
      }
    };
    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });
    headerObserver.observe(header);
  } else {
    console.log("Header not found");
  }
};
const handleBody = () => {
  const allSections = document.querySelectorAll("section");
  const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("opacity-0");
    entry.target.classList.remove("translate-y-32");
    observer.unobserve(entry.target);
  };
  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });

  const firstTwoSections = document.querySelectorAll(
    "section:nth-of-type(-n+2)"
  );
  firstTwoSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.remove("opacity-0");
    section.classList.remove("translate-y-32");
  });

  if (allSections.length <= 2) {
    return;
  }

  allSections.forEach(function (section, index) {
    if (index >= 2) {
      sectionObserver.observe(section);
      section.classList.add("opacity-0");
      section.classList.add("translate-y-32");
    }
  });
};
const handleScroll = async () => {
  await renderUi();
  if (!isLogin) {
    console.log("nhận");
    handleNav();
    handleBody();
  }
};
handleScroll();
