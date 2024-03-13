import UnderDevimg from "../../assets/images/underdev.gif";

const UnderDevelopment = () => {
  return (
    <div
      style={{
        padding: "30px",
        width: "100%",
      }}
    >
      <img
        src={UnderDevimg}
        style={{ marginLeft: "auto", marginRight: "auto" }}
      />
      <p style={{ textAlign: "center" }}>Page is under development...</p>
    </div>
  );
};

export default UnderDevelopment;
