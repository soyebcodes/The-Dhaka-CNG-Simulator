export type DestinationId =
  | "farmgate"
  | "mirpur10"
  | "dhanmondi27"
  | "gulshan1"
  | "old_dhaka"
  | "shahbag";

export interface Destination {
  id: DestinationId;
  nameBn: string;
  distanceMeters: number;
  baseFare: number;
  zoneType: "market" | "residential" | "vip" | "congested";
}

export type WeatherType = "sunny" | "rainy";

export interface Passenger {
  id: string;
  nameBn: string;
  avatar: string;
  dialogueBn: string;
  driverRoastBn: string;
  roastTopic: "rain" | "meter" | "garage" | "waterlog" | "traffic";
  pickupDistance: number;
  dropDistance: number;
  destination: Destination;
  fareOffer: number;
  isUrgent: boolean;
  patienceSec: number;
  isRainOnly?: boolean;
}

export type CheckpointType =
  | "police_sergeant"
  | "boro_bhai_chanda"
  | "flyover_toll"
  | "vip_protocol";

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
  type: "bus" | "rickshaw" | "cng" | "bike" | "car";
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
  gasPressureBar: number; // 0 to 200 bar
  maxGas: number;
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
