

import { NextApiRequest, NextApiResponse } from 'next';
import trips from '../../app/components/data/trips.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { region, type, startDate, endDate, budgetMin, budgetMax } = req.query;

  const filteredTrips = trips.filter((trip) => {
    return (
      (!region || trip.region.includes(region as string)) &&
      (!type || trip.type === type) &&
      (!startDate || new Date(trip.date) >= new Date(startDate as string)) &&
      (!endDate || new Date(trip.date) <= new Date(endDate as string)) &&
      (!budgetMin || trip.budget >= +budgetMin) &&
      (!budgetMax || trip.budget <= +budgetMax)
    );
  });

  res.status(200).json(filteredTrips);
}
