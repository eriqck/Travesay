import HttpError from '@wasp/core/HttpError.js'

export const createBooking = async ({ hostelId, startDate, endDate }, context) => {
  if (!context.user) { throw new HttpError(401) };

  const user = await context.entities.User.findUnique({
    where: { id: context.user.id }
  });

  const hostel = await context.entities.Hostel.findUnique({
    where: { id: hostelId }
  });

  if (!hostel) { throw new HttpError(404) };

  const booking = await context.entities.Booking.create({
    data: {
      userId: user.id,
      hostelId,
      startDate,
      endDate
    }
  });

  return booking;
}

export const createHostel = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  const { name, location, description, price } = args

  const newHostel = await context.entities.Hostel.create({
    data: {
      name,
      location,
      description,
      price,
      ownerId: context.user.id
    }
  })

  return newHostel
}