let dataPegawai = [
    { nama: 'Vino', jabatan: 'Manager', status: 'menikah' },
    { nama: 'Zaky', jabatan: 'Asisten Manager', status: 'belum' },
    { nama: 'Edria', jabatan: 'Staff', status: 'menikah' }
];

let tabelPegawai = document.getElementById('pegawai-body');
let totalGajiSemua = 0;

for (let pegawai of dataPegawai) {
    let { nama, jabatan, status } = pegawai;
    let gajiPokok = 0;

    switch (jabatan) {
        case 'Manager':
            gajiPokok = 15000000; // 15 juta
            break;
        case 'Asisten Manager':
            gajiPokok = 10000000; // 10 juta
            break;
        case 'Staff':
            gajiPokok = 5000000; // 5 juta
            break;
        default:
            gajiPokok = 0;
    }

    let tunjanganJabatan = 0.15 * gajiPokok; // 15%
    let bpjs = 0.1 * gajiPokok; // 10%
    let tunjanganKeluarga;

    if (status === 'menikah') {
    tunjanganKeluarga = 0.2 * gajiPokok;
    }  
    else {
    tunjanganKeluarga = 0;
    }   

    let totalGaji = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;

    totalGajiSemua += totalGaji;

    let newRow = tabelPegawai.insertRow();
    newRow.innerHTML = `
        <td>${nama}</td>
        <td>${jabatan}</td>
        <td>${status}</td>
        <td>${gajiPokok}</td>
        <td>${tunjanganJabatan}</td>
        <td>${bpjs}</td>
        <td>${tunjanganKeluarga}</td>
        <td>${totalGaji}</td>
    `;
}

let totalGajiElement = document.getElementById('total-gaji');
totalGajiElement.textContent = (totalGajiSemua);
