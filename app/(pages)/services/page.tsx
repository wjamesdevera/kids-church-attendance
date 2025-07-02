import { ColumnDef } from "@tanstack/react-table";
import ServicesTable from "./services-table";

// TODO: Remove in production
const tmp_services = [
  {
    id: "1",
    name: "12AM",
    description: "12AM service",
    startTime: "12:00:00",
    endTime: "13:00:00",
  },
  {
    id: "2",
    name: "1AM",
    description: "1AM service",
    startTime: "01:00:00",
    endTime: "02:00:00",
  },
  {
    id: "3",
    name: "2AM",
    description: "2AM service",
    startTime: "02:00:00",
    endTime: "03:00:00",
  },
  {
    id: "4",
    name: "3AM",
    description: "3AM service",
    startTime: "03:00:00",
    endTime: "04:00:00",
  },
];
type Service = {
  id: string;
  name: string;
  description: string;
  startTime: string;
  endTime: string;
};

const columns: ColumnDef<Service>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "startTime",
    header: "Start Time",
  },
  {
    accessorKey: "endTime",
    header: "End Time",
  },
];

const Page = () => {
  return <div className="p-5">
    <h2 className="font-bold text-2xl mb-2">Services</h2>
    <div className="">
      <ServicesTable columns={columns} data={tmp_services}/>
    </div>
  </div>;
};

export default Page;
