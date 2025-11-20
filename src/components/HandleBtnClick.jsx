const HandleBtnClick = (section) => {
    return document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
}

export default HandleBtnClick