const playerList = [];
function display(playerSlist) {
    console.log(playerSlist);
    const tableBody = document.getElementById('cart-player');
    tableBody.innerHTML = "";
    for (let i = 0; i < playerSlist.length; i++) {
        console.log(playerList[i].playerName);
        const name = playerList[i].playerName;
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>`;
        tableBody.appendChild(tr);
    }
}
function addToSelectedFive(element) {
    /*  console.log(element.parentNode.parentNode.children) */
    /* console.log(element.parentNode.parentNode.children[1].innerText) */
    const playerName = element.parentNode.parentNode.children[1].innerText;
    console.log(playerName)
    const playerobj = {
        playerName: playerName

    }
    playerList.push(playerobj);
    /*  console.log(playerList)
     console.log(playerList.length) */
    document.getElementById('selected-player').innerText = playerList.length;
    display(playerList);
}