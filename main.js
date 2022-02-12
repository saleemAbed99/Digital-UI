// execute script after page load

window.onload = function digitalFn() {
    // toggle button
    let toggle = document.querySelector("#nav .toggle-btn")
    let collapse = document.querySelector("#nav .collapse")

    toggle.addEventListener('click', (event) => {
        collapse.classList.toggle('active')
    })

    // masonry js
    let grid = document.querySelector("#site-main .recent-work-area .images-flex")

    let masonry = new Masonry(grid, {
        itemSelector: '.flex-item',
        gutter: 50,
        fitWidth: true
    })
}