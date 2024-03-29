import React, { useEffect, useState } from "react";

import MentionMe from "./components/MentionMe";
import DiscountCouponField from "./components/DiscountCouponField";

const randomTotal = () => {
  return (Math.random() * 100).toFixed(2);
}

const App: React.VoidFunctionComponent = () => {
  const [total, setTotal] = useState(randomTotal());
  const [random, setRandom] = useState(Math.random());

  useEffect(() => {
    const timeout = setInterval(() => {
      setRandom(Math.random()); // Added to force re-renders
    }, 2000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <div>
      Total: {total}<br />
      Random: {random}
      <MentionMe situation="checkout" locale="en_GB" implementation="link" />
      <DiscountCouponField onSubmit={() => setTotal(randomTotal())} />
    </div>
  );
};

export default App;