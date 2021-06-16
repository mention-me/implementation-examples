import React from "react";

interface Props {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const DiscountCouponField: React.FunctionComponent<Props> = ({
    onSubmit
}) => {
    return (
      <form onSubmit={onSubmit} >
        <label htmlFor="couponCode">Coupon Code</label>
        <input name="couponCode" type="text" />
        <button type="submit">Add</button>
      </form>
    );
  };
  
  export default DiscountCouponField;
  