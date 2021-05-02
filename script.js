$(document).ready(() => {
    let url = "https://random-word-api.herokuapp.com//word?number=10";
    $.get(url, function (data, status) {
        for (let a = 0; a <= 10; a++){
            $(`.alat1 .isi span:nth-child(${a+1})`).text(data[a]);
        }
        $('.alat3 .btn span').click(() => {
            self.location.reload()
        })
        $('.alat2 input').keydown((e) => {
            let nilai = e.target.value;
            console.log(nilai);
            let ip = parseInt($('.ip').text());
            console.log(data[ip]);
            if (e.keyCode === 13) {
                for (let i = ip; i <= ip; i++) {
                    if (nilai == data[ip]) {
                        console.log('benar')
                        let hasil = parseInt($('.nilai').text());
                        let ipresult = ip + 1;
                        let result = hasil + 1;
                        $('.ip').text(ipresult)
                        $('.nilai').text(result);
                        $('.alat2 input').val("");
                        $(`.alat1 .isi span:nth-child(${ip + 1})`).addClass('correct')
                        if (ip >= 10) {
                            alert(`Skor akhir Anda : ${ result }`);
                            self.location.reload()
                        }
                    }
                    else {
                        $(`.alat1 .isi span:nth-child(${ip + 1})`).addClass('wrong');
                        let salah = parseInt($('.nilai_salah').text());
                        let ipresult = ip + 1;
                        let newSalah = salah + 1;
                        $('.nilai_salah').text(newSalah);
                        $('.ip').text(ipresult);
                        $('.alat2 input').val("");
                        if (ip >= 10) {
                            alert(`Skor akhir Anda : ${ip - newSalah + 1}`);
                            self.location.reload()
                        }
                    }
                }
            }
        })
    });
})