
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";

function CardDetails() {
const location = useLocation();
const CardDetails = location.state;
    const navigate = useNavigate();

    if (!CardDetails) {
        return <h2>No Country Selected</h2>;
    }

    return (
        <>
            <Navbar />
            <hr />

            <div className="cardDetails_Container">
                <i className="ri-arrow-left-long-line"></i>
                <button onClick={() => navigate("/")}>Back</button>
            </div>

            <div className="CardDetails_InnerDiv">

                <img
                    src={`https://flags.restcountries.com/v5/w320/${CardDetails.cca2.toLowerCase()}.png`}
                    alt=""
                />

                <div className="InnerOne">

                    <h1>{CardDetails.name.common}</h1>

                    <p>Native Name:
                        <span>{Object.values(CardDetails.name.nativeName || {})[0]?.common}</span>
                    </p>

                    <p>Population:
                        <span>{CardDetails.population?.toLocaleString()}</span>
                    </p>

                    <p>Region:
                        <span>{CardDetails.region}</span>
                    </p>

                    <p>Sub Region:
                        <span>{CardDetails.subregion}</span>
                    </p>

                    <p>Capital:
                        <span>{CardDetails.capital?.[0]}</span>
                    </p>

                </div>

                <div className="InnerTwo">

                    <p>Top Level Domain:
                        <span>{CardDetails.tld?.join(", ")}</span>
                    </p>

                    <p>Currencies:
                        <span>{Object.values(CardDetails.currencies || {}).map(c => c.name).join(", ")}</span>
                    </p>

                    <p>Language:
                        <span>{Object.values(CardDetails.languages || {}).join(", ")}</span>
                    </p>

                </div>

            </div>
        </>
    )
}

export default CardDetails;
