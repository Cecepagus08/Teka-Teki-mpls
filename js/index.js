  
        const tekaTeki = [
            { clue: "Air putih dihormati", jawaban: "susu bendera putih" },
            { clue: "Air putih tidur", jawaban: "susu bantal" },
            { clue: "Air semut", jawaban: "Sprite" },
            { clue: "Air desa", jawaban: "Ades" },
            { clue: "Air bilangan '2,3,5'", jawaban: "air minum Cap Prima" },
            { clue: "Air putih", jawaban: "air susu" },
            { clue: "Air tanah", jawaban: "susu cokelat" },
            { clue: "Air mineral yang ada manis-manisnya", jawaban: "Le Minerale" },
            { clue: "Air mineral merk oasis", jawaban: "air mineral Cap Oasis" },
            { clue: "Air penyumblahan", jawaban: "air kali" },
            { clue: "Air emas dari hutan tropis", jawaban: "minyak goreng Tropical" },
            { clue: "Air kencing banteng", jawaban: "Kratingdaeng" },
            { clue: "Akar hangat", jawaban: "jahe" },
            { clue: "Ayam Selimut", jawaban: "ayam goreng tepung" },
            { clue: "Air gak loyo", jawaban: "Air vit" },
            { clue: "Cokelat rihana", jawaban: "cokelat payung" },
            { clue: "Cokelat pintar", jawaban: "smarties" },
            { clue: "Cokelat puncak", jawaban: "Top" },
            { clue: "Cokelat lebih baik", jawaban: "Better" },
            { clue: "Cokelat Marshanda", jawaban: "Cha Cha" },
            { clue: "Cokelat pahlawan", jawaban: "Supercman" },
            { clue: "Cokelat Jerawatan", jawaban: "Beng-Beng" },
            { clue: "Cacing goreng", jawaban: "Mie Goreng" },
            { clue: "Cacing rebus", jawaban: "Mie Rebus" },
            { clue: "Chiki kentut", jawaban: "Ops" },
            { clue: "Chiki simpan dulu", jawaban: "taro" },
            { clue: "Chiki abdi becuki", jawaban: "Chiki Ku Suka" },
            { clue: "Chiki bohong", jawaban: "Lays" },
            { clue: "Chiki pesawat tempur", jawaban: "Jetz" },
            { clue: "Chiki mall", jawaban: "Chetos" },
            { clue: "Camilan Bintang Selanjutnya", jawaban: "Nextar" },
            { clue: "Cemilan jempol", jawaban: "Waffer gerry saluut" },
            { clue: "Cahaya matahari yang mencair", jawaban: "Sunlight" },
            { clue: "Darah beku", jawaban: "cincau" },
            { clue: "Dodol sapi", jawaban: "sosis" },
            { clue: "Dewi sri berjemur", jawaban: "nasi goreng" },
            { clue: "Guling berdarah", jawaban: "sosis saus" },
            { clue: "Guling sobek rasa darah", jawaban: "roti panjang isi stroberi" },
            { clue: "Gelas isi rambut", jawaban: "mie gelas" },
            { clue: "Bakal ayam", jawaban: "telur" },
            { clue: "Bantal sobek isinya tanah liat", jawaban: "roti sobek isi cokelat" },
            { clue: "Bantal tepung terigu", jawaban: "roti bantal" },
            { clue: "Bantal", jawaban: "tahu putih" },
            { clue: "Buku terang", jawaban: "Sinar dunia" },
            { clue: "Batu banda Belanda", jawaban: "oncom" },
            { clue: "Batu bata Italy", jawaban: "Tango" },
            { clue: "Batu manis Nigeria", jawaban: "gula Jawa" },
            { clue: "Buah cantik", jawaban: "kesemek" },
            { clue: "Buah waktu mama", jawaban: "buah jambu" },
            { clue: "Buah 12 shio", jawaban: "buah naga" },
            { clue: "Buah teh macintosh", jawaban: "Fruit Tea apel" },
            { clue: "Buah upacara", jawaban: "Apel" },
            { clue: "Biskuit tahi lalat", jawaban: "Chocochip" },
            { clue: "Teh ngeband", jawaban: "Teh kotak" },
            { clue: "Buah ungu matahari", jawaban: "jeruk sunkis" },
            { clue: "Buah janda", jawaban: "buah anggur atau terong" },
            { clue: "Buah ketakutan", jawaban: "buah pear" },
            { clue: "Biskuit keberuntungan", jawaban: "biskuit selamat" },
            { clue: "Biskuit raja dangdut", jawaban: "biscuit Roma Kelapa" },
            { clue: "Biskuit berdarah", jawaban: "Slai Olai rasa stroberi" },
            { clue: "Berlumut", jawaban: "kacang ijo" },
            { clue: "Buah dalam minggu", jawaban: "apel" },
            { clue: "Buah dad say yes", jawaban: "papaya" },
            { clue: "Buah harajuuku", jawaban: "jeruk" },
            { clue: "Hati kenyal", jawaban: "Yupi" },
            { clue: "Ilati kenyal", jawaban: "Permen yupi" },
            { clue: "Hari yang baik", jawaban: "Good day" },
            { clue: "Ikan berdiri", jawaban: "teri jengky" },
            { clue: "Ikan harta karun", jawaban: "ikan mas" },
            { clue: "Ikan masuk angin", jawaban: "ikan kembung" },
            { clue: "Ipod hijau", jawaban: "apel hijau" },
            { clue: "Jus Teknologi", jawaban: "jus apel" },
            { clue: "Jus Pancasila", jawaban: "jus belimbing" },
            { clue: "Jajanan keranda terbang", jawaban: "Momogi" },
            { clue: "Jajanan tepat waktu", jawaban: "Good time" },
        ];

        function getJawaban(event) {
          ///FUNCTION BALIK NAMA
           
            event.preventDefault(); // Mencegah form di-submit dan halaman refresh
            
            //FUNCTIOM VALIDASI INPUY ADA ATAU TIDAK

            const clueInput = document.getElementById('input-clue').value.trim().toLowerCase();
            const resultDiv = document.getElementById('result');
            const jawabanObj = tekaTeki.find(item => item.clue.toLowerCase() === clueInput);
            if(!clueInput){
              console.log("jangan kosmh");
             document.querySelector(".slide-clue").classList.toggle("shake");
             
            }else{
             document.querySelector(".slide-clue").classList.toggle("active");
             
             let btnUlang = document.querySelector(".btn-ulang");
           if (btnUlang.innerText === "Cari") {
            btnUlang.innerText = "Ulang";
            btnUlang.style.backgroundColor = "#9b0f11";
            } else {
                btnUlang.innerText = "Cari";
                btnUlang.style.backgroundColor = "#0e2954";
            }
  
              if (jawabanObj) {
                  resultDiv.innerText = `${jawabanObj.jawaban}`;
              } else {
                  resultDiv.innerText = "Jawaban tidak ditemukan. Coba clue lain.";
              }
              
            }
        }
    
    
    
    ///REQUEST CLUE DAN Jawaban
    
            document.getElementById('pesanForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const clue = document.getElementById('isiClue').value;
            const jawaban = document.getElementById('isiJawaban').value;
            
            const gabungan = `Nama: ${clue}\nPesan: ${jawaban}`;
            
            const chatId = '6607562148';  // Ganti dengan chat_id Anda
            
            const apiToken = '7432514679:AAHr9H55xTB2ne0GAZBUMSiPl2nzSWvHkYI';  // Ganti dengan token API bot Anda
            
            const apiUrl = `https://api.telegram.org/bot${apiToken}/sendMessage`;

            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: gabungan
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert('Pesan berhasil dikirim!');
                } else {
                    alert('Kesalahan saat mengirim pesan: ' + data.description);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Terjadi kesalahan. Silakan coba lagi.');
            });
        });