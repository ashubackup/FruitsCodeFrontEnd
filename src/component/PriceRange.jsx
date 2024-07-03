import React, { useState } from "react";

const PriceRange = () => {
    const [rangeValue, setRangeValue] = useState(0);

    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
    };

    return (
        <div className="col-lg-12">
            <div className="mb-3">
                <h4 className="mb-2">Price</h4>
                <input
                    type="range"
                    className="form-range w-100"
                    id="rangeInput"
                    name="rangeInput"
                    min="0"
                    max="500"
                    value={rangeValue}
                    onChange={handleRangeChange}
                />
                <output id="amount" name="amount" htmlFor="rangeInput">
                    {rangeValue}
                </output>
            </div>
        </div>
    );
};

export default PriceRange;
