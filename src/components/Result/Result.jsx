import './Result.css';

function Result({ food, probability }) {
    const startsWithVowel = /^[aeiou]/i.test(food);
    const article = startsWithVowel ? 'an' : 'a';
    if (food) {
        return (
            <div className="center result-div-2 div1">
                {`The food is recognized as ${article} ${food} with a probability of ${(
                    probability * 100
                ).toFixed(2)}%`}
            </div>
        );
    }
}

export default Result;
