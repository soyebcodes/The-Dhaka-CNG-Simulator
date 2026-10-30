export type DestinationId =
  | "farmgate"
  | "motijheel"
  | "new_market"
  | "sadarghat"
  | "baitul_mukarram"
  | "shahbag"
  | "dhaka_university"
  | "gulistan";

export interface Destination {
  id: DestinationId;
  nameBn: string;
  distanceMeters: number;
  baseFare: number;
  zoneType: "market" | "residential" | "commercial" | "cultural";
}

export type WeatherType = "sunny" | "rainy";

export interface Passenger {
  id: string;
  nameBn: string;
  avatar: string;
  dialogueBn: string;
  driverReplyBn: string;
  topicTag: string;
  pickupDistance: number;
  dropDistance: number;
  destination: Destination;
  fareOffer: number;
  isUrgent: boolean;
  patienceSec: number;
  isRainOnly?: boolean;
}

export type CheckpointType =
  | "traffic_police"
  | "railway_crossing"
  | "moholla_club";

export interface Checkpoint {
  id: string;
  type: CheckpointType;
  distance: number;
  titleBn: string;
  subBn: string;
  demandAmount: number;
  dialogueBn: string;
  passed: boolean;
  evaded: boolean;
}

export interface TrafficVehicle {
  id: number;
  type: "bus" | "rickshaw" | "baby_taxi" | "tempo" | "vintage_car";
  lane: number;
  z: number;
  speed: number;
  width: number;
  length: number;
  color: string;
}

export interface CNGStats {
  speedKmh: number;
  topSpeed: number;
  acceleration: number;
  handling: number;
  driftFactor: number;
  fuelLiter: number;
  maxFuel: number;
}

export interface GameMetrics {
  cash: number;
  totalChandaPaid: number;
  totalBribesPaid: number;
  totalFaresEarned: number;
  tripsCompleted: number;
  chasesEscaped: number;
  distanceTraveledMeters: number;
}

export interface StreetEvent {
  id: string;
  emoji: string;
  textBn: string;
  durationSec: number;
}
