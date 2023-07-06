const color = document.querySelectorAll(".color");
const containerEl = document.querySelector(".container");
const button = document.getElementById("btn");
const colorContainer = document.getElementsByClassName("color-container")[0];
const boxEl = document.querySelectorAll(".box")


function btnClick() {
    let randomColor = [];
    for (let i = 0; i < 20; i++) {
        randomColor.push(Math.floor(Math.random() * 16777215).toString(16).toLocaleUpperCase());
    }
    CreateDom(randomColor)
}

btnClick()



function CreateDom(str) {

    for (let i = 0; i < 20; i++) {
        const LiTag = document.createElement("li")
        LiTag.classList.add("color")
        LiTag.addEventListener("click",copycode)
    LiTag.innerHTML = `<div class="box" style = "background-color: #${str[i]};" data-item="#${str[i]}" ></div>
                        <div class="code">#${str[i]}</div> `
                                colorContainer.append(LiTag);

                            }
    
                        }



function copycode(ele){
    const Copy = ele.target.dataset.item;
    navigator.clipboard.writeText(Copy).then(
        alert("Code Copied")
    )
}




// function btnClick() {
//     let randomColor = "";
//     // const specificCharacter = ["A", "B", "C", "D", "E", "F"]
//     for (let i = 0; i < 18; i++) {
//         // let forNumber = Math.floor(Math.random() * 100);
//         // let randomNumber = Math.floor(Math.random() * 6);
//         // let forCharcter = specificCharacter[randomNumber];
//         // let array = [forNumber,forCharcter]

//         // console.log(array[Math.floor(Math.random() * 2)]);
//         // result = (forNumber +  forCharcter   + forCharcter ).toString();
//         // randomColors.push(result)
//         randomColor = Math.floor(Math.random() * 16777215).toString(16).toLocaleUpperCase();
//         console.log(randomColor);
//     }
//     CreateDom(randomColor)
// }



















