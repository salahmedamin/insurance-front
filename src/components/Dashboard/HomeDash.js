import Options from "./HomeDash/Options"
// import { Table } from "./HomeDash/Table"
// import { contractTableHead, employeeTableHead } from "./HomeDash/Table/table_heads"
import Welcome from "./HomeDash/Welcome"
// const contrat = [{
//   matricule:"5qsdz-qdqsd-qsdqs-sqdqq-52r3z",
//   debut: "18 Juin 2021",
//   fin: "18 Juin 2022",
//   offre:"Advanced",
//   plafond: 2000,
//   status: "Actif",
//   liste: true,
//   viewable: ["liste"]
// }]

// const client = [{
//   matricule:"14450038",
//   nom: "Amin",
//   prenom: "Salah",
//   sexe:"Homme",
//   dateNaiss: "18 June 2000",
//   contract: true,
//   action:true,
//   viewable: ["contract"]
// }]
export const HomeDash = () => {
  return (
    <>
      <Welcome/>
      <Options />
      {/* <Table title="Liste des employés" tableHeads={employeeTableHead} map={client}/> */}
    </>
  )
}
