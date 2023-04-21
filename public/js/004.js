window.setTimeout("waktu()", 1000);
	function waktu() {
		var d = new Date();
  const jam = d.getHours();
  const menit = d.getMinutes();
  const detik = d.getSeconds();
		setTimeout("waktu()", 1000);
		document.getElementById("Clock").innerHTML = jam +" : "+ menit +" : "+ detik +" WIB";
	}