import ClipLoader from "react-spinners/ClipLoader";  

const Spinner = () => {  
  return (  
    // fixme - resize on different screen
    <div className="flex items-center justify-center">
      <ClipLoader color={'#202224'} />  
      {/* <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
    </div>  
  );  
};  

export default Spinner;