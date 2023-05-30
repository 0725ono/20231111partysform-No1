const resultsDOM = document.querySelector(".results");
const formDOM = document.querySelector(".form");

const nameInputDOM = document.querySelector(".name-input");
const postalcodeInputDOM = document.querySelector(".postalcode-input");
const addressInputDOM = document.querySelector(".address-input");
const emailInputDOM = document.querySelector(".email-input");
const telInputDOM = document.querySelector(".tel-input");
const allergyInputDOM = document.querySelector(".allergy-input");


// showTasksは最終的には不要な記述
const showTasks = async () => {
    try {
        // 自作APIを叩く
        const { data: forms } = await axios.get("/api/v1/tasks");

        // タスクを出力
        const allForms = forms.map((form) => {
            const { attendance, name, postalcode, address, email, tel, allergy } = form;
            
            return `
                <div>
                    ${attendance}<br />
                    ${name}<br />
                    ${postalcode}<br />
                    ${address}<br />
                    ${email}<br />
                    ${tel}<br />
                    ${allergy}
                    <hr />
                </div>
            `
        }).join("");
        // console.log(allForms);
        resultsDOM.innerHTML = allForms;

    } catch (err) {
        console.log(err);
    }
}

showTasks();

// フォームを送信する
formDOM.addEventListener("submit", async (event) => {
    event.preventDefault();

    const attendanceInputDOM = document.querySelector('input[name="attendance"]:checked');
    const attendanceValue = attendanceInputDOM && attendanceInputDOM.value === "attend";
    const name = nameInputDOM.value;
    const postalcode = postalcodeInputDOM.value;
    const address = addressInputDOM.value;
    const email = emailInputDOM.value;
    const tel = telInputDOM.value;
    const allergy = allergyInputDOM.value;

     

    try {
        await axios.post("/api/v1/tasks", {
            attendance: attendanceValue,
            name : name,
            postalcode : postalcode,
            address : address,
            email : email,
            tel : tel,
            allergy : allergy
        });
        showTasks();
    } catch (err) {
        console.log(err);
    }
})
