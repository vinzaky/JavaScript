function dataPerson(){
    let forms = document.getElementById(`frm`);
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobi = forms.hobi.value;

    let hasil = document.getElementById("hasil");
    hasil.innerHTML = `
        <h2>Hasil Input:</h2>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Pekerjaan:</strong> ${pekerjaan}</p>
        <p><strong>Hobi:</strong> ${hobi}</p>
    `;
}

    //melengkapi code diatas dan tampilkan pada HTML
    //1. isian nama
    //2. isian pekerjaan
    //3. isian hobby
