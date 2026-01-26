
export default function UserInput({ onChange, UserInput }) {
      return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type='number' 
                    required
                    value={UserInput.initialInvestment} 
                    onChange={(event) => 
                    onChange('initial-investment', event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type='number' 
                    required
                    value={UserInput.annualInvestment} 
                    onChange={(event) => handleChange('annual-investment', event.target.value)} />
                </p>
            </div>
                    <section id='user-input'>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type='number' 
                    required
                    value={UserInput.expectedReturn}
                    onChange={(event) => handleChange('expected-return', event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type='number' 
                    required
                    value={UserInput.duration}
                    onChange={(event) => handleChange('duration', event.target.value)} />
                </p>
            </div>
        </section>

        </section>
    );
}