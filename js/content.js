const $ = (element = String()) => document.querySelector(element);
const $$ = (element = String()) => document.querySelectorAll(element);
const boxLogin = $(".block-egJnc0");

window.onload = () => {

  const button = ` 
  <div>
  <h5
    class="
      colorStandard-2KCXvj
      size14-e6ZScH
      h5-18_1nd
      title-3sZWYQ
      defaultMarginh5-2mL-bP
      h5Token
    "
    style="margin-top:20px;"
  >
    Token
  </h5>
  <div class="inputWrapper-31_8H8 tokenDiv">
    <input
      class="tokenSelector inputDefault-_djjkz input-cIJ7To"
      name="Token"
      placeholder=""
      aria-label="Token"
      autocomplete="off"
      maxlength="999"
      spellcheck="false"
      value
    />
  </div>
</div>
<br />
<div
  type="submit"
  class="
    token-btn
    marginBottom8-AtZOdT
    button-3k0cO7 button-38aScr
    lookFilled-1Gx00P
    colorBrand-3pXr91
    sizeLarge-1vSeWK
    fullWidth-1orjjo
    grow-q77ONN
    nulltoken
  "
>
  <div class="contents-18-Yxp loginBtn">Login with token</div>
</div>`;
  
  boxLogin.insertAdjacentHTML("beforeend", button);
  const tokenBtn = $(".token-btn");
  const tokenElement = $(".tokenSelector");
  const h5element = $(".h5Token");
  const contentsBtn = $(".loginBtn");
  const spinnerElement = spinner();
  const invaildToken = errorElement("Token is invaild");
  const emptyToken = errorElement("This field is required");
  tokenBtn.onclick = async () => {
    contentsBtn.innerHTML = "";
    tokenBtn.appendChild(spinnerElement);
    h5element.classList.remove("error-25JxNp");
    invaildToken.remove();
    emptyToken.remove();
    if (tokenElement.classList.contains("inputError-1PrjdI"))
      tokenElement.classList.remove("inputError-1PrjdI");
    let token = tokenElement.value;
    if (!token) {
      setTimeout(() => {
        h5element.classList.add("error-25JxNp");
        h5element.appendChild(emptyToken);
        tokenElement.classList.add("inputError-1PrjdI");
        spinnerElement.remove();
        contentsBtn.innerHTML = "Login with token";
        tokenElement.focus();
      }, 500);
      return;
    }
