export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  from: string;
  to: string;
  departureDate: Date;
  arrivalDate: Date;
  price: number;
  duration: number;
  stops: number;
  aircraft: string;
  availableSeats: number;

  status?: string;
  departureTerminal?: string;
  departureGate?: string;
  departureDelay?: number | null;
  arrivalGate?: string;
  arrivalBaggage?: string;
  latitude?: number | null;
  longitude?: number | null;
}

export interface SearchFilters {
  from: string;
  to: string;
  departureDate?: Date;
  returnDate?: Date;
  passengers: number;
  isRoundTrip: boolean;
}

export interface FlightFilters {
  maxPrice?: number;
  maxStops?: number;
  airlines?: string[];
  sortBy: 'price' | 'duration' | 'departure';
  sortOrder: 'asc' | 'desc';
}