const updateBar = () => {
    const bodyEl = document.body;
    const barEl = document.querySelector(".bar");
    let scrollPos = (window.scrollY / (bodyEl.scrollHeight - window.innerHeight)) * 100;

    barEl.style.width = `${scrollPos}%`;
    requestAnimationFrame(updateBar);
};
updateBar();