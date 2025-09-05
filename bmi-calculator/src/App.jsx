import { useState } from 'react';
import './App.css';

function App() {
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');
	const [bmi, setBmi] = useState(null);
	const [category, setCategory] = useState('');

	const calculateBMI = e => {
		e.preventDefault();
		if (!height || !weight) return;
		const h = parseFloat(height) / 100;
		const w = parseFloat(weight);
		if (h > 0 && w > 0) {
			const bmiValue = w / (h * h);
			setBmi(bmiValue.toFixed(2));
			let cat = '';
			if (bmiValue < 18.5) cat = 'Underweight';
			else if (bmiValue < 25) cat = 'Normal weight';
			else if (bmiValue < 30) cat = 'Overweight';
			else cat = 'Obese';
			setCategory(cat);
		} else {
			setBmi(null);
			setCategory('');
		}
	};

	return (
		<div className="bmi-container">
			<h1>BMI Calculator</h1>
			<form className="bmi-form" onSubmit={calculateBMI}>
				<input
					type="number"
					value={height}
					onChange={e => setHeight(e.target.value)}
					placeholder="Height (cm)"
					className="bmi-input"
					min="0"
				/>
				<input
					type="number"
					value={weight}
					onChange={e => setWeight(e.target.value)}
					placeholder="Weight (kg)"
					className="bmi-input"
					min="0"
				/>
				<button type="submit" className="bmi-btn">
					Calculate
				</button>
			</form>
			{bmi && (
				<div className="bmi-result">
					<p>
						Your BMI: <strong>{bmi}</strong>
					</p>
					<p>
						Category: <strong>{category}</strong>
					</p>
				</div>
			)}
		</div>
	);
}

export default App;