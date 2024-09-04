window.onload = () => {
	fetch('https://raw.githubusercontent.com/logangeorge01/fineart/master/js/artwork.json')
		.then(response => response.json())
		.then(artworks => {
			// artworks = asdf.map(artwork => artwork.slice(0, 4));
			// artworks = asdf.slice(0, 4)
			const gallery = document.getElementById('gallery');

			// Set up the grid properties
			const columns = Math.ceil(Math.sqrt(artworks.length)); // Square root to create a nearly square grid
			gallery.style.gridTemplateColumns = `repeat(${columns}, 1fr)`; // Create a grid with dynamic columns

			artworks.forEach(artwork => {
				const [title, artist, year, url] = artwork;

				const container = document.createElement('div');
				container.style.display = 'flex';
				container.style.flexDirection = 'column';
				container.style.alignItems = 'center';
				container.style.justifyContent = 'center';

				const img = document.createElement('img');
				img.src = url;
				img.alt = title;
				img.style.maxWidth = '100%';
				img.style.maxHeight = '100px'; // Set the max height to keep images small
				img.style.objectFit = 'contain';

				const caption = document.createElement('div');
				caption.textContent = `${title} (${artist}, ${year})`;
				caption.style.color = 'white';
				caption.style.fontSize = '12px';
				caption.style.textAlign = 'center';
				caption.style.marginTop = '5px';

				container.appendChild(img);
				container.appendChild(caption);
				gallery.appendChild(container);
			});

		})
		.catch(error => console.error('Error fetching the JSON file:', error));
}
