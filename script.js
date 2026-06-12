console.log("SCRIPT BERHASIL DIMUAT");


const form = document.getElementById("dataForm");
const hasilKomentar = document.getElementById("hasilKomentar");
const hasilData = document.getElementById("hasil-data");


form.addEventListener("submit", function(e){
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const alamat = document.getElementById("alamat").value.trim();
    const tempat = document.getElementById("tempat").value.trim();
    const tanggal = document.getElementById("tanggal").value;
    const hp = document.getElementById("hp").value.trim();

        if (!/^\d+$/.test(hp)) {
    alert("No HP hanya boleh berisi angka!");
    return;
}


    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const agama = document.getElementById("agama").value;

    const jk = document.querySelector('input[name="jk"]:checked');

    let hobi = [];
    document.querySelectorAll(".hobi:checked").forEach(item => {
        hobi.push(item.value);
    });

    if (
        nama === "" ||
        alamat === "" ||
        tempat === "" ||
        tanggal === "" ||
        hp === "" ||
        email === "" ||
        password === "" ||
        !jk ||
        hobi.length === 0
    ) {
        alert("Data belum lengkap!");
        return;
    }

    document.getElementById("hasil-data").style.display = "block";

    const kotakBaru = document.createElement("div");
    kotakBaru.classList.add("output-box");

    kotakBaru.innerHTML = `
        <h3>Data Berhasil Disimpan</h3>
        <p><b>Nama:</b> ${nama}</p>
        <p><b>Alamat:</b> ${alamat}</p>
        <p><b>Tempat Lahir:</b> ${tempat}</p>
        <p><b>Tanggal Lahir:</b> ${tanggal}</p>
        <p><b>No HP:</b> ${hp}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Password:</b> ${"*".repeat(password.length)}</p>
        <p><b>Jenis Kelamin:</b> ${jk.value}</p>
        <p><b>Agama:</b> ${agama}</p>
        <p><b>Hobi:</b> ${hobi.join(", ")}</p>
    `;

    hasilKomentar.appendChild(kotakBaru);

    alert("Data berhasil disimpan!");

    form.reset();
});