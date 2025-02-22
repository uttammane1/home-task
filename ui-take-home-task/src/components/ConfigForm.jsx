import { saveConfiguration } from "../api/graphAPI";

const ConfigForm = ({ flow, selectedDeps, isMocked }) => {
  const handleSave = () => {
    saveConfiguration({
      flow,
      entities_to_mock: selectedDeps,
      is_db_mocked: isMocked,
      db_config: { username: "admin", password: "password" },
    });
  };

  return <button onClick={handleSave}>Save Configuration</button>;
};

export default ConfigForm;
