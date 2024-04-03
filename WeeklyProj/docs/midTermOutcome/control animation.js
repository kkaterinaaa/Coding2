let stage = 1;

function play1(){
	if (animationPlaying1 ) {
		image(frames1[currentFrame1], 0, 0, width, height);
		currentFrame1++;
	
		// 当达到最后一帧时，停止动画
		if (currentFrame1 >= totalFrames1) {
		  animationPlaying1 = false; 
		  currentFrame1 = totalFrames1 - 1; 
		}
	  }
	}
	
	function play2(){
		if (animationPlaying2) {
			image(frames2[currentFrame2], 0, 0, width, height);
			currentFrame2++;
		
			if (currentFrame2 >= totalFrames2) {
			  animationPlaying2 = false; 
			  currentFrame2 = totalFrames2 - 1; 
			}
		  }
		}


	function play3(){
		if (animationPlaying3) {
			image(frames3[currentFrame3], 0, 0, width, height);
			currentFrame3++;
		
			if (currentFrame3 >= totalFrames3) {
			  animationPlaying3 = false; 
			  currentFrame3 = totalFrames3 - 1; 
			}
		  }
		}
	
		function play4(){
			if (animationPlaying4) {
				image(frames4[currentFrame4], 0, 0, width, height);
				currentFrame4++;
			
				if (currentFrame4 >= totalFrames4) {
					animationPlaying4 = false; 
					currentFrame4 = totalFrames4 - 1; 
				}
			}
		}

		function play5(){
			if (animationPlaying5) {
				image(frames5[currentFrame5], 0, 0, width, height);
				currentFrame5++;
			
				if (currentFrame5 >= totalFrames5) {
					animationPlaying5 = false; 
					currentFrame5 = totalFrames5 - 1; 
				}
			}
		}

		function play6(){
			if (animationPlaying6) {
				image(frames6[currentFrame6], 0, 0, width, height);
				currentFrame6++;

				if (currentFrame6 >= totalFrames6) {
					animationPlaying6 = false; 
					currentFrame6 = totalFrames6 - 1; 
				}
			}
		}
		
				
		function mousePressed() {
			stage++;
			if (stage > 6) {
				stage = 6; 
			  }
			}