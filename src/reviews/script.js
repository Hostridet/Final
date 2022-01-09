let main = document.querySelector(".done");
function send()
{
    let name = document.getElementById("usr");
    let comment = document.getElementById("comment");
    let reviews = document.createElement("div");
    reviews.setAttribute("class", "avatars");
    if (name.value === "" && comment.value === "") {
        return 0;
    }
    let usrName = document.createElement("p")
    let panished = document.createElement("span");
    let a = document.createElement("a");
    a.setAttribute("href", "https://natribu.org/ru/");
    a.innerHTML = name.value;
    panished.appendChild(a);
    usrName.appendChild(panished);

    let image = document.createElement("img");
    image.setAttribute("src", "../../img/mole.jpg");
    image.setAttribute("style", "width:90px");

    let usrComment = document.createElement("p");
    usrComment.innerHTML = comment.value;

    reviews.appendChild(image);
    reviews.appendChild(usrName);
    reviews.appendChild(usrComment);

    main.appendChild(reviews);
    name.value = "";
    comment.value = "";
}
