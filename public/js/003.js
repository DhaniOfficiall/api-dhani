Sayings = "";
			var now = new Date();
			var hours = now.getHours();
			if (hours >= 17 || hours <= 2){
			Sayings += "<span class='text-light'>Selamat malam 🌚</span>"
			} else if (hours >= 3 && hours <= 10){
			Sayings += "<span class='text-info'>Selamat pagi 🌝</span>"
			} else if (hours >= 11 && hours <= 14){
			Sayings += "<span class='text-warning'>Selamat Siang 🌞</span>"
			} else if (hours >= 13 && hours <= 16){
			Sayings += "<span class='text-success'>Selamat Sore 🌜</span>"
			}
document.getElementById("Ucapan").innerHTML = Sayings;
