
var data = new Array();
var img = "";
var edit_id = -1;
function saveData() {
    var a, b, c, d, e;
    a = document.getElementById('fn_c').value;
    if (a == '') {
        alert('Full name must not blank')
    }
    b = document.getElementById('id').value;
    if (a == '') {
        alert('Id_Pro must not blank')
    }
    c = document.getElementById('n_p').value;
    if (a == '') {
        alert('Name_Pro must not blank')
    }
    d = document.getElementById('q_p').value;
    if (a == '') {
        alert('Quantity_Pro must not blank')
    }
    e = document.getElementById('price').value;
    if (a == '') {
        alert('Price_Pro must not blank')
    }
    console.log(document.getElementById('image'));

    console.log({
        Fullname_Customer: a,
        Id_Pro: b,
        Name_Pro: c,
        Quantity_Pro: d,
        Price_Pro: e,
        img: img
    });
    console.log("owi", edit_id == "");
    if (edit_id == -1)
        data.push({
            Fullname_Customer: a,
            Id_Pro: b,
            Name_Pro: c,
            Quantity_Pro: d,
            Price_Pro: e,
            img: img
        })
    else {
        data[edit_id] = {
            Fullname_Customer: a,
            Id_Pro: b,
            Name_Pro: c,
            Quantity_Pro: d,
            Price_Pro: e,
            img: img
        };
        edit_id = -1;
    }

}

function isCharacterKey(evt) {
    evt = evt || window.event;
    var keycode = evt.keyCode || evt.which;
    var valid =
        (keycode > 47 && keycode < 58) || // number keys
        keycode == 32 || keycode == 13 || // spacebar & return key(s) (if you want to allow carriage returns)
        (keycode > 64 && keycode < 91) || // letter keys
        (keycode > 95 && keycode < 112) || // numpad keys
        (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
        (keycode > 218 && keycode < 223);   // [\]' (in order)
    return valid;
}
function reset() {
    document.getElementById('fn_c').value = "";
    document.getElementById('id').value = "";
    document.getElementById('n_p').value = "";
    document.getElementById('q_p').value = "";
    document.getElementById('price').value = "";
}
function showData() {
    var html = '';
    document.getElementById('tbody').innerHTML = html;
    for (i in data) {
        var n = i;
        n++;
        html = "<tr>";
        html += "<td>" + n + "</td>";
        html += "<td>" + data[i].Fullname_Customer + "</td>";
        html += "<td>" + data[i].Id_Pro + "</td>";
        html += "<td>" + data[i].Name_Pro + "</td>";
        html += "<td>" + data[i].Quantity_Pro + "</td>";
        html += "<td>" + data[i].Price_Pro + "</td>";
        html += "<td>" + (parseFloat(data[i].Quantity_Pro) * parseFloat(data[i].Price_Pro)) + "</td>";
        html += `<td> <img class="image_pro" src="${data[i].img}" /></td>`
        html += `<td><input type="button" value="Edit" onclick="editData(${n})" />
        <input type="button" value="Delete" onclick="deleteData(${n})" /></td>`;
        html += "</tr>";
        document.getElementById('tbody').innerHTML += html;
    }
}
function isNumberKey(e) {
    if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
        return true;
    } else return false;
}
function deleteData(index) {
    data.splice(index - 1, 1);
    showData();
}
function editData(index) {
    edit_id = index - 1;
    console.log(edit_id);
    document.getElementById('fn_c').value = data[edit_id].Fullname_Customer;
    document.getElementById('id').value = data[edit_id].Id_Pro;
    document.getElementById('n_p').value = data[edit_id].Name_Pro;
    document.getElementById('q_p').value = data[edit_id].Quantity_Pro;
    document.getElementById('price').value = data[edit_id].Price_Pro;

}
function chonFile(input) {
    if (input.files && input.files[0]) {
        console.log(input.files);
        var reader = new FileReader();
        reader.onload = function (e) {
            //console.log(e.target.result)
            img = e.target.result;

        }
        reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
}