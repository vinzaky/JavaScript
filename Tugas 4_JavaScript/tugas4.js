let frm = document.getElementById('dataPegawai');
let jabatan = ['Manager', 'Asisten Manager', 'Staff'];
let pilihJabatan = `<option value="">Jabatan----</option>`;
for (let j in jabatan) {
    pilihJabatan += `<option value="${jabatan[j]}">${jabatan[j]}</option>`;
}
frm.jabatan.innerHTML = pilihJabatan;
let status = ['Menikah', 'Belum Menikah'];
let pilihStatus = `<option value="">Status----</option>`;
for (let s in status) {
    pilihStatus += `<option value="${status[s]}">${status[s]}</option>`;
}
frm.status.innerHTML = pilihStatus;

function dataPerhitungan() {
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;

    let gaji;

    switch (jabatan) {
        case 'Manager': gaji = 15000000; break;
        case 'Asisten Manager': gaji = 10000000; break;
        case 'Staff': gaji = 5000000; break;
        default: gaji = 0;
    }
    let gapok = gaji;
    let tJabatan = gaji * 0.15;
    let bpjs = gapok * 0.1;
    let tKeluarga = (status == 'Menikah') ? gapok * 0.2 : 0;
    let tGaji = gapok + tJabatan + bpjs + tKeluarga;

    Swal.fire({
        title: "Data Pegawai",
        html: `
        <div class='table-container'>
        <table border='1' class='table-width'>
            <tbody>
                <tr>
                    <td colspan="2"><strong>Nama Pegawai:</strong></td>
                    <td>${nama}</td>
                </tr>
                <tr>
                    <td colspan="2"><strong>Status:</strong></td>
                    <td>${status}</td>
                </tr>
                <tr>
                    <td colspan="2"><strong>Jabatan:</strong></td>
                    <td>${jabatan}</td>
                </tr>
                <tr>
                    <td colspan="2"><strong>Gaji Pokok:</strong></td>
                    <td>${gapok}</td>
                </tr>
                <tr>
                    <td colspan="2"><strong>Tunjangan Jabatan:</strong></td>
                    <td>${tJabatan}</td>
                </tr>
                <tr>
                    <td colspan="2"><strong>Tunjangan Keluarga:</strong></td>
                    <td>${tKeluarga}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="2"><strong>Total Gaji:</strong></td>
                    <td>${tGaji}</td>
                </tr>
            </tfoot>
        </table>
    </div>    
        `, icon: "info",
    });
}