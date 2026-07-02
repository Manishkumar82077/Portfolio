// Contact form configuration used by the Contact section.
// The Formspree form ID lives in .env (VITE_FORMSPREE_ID).
const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

export const contactConfig = {
  formEndpoint: `https://formspree.io/f/${formspreeId}`,
  subjects: [
    { value: "freelance", label: "Freelance Project" },
    { value: "job", label: "Job Opportunity" },
    { value: "hi", label: "Just Saying Hi!" },
  ],
};
