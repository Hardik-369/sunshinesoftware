/**
 * Founder profile.
 *
 * Image: drop the founder's photo at /public/team/ashwini-nalawade.png —
 * the founder section already points there.
 */
export type Founder = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const founder: Founder = {
  name: "Ashwini Nalawade",
  role: "Founder",
  bio: "Leads the vision and direction of SunshineSoftware — building technology, mentoring learners and supporting research and patent work with integrity.",
  image: "/team/ashwini-nalawade.png",
};