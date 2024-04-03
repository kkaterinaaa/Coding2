// Try using ES6 modules import and export in OpenProcessing 
// 
// Press 'c' to toggle between curveVertex and vertex.
// Press 's' to show/hide circles.
// Press '↑' or '↓' to increase/decrease the number of circles.
// Press '←' or '→' to decrease/increase the circle size.
// Use the mouseX position to adjust noise weight.
// Use the mouseY position to control the rotation angle.

import { createNoise4D } from 'https://cdn.skypack.dev/simplex-noise@4.0.0'
import { mountFlex } from "https://cdn.jsdelivr.net/npm/p5.flex@0.0.0/src/p5.flex.mjs"
import { PressDo } from "./Control.js"

mountFlex(p5)

new p5((p) => {
	const simplexNoiseSeed = p.random()
	const noise4D = createNoise4D(()=>simplexNoiseSeed)
	const speed = 0.01
	const radius = 150
	let amount = 200
	let circleSize = 10
	let isCurve = false
	let isShowCircle = true
	
	p.setup = () => {
		p.createCanvas(600, 600)
		p.pixelDensity(2)
		p.stroke(255)
		p.noFill()
		// PressDo("c", () => { isCurve = !isCurve })
		// PressDo("s", () => { isShowCircle = !isShowCircle })
		// PressDo("ArrowUp", () => { amount += 15 })
		// PressDo("ArrowDown", () => { amount = p.max(0, amount - 15) })
		// PressDo("ArrowRight", () => { circleSize += 1 })
		// PressDo("ArrowLeft", () => { circleSize = p.max(0, circleSize - 1) })
		p.flex()
	}
	
	p.draw = () => {
		const t = p.frameCount * speed
		p.background(0)
		const noiseWeight = p.map(p.mouseX, 0, p.width, -100, 100, true)
		const angle = p.map(p.mouseY, 0, p.height, -p.PI, p.PI, true)
		p.translate(p.width / 2, p.height / 2)
		p.rotate(angle)
		drawNobo(radius, noiseWeight, amount, circleSize, t)
	}
	
	const drawNobo = (radius, noiseWeight, amount, circleSize, t) => {
		p.push()
		p.beginShape()
		for (let i = 0; i < (p.TWO_PI / amount) * (amount + 3); i += p.TWO_PI / amount) {
			const x = p.cos(i) * radius
			const y = p.sin(i) * radius
			const nx = noise4D(x + 100, y + 200, p.cos(t), p.sin(t)) * noiseWeight
			const ny = noise4D(x + 300, y + 400, p.cos(t), p.sin(t)) * noiseWeight
			if (isCurve) p.curveVertex(x + nx, y + ny)
			else p.vertex(x + nx, y + ny)
			if (isShowCircle) p.circle(x + nx, y + ny, circleSize)
		}
		p.endShape()
		p.pop()
	}
})
