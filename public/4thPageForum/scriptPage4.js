const donatorsBody = document.querySelector("#donation-table > tbody");

    function loadDonators () {
        const request = new XMLHttpRequest();

        request.open("get", "donators.json");

        request.onload = () => {
            try {
                const json = JSON.parse(request.responseText);

                populateDonators(json);
            } catch (e) {
                console.warn("Could not load donators :(");
            }
        };

        request.send();
    }

    function populateDonators(json) {
        //Clear the existing table content
        while(donatorsBody.firstChild) {
            donatorsBody.removeChild(donatorsBody.firstChild);
        }

        //Populte table with new items
        json.forEach((row) => {

            const tr = document.createElement("tr");
            
            row.forEach((cell) => {
                const td = document.createElement("td");
                td.textContent = cell;
                tr.appendChild(td);
            });

            donatorsBody.appendChild(tr);
        });
    }

    //document.addEventListener("DOMContentLoaded", ()=> { loadDonators(); });

