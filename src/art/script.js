let arr = [];
get();
function connectJson()
{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../../data/data.json");
    xhr.responseType = 'json'
    return xhr;

}
async function get()
{
    let promise = new Promise((resolve, reject) => {

        let xhr = connectJson();
        xhr.onprogress = () => {
            console.log(xhr.statusText);
        }
        xhr.onloadend = () => {
            if (xhr.status === 200) {
                resolve(xhr);
            }
            else {
                reject(xhr);
            }
        }
        xhr.send();
    })
        .then(xhr => {
            createIcons(xhr.response)
        })
        .catch(xhr => {
            console.log("Errors: " + xhr.statusText);
        })
}
function createIcons(data)
{
    let fields = document.querySelectorAll('.fields');
    for (let i = 0; i < data['images'].length; i++) {
        arr[i] = data['images'][i]['url'];
        let icon = createIcon(arr[i])
        fields[i].appendChild(icon);
    }
}
function createIcon(src)
{
    let icon = document.createElement("img");
    icon.setAttribute("class", "img");
    icon.setAttribute("src", src);
    return icon;
}