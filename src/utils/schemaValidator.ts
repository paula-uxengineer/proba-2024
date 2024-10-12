import z from 'zod';

export const userSchema = z.object({
    nom: z.string().min(1, "El nom és obligatori"),
    cognom: z.string().min(1, "El cognom és obligatori"),
    edat: z
    .number()
    .positive({ message: 'L\'edat ha de ser un número positiu' })
    .int({ message: 'L\'edat ha de ser un número enter' }),
    email: z.string().email("Correu electrònic invàlid"),
    password: z.string().min(6, "La contrasenya ha de tenir almenys 6 caràcters"), 
  });

  export const activitySchema = z.object({
    titul: z.string().min(1, "El títol és obligatori"),
    descripcio: z.string().min(1, "La descripció és obligatòria"),
    max_capacitat: z.number().min(1, "La capacitat màxima ha de ser almenys 1"),
  });