import { publications } from "@/data/publications";
import type { Publication } from "@/data/publications";
import type { DoctorId } from "@/data/doctors";

export function getDoctorPublications(
  doctorId: DoctorId,
  featuredOnly = false
): Publication[] {

  return publications.filter(publication => {

    if (publication.doctorId !== doctorId) {
      return false;
    }

    if (featuredOnly && !publication.featured) {
      return false;
    }

    return true;
  });

}