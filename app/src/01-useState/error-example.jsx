const ErrorExample = () => {
    let count = 0
    function handleClick() {
      count = count + 1;
      console.log(count);
    }
    return (
    <>  
      <h2>useState error example</h2>
      <h2>{count}</h2>  
      <button type="button" onClick={handleClick}>Click here</button>
    </>
    );
  };
  
  export default ErrorExample;