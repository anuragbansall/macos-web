import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [operand, setOperand] = useState(null);
  const [overwrite, setOverwrite] = useState(false);

  const handleNumberClick = (num) => {
    if (input === "0" || overwrite) {
      setInput(String(num));
      setOverwrite(false);
    } else {
      setInput((prev) => prev + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (operator && !overwrite) handleEquals();
    setOperand(parseFloat(input));
    setOperator(op);
    setOverwrite(true);
  };

  const handleEquals = () => {
    if (operator && operand != null) {
      const current = parseFloat(input);
      let result;
      switch (operator) {
        case "+":
          result = operand + current;
          break;
        case "-":
          result = operand - current;
          break;
        case "*":
          result = operand * current;
          break;
        case "/":
          result = operand / current;
          break;
        default:
          return;
      }
      setInput(String(result));
      setOperator(null);
      setOperand(null);
      setOverwrite(true);
    }
  };

  const handleClear = () => {
    setInput("0");
    setOperator(null);
    setOperand(null);
    setOverwrite(false);
  };

  const handlePlusMinus = () => {
    setInput((prev) => String(parseFloat(prev) * -1));
  };

  const handlePercent = () => {
    setInput((prev) => String(parseFloat(prev) / 100));
  };

  const handleDot = () => {
    if (!input.includes(".")) {
      setInput((prev) => prev + ".");
    }
  };

  const buttonClass = (color = "bg-[#5c5c5c]") =>
    `${color} text-white text-2xl font-medium flex items-center justify-center rounded border border-black active:scale-95 transition-all`;

  const gridClass =
    "grid grid-cols-4 grid-rows-5 gap-[1px] p-[1px] rounded-xl overflow-hidden";

  return (
    <div className="flex flex-col h-full w-full p-4 gap-4">
      <div className="text-right text-5xl text-white px-4 py-2 rounded-xl">
        {input}
      </div>
      <div className={gridClass}>
        <button className={buttonClass()} onClick={handleClear}>
          AC
        </button>
        <button className={buttonClass()} onClick={handlePlusMinus}>
          +/-
        </button>
        <button className={buttonClass()} onClick={handlePercent}>
          %
        </button>
        <button
          className={buttonClass("bg-[#f1a33c]")}
          onClick={() => handleOperatorClick("/")}
        >
          ÷
        </button>

        {[7, 8, 9].map((n) => (
          <button
            key={n}
            className={buttonClass()}
            onClick={() => handleNumberClick(n)}
          >
            {n}
          </button>
        ))}
        <button
          className={buttonClass("bg-[#f1a33c]")}
          onClick={() => handleOperatorClick("*")}
        >
          ×
        </button>

        {[4, 5, 6].map((n) => (
          <button
            key={n}
            className={buttonClass()}
            onClick={() => handleNumberClick(n)}
          >
            {n}
          </button>
        ))}
        <button
          className={buttonClass("bg-[#f1a33c]")}
          onClick={() => handleOperatorClick("-")}
        >
          −
        </button>

        {[1, 2, 3].map((n) => (
          <button
            key={n}
            className={buttonClass()}
            onClick={() => handleNumberClick(n)}
          >
            {n}
          </button>
        ))}
        <button
          className={buttonClass("bg-[#f1a33c]")}
          onClick={() => handleOperatorClick("+")}
        >
          +
        </button>

        <button
          className={"col-span-2 " + buttonClass()}
          onClick={() => handleNumberClick(0)}
        >
          0
        </button>
        <button className={buttonClass()} onClick={handleDot}>
          .
        </button>
        <button className={buttonClass("bg-[#f1a33c]")} onClick={handleEquals}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
