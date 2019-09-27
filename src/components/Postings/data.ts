import { IPosting } from '../../interfaces/IPosting'

const data: IPosting[] | [] = [
  { id: "1", role: "React", company: "Company A", rate: "£450" },
  { id: "2", role: "Scala", company: "Company B", rate: "£500" },
  { id: "3", role: "Go", company: "Company C", rate: "£400" }
];

const dataTwo = [
  { id: "1", role: "React", company: "Company A", rate: "£450" }
];

export { data, dataTwo };
