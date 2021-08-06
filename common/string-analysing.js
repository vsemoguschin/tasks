const path = "/users/download/index.html"

const isHtml = path => {
    if (path.slice(-5) == ".html") {
        return true;
    } else {
        return false;
    }

}
console.log(isHtml(path));
