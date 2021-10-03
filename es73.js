function addRow() {
  let trEl = `<tr>
        <td>
            <input type="text" placehoolder="First Name">
        </td>
        <td>
            <input type="text" placeholder="Last Name">
        </td>
        <td>
            <input type="text" placeholder="Age">
        </td>
    </tr>`;

    let tableB = document.querySelector("#person-table tbody");
    tableB.innerHTML = trEl;
}

let button = document.getElementById("add-row");
button.addEventListener("click", addRow);