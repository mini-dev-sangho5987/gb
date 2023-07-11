import data from "./json.js"; 
        const h = document.querySelector("#h2");
        const p = document.querySelector("#p");
        const i = document.querySelector("#it");
        let count = 0;
        let arr = data;
        let list = [];
        plus();
        function plus(){
            count++;
            h.innerText = `${count}번 문제`;
            p.innerText = arr[count-1].문제;
            if (count > 121){
                document.write(list);
            }
        }
        i.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn").click();
      }
    });

    function ode(){
        if (i.value == arr[count-1].답) {
            alert("정답입니다. 정답 : " + arr[count-1].답 + "\n내 답 : " + i.value)
        } else {
            alert("오답입니다. 정답 : " + arr[count-1].답 + "\n내 답 : " + i.value);
            list.push(`<br/>${arr[count-1].문제}||${arr[count-1].답}||${i.value}<br/>`);
        }
        i.value = "";
        plus();
    }

    document.getElementById("btn").addEventListener('click', function(event){
        ode();
    });
