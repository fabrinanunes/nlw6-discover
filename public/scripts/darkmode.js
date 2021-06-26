const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
      window
            .getComputedStyle(element)
            .getPropertyValue(style)

const initialColors = {
      background: getStyle(html, "--background"),
      black: getStyle(html, "--black"),
      grayBlue: getStyle(html, "--gray-blue")
} 

const darkMode = {
      background: "#0d114f",
      black: "#ebecf1",
      grayBlue: "#e5eaf1"
}

const transforKey = key =>
      "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
      Object.keys(colors).map(key =>
            html.style.setProperty(transforKey(key), colors[key])
            )
}

checkbox.addEventListener("change", ({ target }) => {
      target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

let logo = document.querySelector("#logo")

checkbox.addEventListener("change", ({ target }) => {
      target.checked ? logo.setAttribute('src', '/images/logo-dark.svg') : cimg.setAttribute('src', '/images/logo.svg')
})