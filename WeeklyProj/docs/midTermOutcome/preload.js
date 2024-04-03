function preload() {

	for (let i = 0; i < totalFrames1; i++) {
	  frames1[i] = loadImage(`frames1/${i + 1}.png`);
	}
  
	for (let i = 0; i < totalFrames2; i++) {
	  frames2[i] = loadImage(`frames2/${i + 1}.png`);
	}

	for (let i = 0; i < totalFrames3; i++) {
		frames3[i] = loadImage(`frames3/${i + 1}.png`);
	  }

	  for (let i = 0; i < totalFrames4; i++) {
		frames4[i] = loadImage(`frames4/${i + 1}.png`);
	  }
	
	  for (let i = 0; i < totalFrames5; i++) {
		frames5[i] = loadImage(`frames5/${i + 1}.png`);
	  }
  
	  for (let i = 0; i < totalFrames6; i++) {
		  frames6[i] = loadImage(`frames6/${i + 1}.png`);
		}
	  
  sound = loadSound('Raven.mp3');
  }