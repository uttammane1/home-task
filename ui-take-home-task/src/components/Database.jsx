const Database = ({ isMocked, setIsMocked }) => {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={isMocked}
            onChange={() => setIsMocked(prev => !prev)}
          />
          Mock Database
        </label>
      </div>
    );
  };
  
  export default Database;
  