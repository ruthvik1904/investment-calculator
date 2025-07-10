import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({ input }) {
    const results = calculateInvestmentResults(input);
    console.log(results);
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {results.map(data => {
                const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year -  initialInvestment;
                const totalAmountInvested = data.valueEndOfYear - totalInterest;
                return (<tr key={data.year}>
                    <td>{data.year}</td>
                    <td>{formatter.format(data.valueEndOfYear)}</td>
                    <td>{formatter.format(data.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>);
            })}
        </tbody>
    </table>
}