$(document).ready(() => {
    $('.alat3 .btn span').click(() => {
        self.location.reload()
    });
    var globalTimeout = null;
    $('.ipmax input').keyup((e) => {
        // $('.ipmax input').val(0);
        $(`.alat1 .isi span`).remove();
        let ipmax = e.target.value;
        if (globalTimeout != null) {
            setTimeout(() => {
                $('.label').text(`Memproses 4`)
            }, 1000)
            setTimeout(() => {
                $('.label').text(`Memproses 3`)
            }, 2000)
            setTimeout(() => {
                $('.label').text(`Memproses 2`)
            }, 3000)
            setTimeout(() => {
                $('.label').text(`Memproses 1`)
            }, 4000)
            clearTimeout(globalTimeout);
        }
        globalTimeout = setTimeout(function () {
            globalTimeout = null;
            $('.ipmax input').attr('disabled', '')
            $('.label').text("Jumlah kata")
            let url = `https://random-word-api.herokuapp.com//word?number=${ipmax}`;
            $.get(url, function (data, status) {
                for (let a = 0; a < ipmax; a++) {
                    $(`.alat1 .isi`).append(`<span class="">${data[a]}</span>`);
                }
                $('.alat2 input').keyup((e) => {
                    let nilai = e.target.value;
                    let ip = parseInt($('.ip').text());
                    console.log(nilai);
                    if (nilai == '') {
                        alert("Tulis dulu gan");
                        return false;
                    }
                    if (e.keyCode === 13) {
                        for (let i = ip; i <= ip; i++) {
                            if (nilai == data[ip]) {
                                $(`.alat1 .isi span:nth-child(${1})`).remove();
                                let hasil = parseInt($('.nilai').text());
                                let ipresult = ip + 1;
                                let result = hasil + 1;
                                $('.ip').text(ipresult)
                                $('.nilai').text(result);
                                $('.alat2 input').val("");
                                if (ip >= ipmax-1) {
                                    alert(`Skor akhir Anda : ${result * 100 / ipmax} poin`);
                                    self.location.reload()
                                }
                            }
                            else {
                                $(`.alat1 .isi span:nth-child(${1})`).remove();
                                let salah = parseInt($('.nilai_salah').text());
                                let ipresult = ip + 1;
                                let newSalah = salah + 1;
                                $('.nilai_salah').text(newSalah);
                                $('.ip').text(ipresult);
                                $('.alat2 input').val("");
                                if (ip >= ipmax-1) {
                                    alert(`Skor akhir Anda : ${ipmax - salah + 1 * 100 / ipmax } poin`);
                                    self.location.reload()
                                }
                            }
                        }
                    }
                });

            });
        }, 5000);

    });
});