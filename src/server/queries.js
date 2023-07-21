import HttpError from '@wasp/core/HttpError.js'

export const getBookings = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  return context.entities.Booking.findMany({
    where: {
      userId: context.user.id
    },
    include: {
      user: true,
      hostel: true
    }
  })
}

export const getHostels = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Hostel.findMany();
}