import React, { useEffect, useState } from "react";

import PuffLoader from "react-spinners/PuffLoader";
import { useRouter } from "next/router";

const index = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      router.push("/inicio");
    }, 6000);
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#1C1C1C",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        color: "white",
      }}
    >
      {loading ? (
        <PuffLoader color={"#800000"} loading={loading} size={200} />
      ) : (
        <></>
      )}
      {loading && (
        <div style={{ width: "90px", height: "90px", position: "absolute" }}>
          <h7>Bem-Vindo ao ACADEMICO</h7>
        </div>
      )}
    </div>
  );
};

export default index;
