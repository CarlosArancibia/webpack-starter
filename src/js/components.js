import "../css/components.css";
// import webpackLogo from "../assets/img/webpack-logo.png";

export const greeting = (name) => {
  console.log("Element h1 created");
  const h1 = document.createElement("h1");
  h1.innerText = `Hi ${name}`;
  document.body.append(h1);

  // console.log(webpackLogo);
  // const img = document.createElement("img");
  // img.src = webpackLogo;
  // document.body.append(img);
};
