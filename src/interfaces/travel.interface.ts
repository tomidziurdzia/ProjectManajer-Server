import { BusinessProps } from "./business.interface";
import { EmployeeProps } from "./employee.interface";
import { ShipmentProps } from "./shipment.interface";
import { VehicleProps } from "./vehicle.interface";

export interface TravelProps {
  id?: string;
  business: BusinessProps;
  date: Date;
  driver: EmployeeProps;
  assistant: EmployeeProps;
  shipment: ShipmentProps[];
  vehicle: VehicleProps;
}