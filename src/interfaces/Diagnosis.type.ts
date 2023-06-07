interface Diagnosis {
  id: number;
  person_id: number;
  name: string;
  type: string;
  description: string;
  diagnosis: string;
  difficulty: string;
  part_of_body: string;
}

export default Diagnosis;
