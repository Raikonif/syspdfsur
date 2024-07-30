import { CYTOLOGY, HISTOPATHOLOGY, PAP } from "~/constants";

export const typeListOptions = [
  {
    id: 1,
    value: HISTOPATHOLOGY,
    label: "Histopatológico",
  },
  {
    id: 2,
    value: PAP,
    label: "Papanicolaou",
  },
  {
    id: 3,
    value: CYTOLOGY,
    label: "Citológico",
  },
];
