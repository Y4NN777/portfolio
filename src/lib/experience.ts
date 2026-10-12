import type { translations } from "@/lib/i18n/translations";

export type ExperienceItemKey = keyof typeof translations.en.experience.items;

export const experienceGroups: ReadonlyArray<{
  id: string;
  roles: readonly ExperienceItemKey[];
}> = [
  { id: "african-american-academy", roles: ["africanAmericanAcademy"] },
  { id: "aiobi", roles: ["aïobiSystems", "aïobi"] },
  { id: "y7labs", roles: ["y7labs"] },
  { id: "fikasso", roles: ["fikasso"] },
  { id: "bit-solutions", roles: ["bitSolutions"] },
  { id: "freelance", roles: ["freelance"] },
];

export function periodOnly(period: string) {
  return period.split(" · ")[0];
}
