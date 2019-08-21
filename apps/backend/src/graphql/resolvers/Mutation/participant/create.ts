
import { prisma } from '../../../../generated'
import { CreateParticipantMutationArgs, Participant } from '../../../../generated/prisma-schema.d'
/**
 * @resolver
 */
export default async (_, args: CreateParticipantMutationArgs, ctx, info): Promise<Participant> => {
    try {
        const res: Participant = await prisma.createParticipant({
            email: args.data.email,
            title: args.data.name,
            name: args.data.name
        });
        return res

    } catch (error) {
        throw error;
    }
}