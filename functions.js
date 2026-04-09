document.addEventListener('DOMContentLoaded', function () {
	const container = document.getElementById('grid-container');
	const resetBtn = document.getElementById('reset-btn');
	
	if (!container) return;

	createGrid(16);

	if (resetBtn) {
		resetBtn.addEventListener('click', function() {
			let size = prompt('Enter grid size (max 100):');
			size = parseInt(size);
			
			if (isNaN(size) || size < 1) {
				alert('Please enter a valid number!');
				return;
			}
			if (size > 100) {
				alert('Maximum size is 100!');
				size = 100;
			}
			
			createGrid(size);
		});
	}

	function createGrid(size) {
		container.innerHTML = '';
		
		const total = size * size;

		for (let i = 0; i < total; i++) {
			const cell = document.createElement('div');
			cell.className = 'grid-square';
			
			cell.style.flexBasis = `calc(100% / ${size})`;
			cell.style.height = `calc(100% / ${size})`;
			
			cell.dataset.interactions = '0';
		
			cell.addEventListener('mouseenter', function() {
				let interactions = parseInt(this.dataset.interactions);
				
				if (interactions < 10) {
					const r = Math.floor(Math.random() * 256);
					const g = Math.floor(Math.random() * 256);
					const b = Math.floor(Math.random() * 256);
					
					interactions++;
					const opacity = interactions * 0.1;
					
					this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
					this.style.opacity = opacity;
					this.dataset.interactions = interactions;
				}
			});
			
			container.appendChild(cell);
		}
	}
});

