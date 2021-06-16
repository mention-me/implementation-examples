const DiscountCouponField = ({
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
  