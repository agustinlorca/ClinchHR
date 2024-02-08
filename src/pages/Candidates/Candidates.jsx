import React from "react";
import Layout from "../../components/Layout/Layout";
import HeroCandidates from "../../components/Heros/HeroCandidates/HeroCandidates";
import ApplicationCard from "../../components/Cards/ApplicationCard/ApplicationCard";
import ProcessCard from "../../components/Cards/ProcessCard/ProcessCard";

const Candidatos = () => {
  return (
    <Layout>
      <HeroCandidates />
      <ApplicationCard/>
      <ProcessCard/>
      <div style={{height:"300px"}}> 

      </div>
    </Layout>
  );
};

export default Candidatos;
