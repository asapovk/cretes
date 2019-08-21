import api from './index'
import { ParticipantCreateInput } from '../generated/schema'

const createTestParticipnatInput: ParticipantCreateInput = {
    name: 'Konstantin Asdtapov',
    title: 'Dr.',
    email: 'asapovk@gmail.com'
}

api("uploadParticipants", createTestParticipnatInput)