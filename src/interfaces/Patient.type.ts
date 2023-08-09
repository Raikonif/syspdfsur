interface Patient {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  age: number | string;
  dni: number | string;
  clinical_history?: number | string;
  register_birth?: number | string;
}

export default Patient;
