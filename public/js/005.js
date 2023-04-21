var batteryLevel = document.getElementById("batteryLevel");
			var styleBatteryLevel = batteryLevel.style;
			var percentageLevel = document.getElementById("percentageLevel");
			navigator.getBattery().then(function(battery) {
			function updateAllBatteryInfo(){
			updateLevelInfo();
			}
			updateAllBatteryInfo();
			battery.addEventListener('levelchange',      function(){
			setInterval(function(){
			updateLevelInfo()
			},1000);
			});
			function updateLevelInfo(){
			var numBattery = battery.level * 100;
			percentageLevel.textContent=Math.round(numBattery) + "%";
			styleBatteryLevel.height=numBattery + "%";
			if(numBattery<=15) {
			styleBatteryLevel.background="red";
			}
			};
			});