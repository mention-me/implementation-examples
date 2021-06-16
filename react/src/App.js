import React, { useEffect, useState } from "react";

import MentionMe from "./components/MentionMe";
import DiscountCouponField from "./components/DiscountCouponField";

const randomTotal = () => {
  return (Math.random() * 100).toFixed(2);
}

const App = () => {
  const [total, setTotal] = useState(randomTotal());
  const [random, setRandom] = useState(Math.random());

  // Added to force re-renders
  useEffect(() => {
    const timeout = setInterval(() => {
      setRandom(Math.random());
    }, 2000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  const onDiscountCodeSubmit = (event) => {
    event.preventDefault();
    setTotal(randomTotal());
  };

  return (
    <div className="App">
      Random: {random}<br />
      Total: {total}
      <MentionMe situation="checkout" locale="en_GB" implementation="link" />
      <DiscountCouponField onSubmit={onDiscountCodeSubmit} />
    </div>
  );
};

export default App;
