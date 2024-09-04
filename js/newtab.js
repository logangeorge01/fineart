window.onload = () => {
	fetch('https://raw.githubusercontent.com/logangeorge01/fineart/logangeorge/master/artwork.json')
		.then(response => response.json())
		.then(l => {
			const stop = Date.now() % l.length;
			const img = new Image();
			img.src = l[stop][3];
			const int = setInterval(() => {
				if (img.complete) {
					clearInterval(int);
					document.getElementById('artwork').src = l[stop][3];
					document.getElementById('desc').innerHTML = `<b>${l[stop][0]}</b><br>${l[stop][1]}<br>${l[stop][2]}`;
				}
			}, 50);
		})
		.catch(error => console.error('Error fetching the JSON file:', error));
}
