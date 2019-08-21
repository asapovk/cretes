
import { prisma } from '../../../../generated'
import { Participant } from '../../../../generated/prisma-schema.d'
import { CreateParticipantMutationArgs } from '../../../../generated/schema'

/**
 * @resolver
 */
export default async (_, args: CreateParticipantMutationArgs, ctx, info): Promise<Participant> => {
    try {
        const res: Participant = await prisma.createParticipant({
            email: args.input.email,
            title: args.input.name,
            name: args.input.name
        });
        return res

    } catch (error) {
        console.log(error)
        throw error;
    }
}