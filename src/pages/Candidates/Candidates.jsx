import React from "react";
import Layout from "../../components/Layout/Layout";
import HeroCandidates from "../../components/Heros/HeroCandidates/HeroCandidates";
import ApplicationCard from "../../components/Cards/ApplicationCard/ApplicationCard";

const Candidatos = () => {
  return (
    <Layout>
      <HeroCandidates />
      <ApplicationCard/>
      <div style={{height:"300px"}}> 

      </div>
    </Layout>
  );
};

export default Candidatos;
