import { useRouter } from "next/router";
import React from "react";

const Peoducts = () => {
  const router = useRouter();
  console.log(router.pathname);
  //   console.log(router.query);
  return <div>Peoducts</div>;
};

export default Peoducts;
