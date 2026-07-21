import { publications } from "@/data/publications";
import type { Publication } from "@/data/publications";
import type { DoctorId } from "@/data/doctors";


export function getDoctorPublications(
  doctorId: DoctorId
): Publication[] {

  return publications.filter(
    publication =>
      publication.doctorId === doctorId &&
      publication.featured
  );

}