import { Participant } from '../../../generated/prisma-schema.d'
import { prisma } from '../../../generated'


/**
 * @resolver
 */
export default async (req: any, args, { db }, info) => {
    try {
        const parisipants: Participant[] | null = await prisma.participants().$fragment(`
        fragment PartisipantsWith on Participant {
            name
            title
            email
        }
        `)
        console.log(parisipants)
        return parisipants
    } catch (error) {
        throw error;
    }
}